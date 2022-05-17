const {Personaje, Pelicula} = require('../models/index')

const obtenerPersonajes = async (req,res) => {
    await Personaje.findAll({
        where: {
            UsuarioId: req.user.user.id
        },
        attributes: ['imagen','nombre'],
    })
    .then(result => res.json(result))
    .catch(error => res.json(error))
}

const crearPersonaje = async (req,res) => {
    const { imagen, nombre, edad, peso, historia, Peliculas } = req.body
    const {id} = req.user.user 
    await Personaje.create({
        imagen,
        nombre,
        edad,
        peso,
        historia,
        UsuarioId: id,
        Peliculas: [{
            imagen: Peliculas[0].imagen,
            titulo: Peliculas[0].titulo,
            fecha: Peliculas[0].fecha,
            calificacion: Peliculas[0].calificacion,
            UsuarioId: id,
            PersonajePeliculas: {
                selfGranted: true
            }
        }]
    }, {
        include: Pelicula
    })
    .then(personaje => res.json(personaje))
    .catch(error => res.json(error))
}

module.exports = {
    obtenerPersonajes,
    crearPersonaje,
}