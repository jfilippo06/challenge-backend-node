const express = require('express')
const router = express.Router()
const auth = require('../middlewares/authMiddleware')
const charatersBody = require('../middlewares/charactersBodyMiddleware')
const { obtenerPersonajes, crearPersonaje, editarPersonaje, eliminarPersonaje } = require('../controllers/charactersControllers')

/**
 * @swagger
 * components:
 *  schemas:
 *      personaje:
 *          properties:
 *              imagen:
 *                  type: string
 *              nombre:
 *                  type: string
 *              edad:
 *                  type: number
 *              peso:
 *                  type: string
 *              historia:
 *                  type: string
 *          required:
 *              - imagen
 *              - nombre
 *              - edad
 *              - peso
 *              - historia
 */

router.get('/', auth, obtenerPersonajes)
router.post('/', auth, charatersBody, crearPersonaje)
router.put('/:id', auth, charatersBody, editarPersonaje)
router.delete('/:id', auth, eliminarPersonaje)

module.exports = router