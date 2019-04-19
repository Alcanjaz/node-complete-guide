const path = require('path');
const express = require('express');

const rootDir = require('../utils/path');


const router = express.Router();

// /admin/create-product ==> GET
router.get("/create-product", (req, res) => { //put the path that we want to take
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// /admin/create-product ==> POST
router.post("/create-product", (req, res) => {
    console.log(req.body);
    res.redirect("/");
});

module.exports = router;