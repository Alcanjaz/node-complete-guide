const express = require('express');

const router = express.Router();

router.get("/create-product", (req, res) => { //put the path that we want to take
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Send</button></form>'); 
});

router.post("/product", (req, res) => {
    console.log(req.body);
    res.redirect("/");
});

module.exports = router;