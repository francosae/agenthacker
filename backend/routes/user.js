const express = require('express')
const router = express.Router()
const prisma = require('../lib/prisma')
const { excludePassword } = require('../utils/users')

router.get('/', async (req, res) => {
    try {
      const users = await prisma.user.findMany({
        orderBy: {
          totalpoints: 'asc',
        },
      })
      for (const user in users){
        excludePassword(users[user], 'password')
      }
      res.json(users)
    } catch (error) {
      console.log(error)
    }
  })

  
router.get('/:username', async (req, res) => {
    const { username } = req.params
    try {
        const user = await prisma.user.findUnique({
          where: {
            username: username
          },
          
        })
        delete user['password']
        res.json(user)
      } catch (error) {
        console.log(error)
      }
    })

  
module.exports = router;