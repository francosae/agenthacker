const jwt = require('jsonwebtoken')
const { SECRET_KEY } = require('../middleware/security')

function generateToken(data) {
    const token = jwt.sign(data, SECRET_KEY)
    return token
}

function createUser(user) {
    const payload = user
    return generateToken(payload)
}

function validateToken(token){
    try{
        const decoded = jwt.verify(token, SECRET_KEY)
        return decoded
    } catch (error){
        console.log(error)
    }
}

module.exports = {
    generateToken,
    createUser,
    validateToken
}