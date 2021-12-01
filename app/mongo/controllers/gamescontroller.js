const resultados = require("../../helpers/jugar");
const Game = require("../models/game");
const User = require('../models/user')

/************************************************** */
const gamesGet = async(req, res, next) => {    

    const { id } = req.params; 
    console.log('Buscando las tiradas del jugador: ', id);

    try{
        const game = await Game.find({ user: id }).populate({ path: 'user'});
        if(game == '') return res.send('No tiene tiradas');
        res.send(game);
    }
    catch(err){
        next(err);
    }
}


/************************************************** */

const gamesPost = async(req, res, next) => {   

    const { id } = req.params;   
    console.log('Jugador tirando los dados: ', id);

    try{
        const tirada = resultados();
        tirada.user = id;
    
        const game = new Game(tirada);
        await game.save();
    
        console.log('Tirada grabada...');
        res.json(game);  
    }
    catch(err){
        next(err);
    }
 
}


/************************************************** */
const gamesDelete = async(req, res, next) => {

    const { id } = req.params;   
    console.log('Eliminado las tiradas del jugador: ', id);

    try{
        const game = await Game.find({ user: id }).populate({ path: 'user'});
        if(game == '') return res.send('No tiene tiradas');
        
        await Game.deleteMany({ user: id});
        console.log('eliminadas')
        res.send('Tiradas Eliminadas');
    }
    catch(err){
        next(err);
    }
}

module.exports = {
    gamesGet,
    gamesPost,
    gamesDelete
}