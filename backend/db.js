// const { MongoClient } = require('mongodb');

// require('dotenv').config();


// const uri = process.env.MONGODB_URI;
// const db_name = process.env.DB_NAME;
// const client = new MongoClient(uri);

// let db;

// async function connect() {
//   try {
//     await client.connect();
//     console.log('Connected to MongoDB Atlas');
//     db = client.db(db_name);
//   } catch (err) {
//     console.error('Error connecting to MongoDB Atlas:', err);
//   }
// }

// function getDb() {
//   return db;
// }

// module.exports = {
//   connect,
//   getDb,
// };

// db.js

require('dotenv').config();
const mongoose = require('mongoose');
const mongoURI = process.env.MONGODB_URI; // Replace with your MongoDB Atlas URI

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB Atlas');
});

