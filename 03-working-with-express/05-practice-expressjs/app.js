const express = require('express');

const app = express();


app.use("/users", (req, res, next) => {
    console.log('/users middleware');
    res.send('User view');
});

app.use("/", (req, res, next) => {
    console.log('/ middleware');
    res.send("Hello!");
});


app.listen(3000);