const Product = require('../models/product');


exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Product List',
      path: '/'
    });
  });
};

exports.getCart = (req, res) => {
  res.render("shop/cart", {
    pageTitle: 'Cart',
    path: '/cart'
  });
}


exports.getProducts = (req, res) => {
  Product.fetchAll(products => {
    res.render('shop/products-list', {
      prods: products,
      pageTitle: 'Product List',
      path: '/products'
    });
  });
}

exports.getCheckout = (req, res) => {
  res.render('shop/checkout', {
    pageTitle: 'Checkout',
    path:'/checkout'
  });
}