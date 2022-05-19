const { body } = require('express-validator')

const charatersBody = [
    body('imagen', 'Ingrese una direccion de imagen').trim().notEmpty().escape(),
    body('nombre', 'Ingrese un nombre').trim().notEmpty().escape(),
    body('edad', 'Ingrese una edad').trim().notEmpty().escape(),
    body('peso', 'Ingrese un peso').trim().notEmpty().escape(),
    body('historia', 'Ingrese una historia').trim().notEmpty().escape(),
    body('Peliculas[0].imagen', 'Ingrese una direccion de imagen').trim().notEmpty().escape(),
    body('Peliculas[0].titulo', 'Ingrese un titulo').trim().notEmpty().escape(),
    body('Peliculas[0].fecha', 'Ingrese una fecha').trim().notEmpty().escape(),
    body('Peliculas[0].calificacion', 'Ingrese una calificacion').trim().notEmpty().escape()
]

module.exports = charatersBody