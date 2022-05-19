const { body } = require('express-validator')

const authBodyRegister = [
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
]

module.exports = authBodyRegister