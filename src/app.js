const express = require('express')
const app = express()

app.use(express.json())
app.use('/auth', require('./routes/auth'))
// app.use('/characters')
// app.use('/movies')

module.exports = app