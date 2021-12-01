const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    dado1: {
        type: Number,
        requerid: true
    },
    dado2: {
        type: Number,
        requerid: true
    },
    resultado: {
        type: Number,
        requerid: true
    },
    ganador: {
        type: Number,
        requerid: true,
        default: 0
    },
    created: {
        type: Date,
        default: new Date()
    },
    user: { 
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    }
        
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game