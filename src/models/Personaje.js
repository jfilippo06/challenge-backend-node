const {DataTypes} = require('sequelize')
const sequelize = require('../database/db')
const Pelicula = require('./Pelicula')

const Personaje = sequelize.define('Personaje', {
    imagen: {
        type: DataTypes.STRING,
    },
    nombre: {
        type: DataTypes.STRING,
    },
    edad: {
        type: DataTypes.NUMBER,
    },
    peso: {
        type: DataTypes.STRING,
    },
    historia: {
        type: DataTypes.STRING,
    },
})

Personaje.belongsToMany(Pelicula, { through: 'PersonajePelicula'})
Pelicula.belongsToMany(Personaje, { through: 'PersonajePelicula'})

module.exports = Personaje