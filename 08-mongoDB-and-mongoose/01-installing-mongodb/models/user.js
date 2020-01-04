const mongodb = require("mongodb");
const getDatabase = require("../util/database").getDatabase;

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  static findById(userId) {
    const database = getDatabase();

    return database
      .collection("users")
      .findOne({ _id: new mongodb.ObjectID(userId) })
      .then(user => {
        return user;
      })
      .catch(err =>{
        console.log(err);
        throw err;
      });
  }

  save() {
    const database = getDatabase();

    return database
      .collection("users")
      .insertOne(this)
      .then(result => {
        console.log("user created");
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  }
}

module.exports = User;
