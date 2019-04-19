const express = require('express');

const router = express.Router();

// /admin/create-product ==> GET
router.get("/create-product", (req, res) => { //put the path that we want to take
    res.send('<form action="/admin/create-product" method="POST"><input type="text" name="title"><button type="submit">Send</button></form>'); 
});

// /admin/create-product ==> POST
router.post("/create-product", (req, res) => {
    console.log(req.body);
    res.redirect("/");
});

module.exports = router;