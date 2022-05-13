const {DataTypes} = require('sequelize')
const sequelize = require('../database/db')

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

module.exports = Personaje