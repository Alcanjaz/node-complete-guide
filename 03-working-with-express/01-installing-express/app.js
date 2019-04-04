const http = require('http');

const express = require('express'); //import the express module

const app = express(); //create an express app executing the express variable as a function

const server = http.createServer();

server.listen(3000);
