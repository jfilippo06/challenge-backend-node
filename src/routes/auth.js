const express = require('express')
const router = express.Router()
const { welcome, register } = require('../controllers/authControllers')
const { body } = require('express-validator')

router.get('/login', welcome)
router.post('/login')
router.get('/register')
router.post('/register', [
    body('nombreUsuario', 'Ingrese un nombre valido').trim().notEmpty().escape(),
    body('correo', 'Ingrese un mail valido').trim().isEmail().normalizeEmail(),
    body('password', 'Contraseña de minimo 6 caracteres').trim().isLength({min:6}).escape()
    .custom((value, {req}) => {
        if (value !== req.body.repassword) {
            throw new Error('No coiciden las contraseñas')
        } else {
            return value
        }
    })
], register)

module.exports = router