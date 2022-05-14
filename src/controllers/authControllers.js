const Usuario = require("../models/Usuario")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { validationResult } = require("express-validator")

const welcome = (req,res) => {
    return res.json({
        "API REST": "WELCOMEN"
    })
}

const register = async (req,res) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()){
        return res.json({"error":errors.array()})
    }

    const {nombreUsuario, correo, password} = req.body
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    try {
        const usuario = await Usuario.create({
            nombreUsuario,
            correo,
            password: hash,
        }).then(user => {
            const token = jwt.sign()
        })
        return res.send(usuario)
    } catch (error) {
        return res.json({"error":error})
    }
}

module.exports = {
    welcome,
    register,
}