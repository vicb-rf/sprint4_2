const sequelize = require('../database/mysqlconec');

/************************************************** */
const rankingGet = async(req, res, next) => {

    try{
        console.log('Buscando promedio de exito')

        const average = await sequelize.query("SELECT AVG(ganador)*100 AS average FROM Games ");
        const players = average[0][0];
        
        res.json({
            msg: 'El promedio de exito del conjunto de jugadores',
            players
        });
    }
    catch(err){
        next(err);
    }

}

/************************************************** */
const rankingLoser = async(req, res, next) => {

    try{
        console.log('Buscando el peor promedio de exito')

        const players = await sequelize.query("SELECT Users.username, UserId, AVG(ganador)*100 AS average FROM Games INNER JOIN Users ON Games.UserId=Users.id GROUP BY UserId ORDER BY average");
                
        res.json({
            msg: 'Jugador con el peor promedio de exito',
            jugador: players[0][0]
        });
    }
    catch(err){
        next(err);
    }
}

/************************************************** */
const rankingWinner = async(req, res, next) => {

    try{
        console.log('Buscando el mejor promedio de exito');

        const players = await sequelize.query("SELECT Users.username, UserId, AVG(ganador)*100 AS average FROM Games INNER JOIN Users ON Games.UserId=Users.id GROUP BY UserId ORDER BY average DESC");
         
        res.json({
            msg: 'Jugador con el mejor promedio de exito',
            jugador: players[0][0]
        });
    }
    catch(err){
        next(err);
    }
}

module.exports = {
    rankingGet,
    rankingLoser,
    rankingWinner
}