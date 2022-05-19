const { body } = require('express-validator')

const authBodyLogin = [
    body('email', 'Ingrese un mail valido').trim().isEmail().normalizeEmail(),
    body('password', 'Contraseña de minimo 6 caracteres').trim().isLength({min:6}).escape()
]

module.exports = authBodyLogin