require('dotenv').config();
const express = require('express');
const app = express();

const dbConnection = require('../mongo/database/mongoconec');
const handleErr = require('../middleware/handlerErr');


//settings
app.set( process.env.PORT || 4000);

//conectar a mongo
(async function conectarDB(){
    await dbConnection();

})();


//Middleware
app.use(express.json());

//Routes
app.use('/players', require('./routes/playersroute'))

app.use('/players/', require('./routes/gamesroute'))

app.use('/players/ranking', require('./routes/rankingroute'))

app.use('/', require('./routes/auth'))

app.use(handleErr)

//server start
app.listen(process.env.PORT, () => {
    console.log('Server OK, en puerto: ', process.env.PORT);
});
