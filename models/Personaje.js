const mongoose = require('mongoose')
const {Schema} = mongoose

const PersonajeSchema = new Schema({
    imagen: {
        
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
        required: true,
    }],
})

module.exports = mongoose.model('Personaje',PersonajeSchema)