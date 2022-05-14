const express = require('express')
const router = express.Router()
const { register } = require('../controllers/authControllers')
const { body } = require('express-validator')

router.post('/login')
router.post('/register', [
    body('name', 'Ingrese un nombre valido').trim().notEmpty().escape(),
    body('email', 'Ingrese un mail valido').trim().isEmail().normalizeEmail(),
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