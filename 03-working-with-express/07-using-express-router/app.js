const express = require('express'); //import the express module
const bodyParser = require('body-parser');

const app = express(); //create an express app executing the express variable as a function

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).send("<h1>Page not found.</h1>");
});

app.listen(3000); 