const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

const { gamesGet, gamesPost, gamesDelete } = require(`../controllers/gamescontroller`);
const { validarCampos } = require('../middleware/validarcampos');
const { existeUserPorId } = require('../database/dbvalidator');
const validarJWT = require('../middleware/validarjwt');

//4. retorna el llistat de jugades per un jugador
router.get('/:id/games', 
[
    validarJWT,
    check('id', 'Id no valido').isMongoId(),
    check('id').custom(existeUserPorId),
    validarCampos
], 
gamesGet);

//5. un jugador especifico realiza una tirada
router.post('/:id/games', 
[
    validarJWT,
    check('id', 'Id no valido').isMongoId(),
    check('id').custom(existeUserPorId),
    validarCampos
], 
gamesPost);

//6. elimina las tiradas del jugadors
router.delete('/:id/games',
[
    validarJWT,
    check('id', 'Id no valido').isMongoId(),
    check('id').custom(existeUserPorId),
    validarCampos
], 
 gamesDelete);


module.exports = router