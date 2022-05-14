const {Usuario} = require('../models/index')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { validationResult } = require("express-validator")
const auth = require('../../config/auth')

const register = async (req,res) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()){
        return res.json({"error":errors.array()})
    }

    const {name, email, password} = req.body
    const salt = await bcrypt.genSalt(Number.parseInt(auth.rounds))
    const hash = await bcrypt.hash(password, salt)

    try {
        const usuario = await Usuario.create({
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
            res.status(500).json(error)
        })
    } catch (error) {
        return res.json({"error":error})
    }
}

module.exports = {
    register,
}