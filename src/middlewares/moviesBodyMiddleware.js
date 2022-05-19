const { body } = require('express-validator')

const moviesBody = [
    body('imagen', 'Ingrese una direccion de imagen').trim().notEmpty().escape(),
    body('titulo', 'Ingrese un titulo').trim().notEmpty().escape(),
    body('fecha', 'Ingrese una fecha').trim().notEmpty().escape(),
    body('calificacion', 'Ingrese una calificacion').trim().notEmpty().escape(),
    body('Personajes[0].imagen', 'Ingrese una direccion de imagen').trim().notEmpty().escape(),
    body('Personajes[0].nombre', 'Ingrese un nombre').trim().notEmpty().escape(),
    body('Personajes[0].edad', 'Ingrese una edad').trim().notEmpty().escape(),
    body('Personajes[0].peso', 'Ingrese un peso').trim().notEmpty().escape(),
    body('Personajes[0].historia', 'Ingrese una historia').trim().notEmpty().escape(),
    body('Generos[0].nombre', 'Ingrese un nombre').trim().notEmpty().escape(),
    body('Generos[0].imagen', 'Ingrese una direccion de imagen').trim().notEmpty().escape(),
]

module.exports = moviesBody