const express = require('express');
const router = express.Router();

const { gamesGet, gamesPost, gamesDelete } = require(`../controllers/gamescontroller`);
const validarJWT = require('../middleware/validarjwt');

//4. retorna el llistat de jugades per un jugador
router.get('/:id/games', validarJWT, gamesGet);

//5. un jugador especifico realiza una tirada
router.post('/:id/games', validarJWT, gamesPost);

//6. elimina las tiradas del jugadors
router.delete('/:id/games', validarJWT , gamesDelete);

module.exports = router