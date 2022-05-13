const {DataTypes} = require('sequelize')
const sequelize = require('../database/db')

const Pelicula = sequelize.define('Pelicula', {
    imagen: {
        type: DataTypes.STRING,
    },
    titulo: {
        type: DataTypes.STRING,
    },
    fecha: {
        type: DataTypes.DATE,
    },
    calificacion: {
        type: DataTypes.STRING,
    },
})

module.exports = Pelicula