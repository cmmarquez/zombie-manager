const mongoose = require('mongoose');
const { Schema } = mongoose;

const zombieSchema = new Schema({
    zombieLocation: String,
    image: String
});

module.exports = mongoose.model('Zombie', zombieSchema);