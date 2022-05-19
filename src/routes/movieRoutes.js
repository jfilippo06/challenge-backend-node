const express = require('express')
const router = express.Router()
const auth = require('../middlewares/authMiddleware')
const moviesBody = require('../middlewares/moviesBodyMiddleware')
const { obtenerPeliculas, crearPelicula, editarPelicula, eliminarPelicula } = require('../controllers/moviesControllers')

router.get('/', auth, obtenerPeliculas)
router.post('/', auth, moviesBody, crearPelicula)
router.put('/:id', auth, moviesBody, editarPelicula)
router.delete('/:id', auth, eliminarPelicula)

module.exports = router