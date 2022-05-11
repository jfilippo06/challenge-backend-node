const app = require('./app')
require('dotenv').config()
require('./database/db')

const PORT = process.env.PORT || 5000
app.listen(PORT, (req,res) => {
    console.log(`Server is listening on port ${PORT}`)
})