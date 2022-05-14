const {DataTypes} = require('sequelize')
const sequelize = require('../database/db')

const Usuario = sequelize.define('Usuario', {
    nombreUsuario: {
        type: DataTypes.STRING,
        allowNull:true,
    },
    correo: {
        type: DataTypes.STRING,
        allowNull:true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull:true,
    },
})

module.exports = Usuario