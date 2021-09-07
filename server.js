'use strict';
const weather = require('./data/weather.json'); // to import the data inside weather json file.
const express = require('express'); // to import the express.
const cors = require('cors'); // to import cors.
require('dotenv').config(); // to import dotenv

const server = express();// to use a method inside the express framework.
server.use(cors()); // make the server open to clients
const PORT = process.env.PORT; // take the port from .env file

// http://localhost:3010/weather?searchQuery=Amman&lat=''&lon=''
server.get('/weather', (req, res) => {
    const city = req.query.searchQuery;
    const lat = req.query.lat;
    const lon = req.query.lon;
    let weatherArr = [];
    console.log(weather);
    try {
        weatherArr = weather.find((item) => {
            if (item.city_name === city || item.lat === lat || item.lon === lon) {
                return item;
            }

        })
        const data = weatherArr.data.map(item => {
            return new Forcast(item);
        })

        res.send(data);

    }
    catch {
        res.send('Errors may occured 404');
    }
});

class Forcast {
    constructor(item) {
        this.date = item.valid_date;
        this.description = item.weather.description;
    }
}

// When a server recieved a request it should send a response, by the use of Route which is a method from express we can achieve that.
// fixed local link :
// http://localhost:3010/test
server.get('/test', (req, res) => {
    res.send('Hello from testing the route');
})




// http://localhost:3010/home or just // http://localhost:3010/
server.get('/home', (req, res) => {
    res.send('Hello from home route');
})

// To connect between the server & the PORT use the Listen method inside the express framework.
server.listen(PORT, () => {
    console.log(`Hello, I am listening on ${PORT}`);
});
