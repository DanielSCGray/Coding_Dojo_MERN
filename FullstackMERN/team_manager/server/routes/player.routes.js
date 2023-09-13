

const PlayerController = require('../controllers/player.controller');

module.exports = app => {
    app.get('/api/players', PlayerController.findAllPlayers);
    app.get('/api/players/:id', PlayerController.findOnePlayer);
    app.patch('/api/players/:id', PlayerController.updatePlayer);
    app.post('/api/players', PlayerController.createPlayer);
    app.delete('/api/players/:id', PlayerController.deleteOnePlayer);
    app.put('/api/players/:id', PlayerController.updatePlayer);
}