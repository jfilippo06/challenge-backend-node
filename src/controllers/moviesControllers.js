const {Pelicula, Personaje, Genero} = require('../models/index')

const obtenerPeliculas = async (req,res) => {
    await Pelicula.findAll({
        where: {
            UsuarioId: req.user.user.id
        },
        attributes: ['id','imagen','titulo','fecha'],
    })
    .then(result => res.status(200).json(result))
    .catch(error => res.status(500).json(error))
}

const crearPelicula = async (req,res) => {
    const {id} = req.user.user 
    const { imagen, titulo, fecha, calificacion, Personajes, Generos} = req.body
    await Pelicula.create({
        imagen,
        titulo,
        fecha,
        calificacion,
        UsuarioId: id,
        Personajes: [{
            imagen: Personajes[0].imagen,
            nombre: Personajes[0].nombre,
            edad: Personajes[0].edad,
            peso: Personajes[0].peso,
            historia: Personajes[0].historia,
            UsuarioId: id,
            PersonajePeliculas: {
                selfGranted: true
            }
        }],
        Generos: [{
            nombre: Generos[0].nombre,
            imagen: Generos[0].imagen,
            UsuarioId: id,
            PeliculaGeneros: {
                selfGranted: true
            }
        }]
    }, {
        include: [Personaje,Genero]
    })
    .then(personaje => res.status(200).json(personaje))
    .catch(error => res.status(500).json(error))
}

const editarPelicula = async (req,res) => {
    const {id} = req.params
    const { imagen, titulo, fecha, calificacion, Personajes, Generos} = req.body
    
    try {
        const pelicula = await Pelicula.findOne({
            where: {
                UsuarioId: req.user.user.id,
                id: id,
            },
        })
        const personaje = await Personaje.findOne({
            where: {
                UsuarioId: req.user.user.id,
                id: id,
            },
        })
        const genero = await Genero.findOne({
            where: {
                UsuarioId: req.user.user.id,
                id: id,
            },
        })

        pelicula.imagen = imagen
        pelicula.titulo = titulo
        pelicula.fecha = fecha
        pelicula.calificacion = calificacion
        personaje.imagen = Personajes[0].imagen
        personaje.nombre = Personajes[0].nombre
        personaje.edad = Personajes[0].edad
        personaje.historia = Personajes[0].historia
        genero.nombre = Generos[0].nombre
        genero.imagen = Generos[0].imagen
        
        await pelicula.save()
        await personaje.save()
        await genero.save()

        res.json({
            personaje:personaje,
            pelicula:pelicula,
            genero:genero
        })
        
    } catch (error) {
        return res.json(error.message)
    }
}

const eliminarPelicula = async (req,res) => {}

module.exports = {
    obtenerPeliculas,
    crearPelicula,
    editarPelicula,
    eliminarPelicula,
}