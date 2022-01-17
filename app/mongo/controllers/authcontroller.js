const generaJWT = require('../utils/generajwt')
const auth = async(req, res) => {

    const { username, password } = req.body;

    console.log(username, password)

    try{

        if (username === process.env.USER_AUTH_MONGO && password === process.env.PASSWORD) {

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