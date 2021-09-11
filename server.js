'use strict';
// first import libraries, frameworks through require.

// to import the data inside weather json file.
// const weather = require('./data/weather.json'); 

// to import the express library.
const express = require('express');

// to import cors.
const cors = require('cors');

// to import dotenv
require('dotenv').config();



const weatherData = require('./weather');
const movieData = require('./movies');

// to use a method inside the express framework.
const server = express();

// make the server open to clients
server.use(cors());
const PORT = process.env.PORT; // take the port from .env file

// http://localhost:3010/weather?searchQuery=city
server.get('/weather', weatherData);

// http://localhost:3010/movies?searchQuery=city
server.get('/movies', movieData);

// When a server recieved a request it should send a response, by the use of Route which is a method from express we can achieve that.
// fixed local link :
// http://localhost:3010/test
server.get('/test', (req, res) => {
    res.send('Hello from testing the route');
});




// http://localhost:3010/home or just // http://localhost:3010/
server.get('/', (req, res) => {
    res.send('Hello from home route');
});

// To connect between the server & the PORT use the Listen method inside the express framework.
server.listen(PORT, () => {
    console.log(`Hello, I am listening on ${PORT}`);
});
