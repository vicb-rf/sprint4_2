const Game = require("../models/game");
const User = require('../models/user')

const existeUserPorId = async(id) => {
    console.log('actua existeUserPorId')
    const existeUser = await User.findById(id)
    if(!existeUser){
        throw new Error('El id no existe');
    }
}

const existeUsername = async(username) => {
    console.log('actua existeUsername')
    const existeUser = await User.findOne({ username })
    if(existeUser){
        throw new Error('El usuario ya existe');
    }
}

module.exports = { existeUserPorId, existeUsername }