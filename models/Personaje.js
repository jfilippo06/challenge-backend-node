const mongoose = require('mongoose')
const {Schema} = mongoose

const personajeSchema = new Schema({
    Imagen: {
        type: String,
        required: true, 
    },
    Nombre: {
        type: String,
        required: true,
    },
    Edad: {
        type: String,
        required: true,
    },
    Peso: {
        type: String,
        required: true,
    },
    Historia: {
        type: String,
        required: true,
    },
    Pelicula: [{
        type: Schema.Types.ObjectId,
        ref: 'Pelicula',
    }],
})

module.exports = mongoose.model('Personaje',personajeSchema)