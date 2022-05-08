const {Sequelize,DataTypes} = require('sequelize')
const sequelize = new Sequelize('sqlite::memory:')

const User = sequelize.define('User',{
    userName: {
        type: DataTypes.STRING,
    }
})

module.exports = User
