const path = require('path');

const express = require('express'); //import the express module
const bodyParser = require('body-parser');

const app = express(); //create an express app executing the express variable as a function

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoutes); //we can add a subpath to tell to express all this routes work with this path
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'error.html'));
});

app.listen(3000); 