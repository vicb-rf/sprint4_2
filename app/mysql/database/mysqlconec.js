const Sequelize = require('sequelize');

const config = require('../../../config.json');

const { user, password, database } = config.database;
const sequelize = new Sequelize(database, user, password,
     { 
         dialect: 'mysql',
         //logging: false 
     });


//conectadb();

module.exports =  sequelize 