const mongoose = require('mongoose')
const {Schema} = mongoose

const peliculaSchema = new Schema({
    imagen: {
        type: String,
        required: true,
    },
    titulo: {
        type: String,
        required: true,
    },
    fecha: {
        type: Date,
        default: Date.now(),
    },
    calificacion: {
        type: String,
        required: true,
    },
    personajes: [{
        type: Schema.Types.ObjectId,
        ref: 'Personaje',
    }],
})

module.exports = mongoose.model('Pelicula', peliculaSchema)