const path = require('path');

const express = require('express');

const router = express.Router();

const shopController = require('../controllers/shop');

// / => GET
router.get('/', shopController.getIndex);

// /cart => GET
router.get('/cart', shopController.getCart);

// products => GET
router.get('/products', shopController.getProducts);

// Orders => GET
router.get('/orders', shopController.getOrders);

// products => GET
router.get('/checkout', shopController.getCheckout);


module.exports = router;
