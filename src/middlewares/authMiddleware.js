const jwt = require('jsonwebtoken')
const auth = require('../../config/authConfig')

module.exports = (req, res, next) => {
    if(!req.headers.authorization){
        res.status(401).json({'error':'Acceso no autorizado'})
    }
    else{
        const token = req.headers.authorization.split(' ')[1]
        jwt.verify(token, auth.secret, (error, decode) => {
            if(error){
                res.status(500).json({'error': 'Ha ocurrido un problema al decodificar el token'})
            }
            else{
                req.user = decode
                next()
            }
        })
    }
}