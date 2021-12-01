const Sequelize = require('sequelize');
const sequelize = require('../database/mysqlconec');

const User = sequelize.define('User', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true

            //allowNull: false,
        }, 
        created: {
            type: Sequelize.DATE,  
            allowNull: false,
            required: true
        }
            
    }, {
        timestamps: false,
      })


      const Game = sequelize.define('Game', {
        gameId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
            allowNull: false
        },
        dado1: {
            type: Sequelize.INTEGER,
            defaultValue: 0,  
            allowNull: false          
        }, 
        dado2: {
            type: Sequelize.INTEGER,
            defaultValue: 0,  
            allowNull: false          
        }, 
        resultado: {
            type: Sequelize.INTEGER,
            defaultValue: 0, 
            allowNull: false           
        }, 
        ganador: {
            type: Sequelize.BOOLEAN,
            defaultValue: false, 
            allowNull: false           
        }
    }, {
        timestamps: false,
      })

      User.hasMany(Game)
      Game.belongsTo(User)


module.exports = { User, Game };