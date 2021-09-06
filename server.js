'use strict';

// to import the express.
const express = require('express'); // to import the express.

// to use a method inside the express framework.
const server = express(); 

const PORT = 3010;

// When a server recieved a request it should send a response, by the use of Route which is a method from express we can achieve that.
// fixed local link :
// http://localhost:3010/test
server.get('/test', (req,res) => {
    res.send('Hello from testing the route');
})

// http://localhost:3010/home or just // http://localhost:3010/
server.get('/home', (req,res) => {
    res.send('Hello from home route');
})

// To connect between the server & the PORT use the Listen method inside the express framework.
server.listen(PORT, () => {
    console.log(`Hello, I am listening on ${PORT}`);
})

