const express = require('express');
const router = express.Router();

const { rankingGet, rankingLoser, rankingWinner } = require(`../controllers/rankingcontroller`);
const validarJWT = require('../middleware/validarjwt');

//7. retorna el percentatge mig d’èxits del conjunt de tots els jugadors
router.get('/', validarJWT, rankingGet);

//8. retorna el jugador amb pitjor percentatge d’èxit
router.get('/loser', validarJWT, rankingLoser);

//9. retorna el jugador amb millor percentatge d’èxit
router.get('/winner', validarJWT , rankingWinner);


module.exports = router