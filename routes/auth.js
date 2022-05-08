const express = require("express");
const { welcome } = require("../controllers/authControllers");
const router = express.Router()

router.get('/login',welcome)
router.post('/login')
router.get('/register')
router.post('/register')

module.exports = router