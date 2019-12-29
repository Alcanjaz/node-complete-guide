const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const mongoConnection = (callback) => {
  MongoClient.connect(
    "mongodb+srv://node_student:yVgEHIiIJG3tSmYX@cluster0-ekjh9.mongodb.net/test?retryWrites=true&w=majority"
  )
    .then(client => {
      console.log("Connected!");
      callback(client);
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = mongoConnection;