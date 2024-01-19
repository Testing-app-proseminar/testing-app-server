const Card = require("../models/Card.model");

async function createCard(cardData) {
  const newCard = await Card.create(cardData);
  return newCard;
}

async function getCards() {
  const allCards = await Card.find();
  return allCards
}

async function getOneCard(cardId) {
  if (!mongoose.Types.ObjectId.isValid(cardId)) {
    res.status(400).json({ message: "Specified card ID is not valid" });
    return;
  }

  const findCardById = await Card.findById(cardId)
  return findCardById;
}



module.exports = {createCard, getCards, getOneCard}