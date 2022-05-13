const Usuario = require("../models/Usuario")

const welcome = (req,res) => {
    return res.json({
        "API REST": "WELCOMEN"
    })
}

const register = async (req,res) => {
    const {nombreUsuario, correo} = req.body
    const usuario = await User.create({
        nombreUsuario,
        correo
    })
    res.send(usuario)
}

module.exports = {
    welcome,
    register,
}