export const welcome = (req,res) => {
    return res.json({
        "API REST": "WELCOMEN"
    })
}

export const register = async (req,res) => {
    const {user} = req.body
    const usuario = await User.create({
        userName : user
    })
    res.send(usuario)
}