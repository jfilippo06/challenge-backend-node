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
        // await sequelize.sync({force:true})
    } catch (error) {
        console.log(error)
    }
}
main()

module.exports = sequelize