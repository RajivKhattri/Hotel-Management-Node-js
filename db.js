const mongoose = require('mongoose');

const mongoURL = 'mongodb://localhost:27017/hotels';

mongoose.connect(mongoURL)

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