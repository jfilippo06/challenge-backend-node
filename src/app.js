const express = require('express')
const app = express()
const cors = require('cors')

const corsOptions = {
    credential: true,
    origin: '*',
}

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/auth', require('./routes/authRoutes'))
app.use('/characters', require('./routes/charactersRoutes'))
app.use('/movies', require('./routes/movieRoutes'))

module.exports = app