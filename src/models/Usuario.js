const {DataTypes} = require('sequelize')
const sequelize = require('../database/db')

const Usuario = sequelize.define('Usuario', {
    nombreUsuario: {
        type: DataTypes.STRING,
    },
    correo: {
        type: DataTypes.STRING,
    }
})

module.exports = Usuario