const express = require('express')
const router = express.Router()
const authBodyLogin = require('../middlewares/authBodyLoginMiddleware')
const authBodyRegister = require('../middlewares/authBodyRegisterMiddleware')
const { register, login } = require('../controllers/authControllers')

router.post('/login', authBodyLogin, login)
router.post('/register', authBodyRegister, register)

module.exports = router