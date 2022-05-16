const app = require('./app')
require('dotenv').config()
const {sequelize} = require('./models/index')

const PORT = process.env.PORT || 5000
app.listen(PORT, (req,res) => {
    console.log(`Server is listening on port ${PORT}`)
    sequelize.authenticate()
    sequelize.sync()
    .then(()=>console.log('Database is listening'))
})