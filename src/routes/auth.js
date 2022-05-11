const express = require('express')
const router = express.Router()
const { welcome } = require('../controllers/authControllers')

router.get('/login', welcome)
router.post('/login')
router.get('/register')
router.post('/register')

module.exports = router