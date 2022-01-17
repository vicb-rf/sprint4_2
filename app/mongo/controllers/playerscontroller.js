const User = require('../models/user')
const anonimo = require('../../helpers/anonimo');

/************************************************** */
const playersGet = async (req, res, next) => {
    console.log('Buscando todos los jugadores')

    try{
    let players = await User.find();
    res.json({ players });

    }
    catch(err){
        next(err);
    }
}

/************************************************** */
const playersPost = async (req, res, next) => {

    try {
        const { username } = req.body;
        console.log('usuario a crear', username);

        if (username === '' || username === 'anonimo') {
            const user = new User({ username: anonimo() });
            await user.save();
            //console.log(`${username}, creado...`);
            return res.json({ user });            
        }
        const user = new User({ username });
        await user.save();
        res.json({ user });
        console.log(`${username}, creado...`);        
    }
    catch (err) {
        next(err);
    }
}

/************************************************** */
const playersPut = async(req, res, next) => {
    
    const { id } = req.params;
    const { username } = req.body;
    console.log('Actualizando usuario')

    try{
        if (username === '' || username === 'anonimo') {
            const user = new User({ username: anonimo() });
            await user.save();
            console.log(`User ${id}, actualizado...`);
            return res.json({ user });            
        }
    
        await User.findByIdAndUpdate(id, {username});
        console.log(`User ${id}, actualizado...`); 
        const userUpdate = await User.find({ _id:id }); 
        res.json({ userUpdate });    
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