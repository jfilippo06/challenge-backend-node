const {DataTypes } = require('sequelize')
const sequelize = require('../database/db')

const User = sequelize.define('User', {
    userName: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    }
})

module.exports = User