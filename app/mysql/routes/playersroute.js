const express = require("express");
const router = express.Router();
const { check } = require('express-validator');

const {
  playersGet,
  playersPost,
  playersPut,
} = require(`../controllers/playerscontroller`);

const validarJWT = require("../middleware/validarjwt");

const { validarCampos } = require("../middleware/validarcampos");
const { existeUsername } = require("../database/validar");

//const router = Router();

//1. retorna el llistat de tots els jugadors del sistema amb el seu percentatge mig d’èxits
router.get("/", validarJWT, playersGet);

//2. crea un jugador
router.post("/",
[
    validarJWT, 
    check('username').custom(existeUsername),
    validarCampos
], 
 playersPost);

//3. modifica un jugador
router.put("/:id", 
[
    validarJWT, 
    check('username').custom(existeUsername),
    validarCampos
], 
 playersPut);

module.exports = router;
