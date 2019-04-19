const router = require('express').Router();

const users = [];

router.get("/", (req, res) => {
    res.render("users", {docTitle:"Users", users: users});
});

router.post("/", (req, res) => {
    users.push({name: req.body.username});
    res.render("users", {docTitle:"Users", users: users});
});

module.exports = router;