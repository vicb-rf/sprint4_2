const Game = require("../models/game");
const User = require('../models/user');

/************************************************** */
const rankingGet = async (req, res, next) => {
    console.log('Ejecutando ranking');
    try {
        const data = await Game.aggregate([{ $group: { _id: "null", Average: { $avg: { $multiply: ["$ganador", 100] } } } }]);

        res.json(data[0]);
    }
    catch (err) {
        next(err);
    }
}

/************************************************** */
const rankingLoser = async (req, res, next) => {

    console.log('Ejecutando ranking loser');
    try {
        const data = await Game.aggregate([{ $group: { _id: "$user", Average: { $avg: { $multiply: ["$ganador", 100] } } } }, { $sort: { Average: 1 } }]);
        const { username } = await User.findById(data[0]._id);
        data[0].username = username;

        res.json(data[0]);
    }
    catch (err) {
        next(err);
    }
}

/************************************************** */
const rankingWinner = async (req, res, next) => {

    console.log('Ejecutando ranking winner');

    try {
        const data = await Game.aggregate([{ $group: { _id: "$user", Average: { $avg: { $multiply: ["$ganador", 100] } } } }, { $sort: { Average: -1 } }]);
        const { username } = await User.findById(data[0]._id);
        data[0].username = username;

        res.json(data[0]);
    }
    catch (err) {
        next(err);
    }
}

module.exports = {
    rankingGet,
    rankingLoser,
    rankingWinner
}