const generaJWT = require("./generajwt");

const { user, clave} = require('../../config.json');

const auth = async(req, res) => {

    const { username, password } = req.body;

    try{

        if (username === user && password === clave) {

            const token = await generaJWT(username)
            return res.json({
                username,
                token
            });
        }

        res.status(400).json({
            msg: 'Usuario / Password no son correctos - password'
        });
    }
    catch(err){
        console.log(err);
        return res.status(500).json({ msg: 'Error en el servidor' });
    }
}

module.exports = auth