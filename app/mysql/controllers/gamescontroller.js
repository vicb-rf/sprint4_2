const resultados = require("../../helpers/jugar");
const { User, Game } = require("../models/user");

/************************************************** */
const gamesGet = async(req, res, next) => {    

    try{
        const { id } = req.params; 
        console.log('Buscando las tiradas del jugador: ', id);
    
        const userExiste = await User.findByPk(id);
    
        if(!userExiste) return res.send('Jugador no existe');
    
        const jugadas = await Game.findAll({ where: { UserId: id }})
        if(jugadas.length === 0) return res.send('Jugador no ha jugado aun');
    
        res.json(jugadas);
    }
    catch(err){
        netx(err);
    }    
}

/************************************************** */

const gamesPost = async(req, res, next) => {   

    try{
        const { id } = req.params;   
        console.log('Jugador tirando los dados: ', id);
    
        const userExiste = await User.findByPk(id);
    
        if(!userExiste) return res.send('Jugador no existe')
        const tirar = resultados();
        tirar.UserId = id;
    
        await Game.create(tirar);
            
        res.json(tirar);  
    }
    catch(err){
        next(err);
    }    
}

/************************************************** */
const gamesDelete = async(req, res) => {

    try{
        const { id } = req.params; 
        console.log('Eliminar tiradas del jugador: ', id);
    
        const userExiste = await User.findByPk(id);
        if(!userExiste) return res.send('Jugador no existe')    
    
        const jugadas = await Game.findAll({ where: { UserId: id }})
        if(jugadas.length === 0) return res.send('Jugador no ha jugado aun');
        await Game.destroy({ where: { UserId: id }})
    
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