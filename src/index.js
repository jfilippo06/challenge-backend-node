app = require('./app')
require('dotenv').config()
require('./database/db')

app.use('/auth', require('./routes/auth'))
app.use('/characters', require('./routes/characters'))
app.use('/movies', require('./routes/movies'))

const PORT = process.env.PORT || 5000
app.listen(PORT, (req,res) => {
    console.log(`Server is listening on port ${PORT}`)
})