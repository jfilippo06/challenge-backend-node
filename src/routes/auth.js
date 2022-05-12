const express = require('express')
const router = express.Router()
const { welcome, register } = require('../controllers/authControllers')

router.get('/login', welcome)
router.post('/login')
router.get('/register')
router.post('/register', register)

module.exports = router