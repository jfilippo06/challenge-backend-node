const {DataTypes} = require('sequelize')
const sequelize = require('../database/db')
const Pelicula = require('./Pelicula')

const Genero = sequelize.define('Genero', {
    nombre: {
        type: DataTypes.STRING,
    },
    imagen: {
        type: DataTypes.STRING,
    },
})

Genero.belongsToMany(Pelicula, { through: 'GeneroPelicula'})
Pelicula.belongsToMany(Genero, { through: 'GeneroPelicula'})

module.exports = Genero