const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        requerid: true
    },
    created: {
        type: Date,
        default: new Date()
    }
        
});

const User = mongoose.model('User', userSchema);

module.exports = User
