const jwt = require('jsonwebtoken');
//const { secret } = require('../../config.json')

const generaJWT = () => {

    return new Promise((resolve, reject) => {

        console.log('generando jwt');

        jwt.sign({ }, process.env.SECRETMONGO,
             { expiresIn: '1h'},      //tiempo expiracion del token
             (err, token) => {
            if(err){
                console.log(err);
                reject('Error al generar el token');
            } else {
                resolve(token);
            }
        }    )

    });
}

module.exports = generaJWT