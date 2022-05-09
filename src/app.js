import express from "express"
const app = express()
import auth from './routes/auth.js'

app.use(express.json())
app.use('/auth', auth)
// app.use('/characters')
// app.use('/movies')

export default app