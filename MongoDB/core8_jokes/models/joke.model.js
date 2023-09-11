const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    set_up: {
        type: String,
        required: [true, 'Set up is required'],
        minlength: [5, 'Set up must be at least 5 characters']
    },
    punchline: {
        type: String,
        required: [true, 'Punchline is required'],
        minlength: [2, 'Punchline must be at least 2 characters']
    }
}, {timestamps: true});

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;
