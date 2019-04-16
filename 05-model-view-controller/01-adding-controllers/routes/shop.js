const path = require('path');

const express = require('express');

const productRoutes = require('../controllers/products');

const router = express.Router();

router.get('/', productRoutes.getProducts);

module.exports = router;
