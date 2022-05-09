import app from "./app.js"
import 'dotenv/config'
import {sequelize} from './database/db.js'
import './models/User.js'


async function main(){
    try {
        await sequelize.authenticate()
        await sequelize.sync({force:true})  
    } catch (error) {
        console.log(error)
    }
}
main()

const PORT = process.env.PORT || 5000
app.listen(PORT, (req,res) => {
    console.log(`Server is listening on port ${PORT}`)
})