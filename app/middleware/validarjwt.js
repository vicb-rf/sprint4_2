const jwt = require('jsonwebtoken');
const { secret } = require('../../config.json')

const validarJWT = async( req, res, next ) => {

    const token = req.header('x-token');

    if ( !token ) {
        return res.status(401).json({
            msg: 'Error en token'
        });
    }
    try {
        const tokenOk = jwt.verify(token, secret)
        if(tokenOk){
            console.log('Token Ok...')
            next();
        }
    } catch (err) {
        res.status(401).json({
            msg: 'Token no válido'
        })
    }

}

module.exports = validarJWT