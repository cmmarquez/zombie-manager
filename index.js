const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const seedDB = require('./seeds');

require('./models/Zombie');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/zombie-manager', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.set('useFindAndModify', false);

app.use(bodyParser.json());

require('./routes/zombieRoutes')(app);

seedDB();

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Zombie Manager running on port ${PORT}.`)
});