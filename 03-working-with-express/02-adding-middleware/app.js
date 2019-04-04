const http = require('http');

const express = require('express'); //import the express module

const app = express(); //create an express app executing the express variable as a function

app.use((req, res, next) => {
    console.log('In the middleware :O');
    next(); //Allows to pass the request to continue to the next middleware inline
});

app.use((req, res, next) => {
    console.log('In another middleware ;)');
    res.send("<h1>Hello from Express.js!</h1>"); //If you send a response, the app stops here and doesn't continue to other middleware
});

const server = http.createServer(app);

server.listen(3000);
