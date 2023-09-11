const Joke = require('../models/joke.model');

// get all

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => {
            res.json({jokes: allJokes})
        })
        .catch(err =>res.json(err));
}

// get one

module.exports.findOneJoke = (req, res) => {
    Joke.findOne({_id: req.params.id})
        .then((oneJoke) => {
            res.json({joke: oneJoke})
        })
        .catch(err =>res.json(err));
}

// create

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => {
            res.json({joke: newJoke})
        })
        .catch(err =>res.json(err));
}

//update 

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        .then((updatedJoke) => {
            res.json({joke: updatedJoke})
        })
        .catch(err =>res.json(err));
}


// delete one

module.exports.deleteOneJoke = (req, res) => {
    Joke.findByIdAndDelete(req.params.id)
        .then((deletedJoke) => {
            res.json({joke: deletedJoke})
        })
        .catch(err =>res.json(err));
}
