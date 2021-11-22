const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')

router.get('/users', userController.getUser)
router.post('/users', userController.postUser)
router.get('/users/:id', userController.getUniqueUser)

router.delete('/users/:id', userController.deleteUser)
module.exports = router