const express = require('express')
const router = express.Router()
const prisma = require('../lib/prisma')
const { excludePassword } = require('../utils/users')

router.get('/', async (req, res) => {
    try {
      const users = await prisma.user.findMany({
        orderBy: {
          totalpoints: 'desc',
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

router.post('/:username/points', async (req, res) => {
  const { username } = req.params
  try {
    const user = await prisma.user.update({
      where: {
        username: username
      },
      data: {
        totalpoints: { increment: 100 }
      }
    })
  } catch (error){
    console.log(error)
  }
})
module.exports = router;