const Card = require("../models/Card.model");

async function createCard(cardData) {
  const newCard = await Card.create(cardData);
  return newCard;
}

module.exports = createCard