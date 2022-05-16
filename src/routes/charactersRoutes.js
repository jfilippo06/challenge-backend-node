const express = require('express')
const auth = require('../middlewares/authMiddleware')
const router = express.Router()

router.get('/', auth)

module.exports = router