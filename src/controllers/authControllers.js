const User = require("../models/User")

const welcome = (req,res) => {
    return res.json({
        "API REST": "WELCOMEN"
    })
}

const register = async (req,res) => {
    const {userName,email} = req.body
    const usuario = await User.create({
        userName,
        email
    })
    res.send(usuario)
}

module.exports = {
    welcome,
    register,
}