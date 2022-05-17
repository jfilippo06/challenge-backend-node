const {Personaje, Pelicula} = require('../models/index')

const obtenerPersonajes = async (req,res) => {
    await Personaje.findAll({
        where: {
            UsuarioId: req.user.user.id
        },
        attributes: ['id','imagen','nombre'],
    })
    .then(result => res.status(200).json(result))
    .catch(error => res.status(500).json(error))
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
    .then(personaje => res.status(200).json(personaje))
    .catch(error => res.status(500).json(error))
}

const editarPersonaje = async (req,res) => {
    const {id} = req.params
    const { imagen, nombre, edad, peso, historia, Peliculas } = req.body
    
    try {
        const personaje = await Personaje.findOne({
            where: {
                UsuarioId: req.user.user.id,
                id: id,
            },
        })
        const pelicula = await Pelicula.findOne({
            where: {
                UsuarioId: req.user.user.id,
                id: id,
            },
        })

        personaje.imagen = imagen
        personaje.nombre = nombre
        personaje.edad = edad
        personaje.peso = peso
        personaje.historia = historia
        pelicula.imagen = Peliculas[0].imagen
        pelicula.titulo = Peliculas[0].titulo
        pelicula.fecha = Peliculas[0].fecha
        pelicula.calificacion = Peliculas[0].calificacion
        await personaje.save()
        await pelicula.save()

        res.json({
            personaje:personaje,
            pelicula:pelicula
        })
        
    } catch (error) {
        return res.json(error.message)
    }

}

const eliminarPersonaje = async (req,res) => {
    const {id} = req.params

    try {
        const personaje = await Personaje.findOne({
            where: {
                UsuarioId: req.user.user.id,
                id: id,
            },
        })
        const pelicula = await Pelicula.findOne({
            where: {
                UsuarioId: req.user.user.id,
                id: id,
            },
        })

        if(!personaje){
            if(!pelicula) throw new Error('id no encotrado')
        }
        
        pelicula.destroy()
        personaje.destroy()
        return res.status(204).json({'id':'eliminado correctamente'})

    } catch (error) {
        return res.json(error.message)
    }
}

const buscarPersonaje = async (req,res) => {
    res.json(req.query)
}

module.exports = {
    obtenerPersonajes,
    crearPersonaje,
    editarPersonaje,
    eliminarPersonaje,
    buscarPersonaje,
}