const express = require('express')
const router = express.Router()
const auth = require('../middlewares/authMiddleware')
const { obtenerPeliculas, crearPelicula, editarPelicula, eliminarPelicula } = require('../controllers/moviesControllers')

router.get('/', auth, obtenerPeliculas)
router.post('/', auth, crearPelicula)
router.put('/:id', auth, editarPelicula)
router.delete('/:id', auth, eliminarPelicula)

module.exports = router