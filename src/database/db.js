const {Sequelize} = require('sequelize')
const User = require('../models/User')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: process.env.URI
}).authenticate()
    .then(console.log('Connection has been established successfully'))
    .catch(e => console.log(`Unable to connect to the database: ${e}`))

async function main(){
    await User.sync()
}
main()