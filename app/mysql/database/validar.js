const { User } = require('../models/user')

const existeUsername = async(username) => {
    console.log('actua existeUsername')
    const existeUser = await User.findOne({ where: { username }})
    if(existeUser){
        throw new Error('El usuario ya existe');
    }
}

module.exports = { existeUsername }