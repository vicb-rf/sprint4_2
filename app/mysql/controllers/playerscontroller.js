const { User } = require('../models/user')
const anonimo = require('../../helpers/anonimo')

/************************************************** */
const playersGet = async (req, res, next) => {

    try{
        console.log('Buscando todos los jugadores');
        const users = await User.findAll();
        if(users.length === 0) return res.send('No hay jugadores');
        res.json(users);  
    }
    catch(err){
        next(err);
    } 
}

/************************************************** */
const playersPost = async (req, res, next) => {

    console.log('creando usuario');   
    const { username } = req.body;
    console.log('usuario a buscar', username)
        try{
            if(username === '' || username === 'Anonimo'){
                const user = await User.create({ username: anonimo(),created: new Date()});
                return res.send(user);
            }    
            else {
                const user = await User.create({ username, created: new Date()});
                console.log('usuario creado');
                res.send(user);
            }    
        }
        catch(err){ 
            next(err);
        }  
}

/************************************************** */
const playersPut = async(req, res, next) => {

    try{
        const { id } = req.params;
        const { username } = req.body;
        console.log('Actualizando usuario', id);
    
        const userExiste = await User.findByPk(id);
    
        if(!userExiste) return res.send('Jugador no existe');
        await User.update({ username }, { where: {id}});
        const newUsername = await User.findByPk(id);
    
        res.send(newUsername);    
    }
    catch(err){
        next(err);
    }    
}

module.exports = {
    playersGet,
    playersPost,
    playersPut
}