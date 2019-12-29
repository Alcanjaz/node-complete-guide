const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnection = callback => {
  MongoClient.connect(
    "mongodb+srv://node_student:yVgEHIiIJG3tSmYX@cluster0-ekjh9.mongodb.net/node_course?retryWrites=true&w=majority"
  )
    .then(client => {
      console.log("Connected!");
      _db = client.db();
      callback();
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

const getDatabase = () => {
  if (_db) {
    return _db;
  }
  throw "No database found!";
};

exports.mongoConnection = mongoConnection;
exports.getDatabase = getDatabase;
