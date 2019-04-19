const Product = require('../models/product');

exports.getAddProducts = (req, res, next) => {
    res.render('admin/add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product'
    });
};

exports.postAddProducts = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
  };
  
exports.getAdminProducts = (req, res) => {
  res.render("admin/products", {
    pageTitle: 'Admin Products',
    path: '/admin/products'
  });
}