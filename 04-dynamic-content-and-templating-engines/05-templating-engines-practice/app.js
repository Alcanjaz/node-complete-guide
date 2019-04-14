const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const userRoutes = require('./routes/users');

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({extended: false}));

app.use('/users', userRoutes);

app.get("/", (req, res) => {
    res.render("home");
});


app.listen(3000);