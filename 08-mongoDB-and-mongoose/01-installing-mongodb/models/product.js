const getDatabase = require("../util/database").getDatabase;

class Product {
  constructor(title, price, description, imageUrl) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
  }

  static fetchProducts() {
    const database = getDatabase();  
    return database
      .collection("products")
      .find()
      .toArray()
      .then(products => {
        console.log(products);
        return products;
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  }

  save() {
    const database = getDatabase();    
    return database
      .collection("products")
      .insertOne(this)
      .then(result => console.log(result))
      .catch(err => console.log(err));
  }
}

module.exports = Product;
