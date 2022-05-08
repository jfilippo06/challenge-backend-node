const mongoose = require('mongoose')
const {Schema} = mongoose

const personajeSchema = new Schema({
    imagen: {
        type: String,
        required: true, 
    },
    nombre: {
        type: String,
        required: true,
    },
    edad: {
        type: String,
        required: true,
    },
    peso: {
        type: String,
        required: true,
    },
    historia: {
        type: String,
        required: true,
    },
    peliculas: [{
        type: Schema.Types.ObjectId,
        ref: 'Pelicula',
    }],
})

module.exports = mongoose.model('Personaje',personajeSchema)