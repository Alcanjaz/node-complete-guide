const http = require('http');

const express = require('express'); //import the express module

const app = express(); //create an express app executing the express variable as a function

app.use("/", (req, res, next) => {
    console.log('This always runs'); //because this we don't especify the path
    next(); //continue to the next middleware
});

app.use("/create-user", (req, res, next) => { //put the path that we want to take
    res.send("<h1>Create-user page.</h1>"); 
});

app.use("/",(req, res, next) => { //we must to put this route in the end to avoid to take all routes 
    res.send("<h1>Home Page!</h1>"); 
});



app.listen(3000); 