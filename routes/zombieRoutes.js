const mongoose = require('mongoose');
const Zombie = mongoose.model('Zombie');

module.exports = (app) => {

    app.get('/api/zombie', async (req, res) => {
        let zombies = await Zombie.find();
        return res.status(200).send(zombies);
    });

    app.put('/api/zombie/:id', async (req, res) => {
        const {id} = req.params;
        let zombie = await Zombie.findByIdAndUpdate(id, req.body);
        return res.status(202).send({
            error: false,
            zombie
        })
    });

};