const {DataTypes} = require('sequelize')
const sequelize = require('../database/db')

const Genero = sequelize.define('Genero', {
    nombre: {
        type: DataTypes.STRING,
    },
    imagen: {
        type: DataTypes.STRING,
    },
})

module.exports = Genero