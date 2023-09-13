
const Player = require('../models/player.model');



// get all

module.exports.findAllPlayers = (req, res) => {
    Player.find()
        .then((allPlayers) => {
            res.json({players: allPlayers})
        })
        .catch(err =>res.json(err));
}

// get one

module.exports.findOnePlayer = (req, res) => {
    Player.findOne({_id: req.params.id})
        .then((onePlayer) => {
            res.json({player: onePlayer})
        })
        .catch(err =>res.json(err));
}

// create

module.exports.createPlayer = (req, res) => {
    Player.create(req.body)
        .then(newPlayer => {
            res.json({player: newPlayer})
        })
        .catch(err =>res.status(400).json(err));
}

//update 

module.exports.updatePlayer = (req, res) => {
    Player.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        .then((updatedPlayer) => {
            res.json({player: updatedPlayer})
        })
        .catch(err =>res.status(400).json(err));
}


// delete one

module.exports.deleteOnePlayer = (req, res) => {
    Player.findByIdAndDelete(req.params.id)
        .then((deletedPlayer) => {
            res.json({player: deletedPlayer})
        })
        .catch(err =>res.json(err));
}