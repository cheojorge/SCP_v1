const { Router } = require('express')
const router = Router()
const { getUsers, createUser, getUserById, loginUser, updateUser, updateUserPass } = require('../controller/users.controller')

router.get('/api/users', getUsers)
router.get('/api/user/:id', getUserById)
router.post('/api/user', createUser)
router.post('/api/login', loginUser)
router.post('/api/updateUser', updateUser)
router.post('/api/updateUserPass', updateUserPass)

module.exports = router