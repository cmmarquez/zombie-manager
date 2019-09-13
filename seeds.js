const mongoose = require('mongoose');
const Zombie = require('./models/Zombie');

let zombieData = [
    { zombieLocation: 'Hospital', image: `https://robohash.org/${Math.random()}?set=set2&size=180x180` },
    { zombieLocation: 'Hospital', image: `https://robohash.org/${Math.random()}?set=set2&size=180x180` },
    { zombieLocation: 'Warehouse', image: `https://robohash.org/${Math.random()}?set=set2&size=180x180` },
    { zombieLocation: 'Hospital', image: `https://robohash.org/${Math.random()}?set=set2&size=180x180` },
    { zombieLocation: 'School', image: `https://robohash.org/${Math.random()}?set=set2&size=180x180` },
    { zombieLocation: 'Hospital', image: `https://robohash.org/${Math.random()}?set=set2&size=180x180` },
    { zombieLocation: 'Hospital', image: `https://robohash.org/${Math.random()}?set=set2&size=180x180` },
    { zombieLocation: 'Warehouse', image: `https://robohash.org/${Math.random()}?set=set2&size=180x180` },
    { zombieLocation: 'Hospital', image: `https://robohash.org/${Math.random()}?set=set2&size=180x180` },
    { zombieLocation: 'School', image: `https://robohash.org/${Math.random()}?set=set2&size=180x180` },
    { zombieLocation: 'Warehouse', image: `https://robohash.org/${Math.random()}?set=set2&size=180x180` },
    { zombieLocation: 'Hospital', image: `https://robohash.org/${Math.random()}?set=set2&size=180x180` },
    { zombieLocation: 'School', image: `https://robohash.org/${Math.random()}?set=set2&size=180x180` },
    { zombieLocation: 'Hospital', image: `https://robohash.org/${Math.random()}?set=set2&size=180x180` },
    { zombieLocation: 'Hospital', image: `https://robohash.org/${Math.random()}?set=set2&size=180x180` },
    { zombieLocation: 'Hospital', image: `https://robohash.org/${Math.random()}?set=set2&size=180x180` },
    { zombieLocation: 'Warehouse', image: `https://robohash.org/${Math.random()}?set=set2&size=180x180` },
    { zombieLocation: 'Hospital', image: `https://robohash.org/${Math.random()}?set=set2&size=180x180` }
];

seedDB = () => {
    Zombie.deleteMany({}, (err) => {
        if (err) {
            console.log(`Zombie.deleteMany error: ${err}`);
        } else {
            Zombie.create(zombieData, (err) => {
                if (err) {
                    console.log(`Zombie.create error: ${err}`);
                }
            });
        }
    })
};

module.exports = seedDB;