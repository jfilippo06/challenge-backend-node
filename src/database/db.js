const {Sequelize} = require('sequelize')
require('dotenv').config()

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