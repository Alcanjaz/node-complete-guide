const getDatabase = require("../util/database").getDatabase;
const mongodb = require("mongodb");

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

  static updateById(id, updatedProduct) {
    const database = getDatabase();

    return database
      .collection("products")
      .updateOne({ _id: new mongodb.ObjectID(id) }, { $set: updatedProduct })
      .then(updatedRecord => {
        return updatedRecord;
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  }

  static findById(prodId) {
    const database = getDatabase();
    return database
      .collection("products")
      .findOne({ _id: new mongodb.ObjectID(prodId) })
      .then(product => {
        console.log(product);
        return product;
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  }

  static deleteById(prodID) {
    const database = getDatabase();

    return database
      .collection("products")
      .deleteOne({ _id: new mongodb.ObjectID(prodID) })
      .then(() => console.log("deleted"))
      .catch(err => console.log(err));
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
