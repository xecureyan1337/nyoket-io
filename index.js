const express = require('express');
const { createServer } = require('node:http');

// express initializes app to be a function handler that can be used for supply to an HTTP server
const app = express();
const server = createServer(app);

// define a router handler
app.get('/', (req,res) => {
    res.send('<h1>My World, My Server');
});

// http server listener on port 1337
server.listen(1337, () => {
    console.log('Server is running at http://localhost:1337')
})