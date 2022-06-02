const express = require('express')
const app = express()
const cors = require('cors')
const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')
const path = require('path')

const swaggerSpec = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Challenge Nodejs',
            version: '1.0.0',
        },
        servers: [
            {
                url:'http://localhost:8000'
            }
        ]
    },
    apis: [`${path.join(__dirname, './routes/*.js')}`],
}

const corsOptions = {
    credential: true,
    origin: '*',
}

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)))

app.use('/auth', require('./routes/authRoutes'))
app.use('/characters', require('./routes/charactersRoutes'))
app.use('/movies', require('./routes/movieRoutes'))

module.exports = app