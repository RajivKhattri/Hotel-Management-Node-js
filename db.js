const mongoose = require('mongoose');
require('dotenv').config();

// const mongoURL = process.env.MONGODB_URL_LOCAL; // Local MongoDB URL

const mongoURL = process.env.MONGODB_URL;
mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    // useUnifiedTopology: true,
    ssl: true
})

const db = mongoose.connection;

db.on('connected', () => {
    console.log(`Mongoose connected to ${mongoURL}`);
})

db.on('disconnected', () => {
    console.log('Mongoose disconnected');
})

db.on('error', (err) => {
    console.log(`Mongoose connection error: ${err}`);
})

module.exports = db;