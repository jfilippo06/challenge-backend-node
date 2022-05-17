const express = require('express')
const router = express.Router()
const auth = require('../middlewares/authMiddleware')
const { obtenerPersonajes, crearPersonaje, editarPersonaje, eliminarPersonaje, buscarPersonaje } = require('../controllers/charactersControllers')

router.get('/', auth, buscarPersonaje)
router.get('/', auth, obtenerPersonajes)
router.post('/', auth, crearPersonaje)
router.put('/:id', auth, editarPersonaje)
router.delete('/:id', auth, eliminarPersonaje)

module.exports = router