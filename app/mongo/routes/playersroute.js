const express = require('express');
const { check } = require('express-validator');
const router = express.Router();

const { playersGet, playersPost, playersPut } = require(`../controllers/playerscontroller`);
const { validarCampos } = require('../../middleware/validarcampos');
const { existeUserPorId, existeUsername } = require('../database/dbvalidator');
const validarJWT  = require('../../middleware/validarjwt');


//1. retorna el llistat de tots els jugadors del sistema amb el seu percentatge mig d’èxits
router.get('/', validarJWT, playersGet);

//2. crea un jugador
router.post('/',
[
    validarJWT,
    check('username').custom(existeUsername),
    validarCampos
], 
 playersPost);

//3. modifica un jugador
router.put('/:id',
[
    validarJWT,
    check('id', 'Id no valido').isMongoId(),
    check('id').custom(existeUserPorId),
    check('username').custom(existeUsername),
    validarCampos
], 
 playersPut)

module.exports = router