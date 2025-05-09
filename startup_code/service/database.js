const { MongoClient } = require('mongodb');
const config = require('./dbconfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('simon');
const userCollection = db.collection('user');
const messageCollection = db.collection('message');


(async function testConnection() {
  try {
    await db.command({ ping: 1 });
  } catch (ex) {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  }
})();

async function getUser(username) {
  return userCollection.findOne({ username: username });
}

async function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function addUser(user) {
  await userCollection.insertOne(user);
}

async function updateUser(user) {
  await userCollection.updateOne({ username: user.username }, { $set: user });
}
async function addmessage(message) {
  return messageCollection.insertOne(message);
}
async function getMessages() {
  return messageCollection.find({}).toArray();
}



module.exports = {
  getUser,
  getUserByToken,
  addUser,
  updateUser,
  addmessage,
  getMessages,
};
