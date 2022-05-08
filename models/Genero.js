const mongoose = require('mongoose')
const {Schema} = mongoose

const generoSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    imangen: {
        type: String,
        required: true,
    },
    peliculas: [{
        type: Schema.Types.ObjectId,
        ref: 'Pelicula',
    }],
})

module.exports = mongoose.model('Genero',generoSchema)