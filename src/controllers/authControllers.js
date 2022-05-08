const welcome = (req,res) => {
    return res.json({
        "API REST": "WELCOMEN"
    })
}

module.exports = {
    welcome
}