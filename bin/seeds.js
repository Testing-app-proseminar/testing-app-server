const mongoose = require('mongoose');

const Card = require('../models/Card.model')

require('dotenv').config(); // import and configure dotenv (loads environment variables from .env file)



const MONGO_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/testing-app-server';

const cards = [
  {
    "createdBy": "651616ede22c44de69bd7777",
    "title": "Lemming's world!",
    "status": "To-do",
    "topic": "game",
    "category": "Action-Adventure",
    "content": "Click on them to activate their skils!",
    "link": "https://github.com/hymced/project1-game",
    "consumeTime": "Your goal is to have at least 60% of lemmings IN the EXIT at the bottom.",
  },


]

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);

    //return Card.deleteMany({}); //WARNING: this will delete all games in your DB !!
  })
  .then((response) => {
    console.log(response);

    return Card.insertMany(cards);
  })
  .then(cardsFromDB => {
    console.log(`Created ${cardsFromDB.length} cards`);

    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("Error connecting to DB: ", err);
  });
