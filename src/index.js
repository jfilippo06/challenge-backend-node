app = require('./app')

app.use('/auth', require('./routes/auth'))
app.use('/characters', require('./routes/characters'))
app.use('/movies', require('./routes/movies'))

const PORT = process.env.PORT || 5000

app.listen(PORT, (req,res) => {
    console.log(`listening in port ${PORT}`)
})