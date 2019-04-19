const express = require('express'); //import the express module
const bodyParser = require('body-parser');

const app = express(); //create an express app executing the express variable as a function

app.use(bodyParser.urlencoded({extended: false}));

app.get("/create-product", (req, res) => { //put the path that we want to take
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Send</button></form>'); 
});

app.post("/product", (req, res) => {
    console.log(req.body);
    res.redirect("/");
});

app.get("/",(req, res) => { //we must to put this route in the end to avoid to take all routes 
    res.send("<h1>Home Page!</h1>"); 
});



app.listen(3000); 