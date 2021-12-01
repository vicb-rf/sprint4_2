require('dotenv').config();
const mysql = require('mysql2');
const express = require('express');
const app = express();

const sequelize = require('./database/mysqlconec');
const config = require('../../config.json');
const handleErr = require('../middleware/handlerErr');


//settings
app.set(process.env.PORT || 4000);
const { host, user, password, database } = config.database; 

//conectar a mysql
async function conectadb(){
    
    const conexion = await mysql.createConnection({ host, user, password });
    conexion.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`, function(err, result) {
        if(err) throw err;
        sequelize.sync()
        .then(console.log('\n Bd sincronizada'))
        .catch(function(err){ console.log(err)})       
    })  
    conexion.end();          
}

conectadb();


//Middleware
app.use(express.json());


//Routes
app.use('/', require('./routes/auth'))

app.use('/players', require('./routes/playersroute'))

app.use('/players/', require('./routes/gamesroute'))

app.use('/players/ranking', require('./routes/rankingroute'))

app.use(handleErr)

//server start
app.listen(process.env.PORT, () => {
    console.log('Server OK, en puerto: ', process.env.PORT);
});
