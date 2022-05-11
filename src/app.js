const express = require('express')
const app = express()

app.use(express.json())
app.use('/auth', require('./routes/auth'))
app.use('/characters', require('./routes/characters'))
app.use('/movies', require('./routes/movies'))

module.exports = app