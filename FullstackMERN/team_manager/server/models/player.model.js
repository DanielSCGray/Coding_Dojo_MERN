const mongoose = require('mongoose');



const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minlength: [2, 'Name must be at least 2 characters']
    },
    position: {
        type: String,
        default: ''
    },
    game1: {
        type: String,
        default: 'undecided'
    },
    game2: {
        type: String,
        default: 'undecided'
    },
    game3: {
        type: String,
        default: 'undecided'
    },
    

}, {timestamps: true});

const Player = mongoose.model('Player', PlayerSchema);

module.exports = Player;
