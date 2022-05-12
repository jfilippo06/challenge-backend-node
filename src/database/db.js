const {Sequelize} = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: process.env.URI
})

async function main(){
    try {
        await sequelize.authenticate()
        await sequelize.sync()
    } catch (error) {
        console.log(error)
    }
}
main()

module.exports = sequelize

// require('../models/User')