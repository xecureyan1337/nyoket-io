const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');

// express initializes app to be a function handler that can be used for supply to an HTTP server
const app = express();
const server = createServer(app);

// serving HTML
// refactor reoute handler to use sendFile
app.get('/', (req,res) => {
    res.sendFile(join(__dirname, 'index.html'));
});

// serve static files (style.css)
app.use(express.static(__dirname));

// http server listener on port 1337
server.listen(1337, () => {
    console.log('Server is running at http://localhost:1337')
})