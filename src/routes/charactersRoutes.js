const express = require('express')
const router = express.Router()
const auth = require('../middlewares/authMiddleware')
const { obtenerPersonajes, crearPersonaje } = require('../controllers/charactersControllers')

router.get('/', auth, obtenerPersonajes)
router.post('/', auth, crearPersonaje)

module.exports = router