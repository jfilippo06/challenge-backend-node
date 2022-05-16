const {Usuario} = require('../models/index')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const auth = require('../../config/authConfig')
const { validationResult } = require("express-validator")

const register = async (req,res) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()){
        return res.json({"error":errors.array()})
    }

    const {name, email, password} = req.body
    const salt = await bcrypt.genSalt(Number.parseInt(auth.rounds))
    const hash = await bcrypt.hash(password, salt)

    await Usuario.create({
        name,
        email,
        password: hash,
    }).then(user =>{
        const token = jwt.sign({user:user}, auth.secret, {expiresIn:auth.expired})
        res.json({
            user:user,
            token:token
        })
    })
    .catch(error => {
        res.status(500).json({'error':error})
    })
}

const login = async (req,res) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()){
        return res.json({"error":errors.array()})
    }

    const {email, password} = req.body

    await Usuario.findOne({
        where: {
            email:email
        }
    })
    .then(user => {
        if(!user){
            res.status(404).json({'error':'Usuario no encontrado'})
        }
        else{
            if(bcrypt.compareSync(password, user.password)){
                const token = jwt.sign({user:user}, auth.secret, {expiresIn:auth.expired})
                res.json({
                    user:user,
                    token:token
                })
            }
            else{
                res.status(404).json({'error':'Contraseña no coinside'})
            }
        }
    })
    .catch(error => {
        res.status(500).json({'error':error})
    })
}

module.exports = {
    register,
    login,
}