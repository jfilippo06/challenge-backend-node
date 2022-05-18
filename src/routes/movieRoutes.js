const express = require('express')
const router = express.Router()
const auth = require('../middlewares/authMiddleware')
const { obtenerPeliculas, crearPelicula, editarPelicula, eliminarPelicula } = require('../controllers/moviesControllers')

router.get('/', auth, obtenerPeliculas)
router.post('/', auth, crearPelicula)
router.put('/', auth, editarPelicula)
router.delete('/', auth, eliminarPelicula)

module.exports = router