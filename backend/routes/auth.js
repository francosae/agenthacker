const express = require('express')
const router = express.Router()
const prisma = require('../lib/prisma')
const { createUser } = require('../utils/tokens')
const security = require('../middleware/security')
const { loginFields, registerFields, emailRegex } = require('../lib/fields')
const { BadRequestError, UnauthorizedError } = require('../utils/errors')
const bcrypt = require('bcrypt')

router.post('/register', async (req, res, next) => {
    
    function validateEmaiL(email) {
        return String(email).toLowerCase().match(emailRegex)
    }

    try {

        const { userData } = req.body
        registerFields.forEach((property) => {
            if (!userData.hasOwnProperty(property)){
                throw new BadRequestError(`Missing ${property} in body`)
            }
        })
        if (!validateEmaiL(userData.email)){
            throw new BadRequestError("Invalid email")
        }
        const existingUser = await prisma.user.findUnique({
            where: {
                email: userData.email
            }
        })
        if (existingUser){
            throw new BadRequestError(
                `A user already exists with the email ${userData.email}`
            )
        }
        const hashedPassword = await bcrypt.hash(
            userData.password,
            10
        )
        const formattedEmail = userData.email.toLowerCase()
        const newUser = await prisma.user.create({
            data: {
                username: userData.username,
                email: formattedEmail,
                password: hashedPassword,
            }
        })
        const token = createUser(newUser)
        res.locals.token = token
        res.locals.user = newUser
        delete newUser['password'];

        res.status(201).json({ newUser, token}) 
    } catch (error) {
        next(error)
    }
})

router.post('/login', async (req, res, next) => {
    try {
        const { userData } = req.body
        loginFields.forEach((property) => {
            if (!userData.hasOwnProperty(property)){
                throw new BadRequestError(`Missing ${property} in body`)
            }
        })
        const existingUser = await prisma.user.findUnique({
            where: {
                email: userData.email
            }
        })

        if (!existingUser){
            throw new BadRequestError(`Could not find user matching the credentials provided.`)
        } else {
            const validPassword = await bcrypt.compare(
                userData.password,
                existingUser.password
            )
            if (validPassword){
                delete existingUser['password'];
                const token = createUser(existingUser)
                res.locals.token = token
                res.locals.user = existingUser
                res.status(201).json({ existingUser, token})

            } else {
                throw new BadRequestError(`Could not find user matching the credentials provided.`)
            }
        }

    } catch (error){
        next(error)
    }
})

router.get('/me', security.extractUserFromJwt, async (req, res, next) => {
    try {
        const user = res.locals.user
        const existingUser = await prisma.user.findUnique({
            where: {
                email: user.email
            }
        })
        delete existingUser['password'];
        res.locals.user = existingUser
        res.status(200).json({ existingUser })
    } catch (err){
        next(err)
    }
})

module.exports = router;