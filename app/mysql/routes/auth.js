const express = require('express');
const auth = require('../controllers/authcontroller');

const router = express.Router();

router.post('/login', auth);

module.exports = router