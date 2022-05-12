const User = require("../models/User")

const welcome = (req,res) => {
    return res.json({
        "API REST": "WELCOMEN"
    })
}

const register = async (req,res) => {
    const {userName,email} = req.body
    const usuario = await User.create({
        userName : userName,
        email: email
    })
    await usuario.save()
    res.send(usuario)
}

module.exports = {
    welcome,
    register,
}