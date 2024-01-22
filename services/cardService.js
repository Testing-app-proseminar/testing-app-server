const Card = require("../models/Card.model");

async function createCard(cardData) {
  const newCard = await Card.create(cardData);
  return newCard;
}

async function getCards({createdBy : userId}) {
  const allCards = await Card.find({createdBy : userId});
  return allCards
}

async function getOneCard(cardId) {

  const card = await Card.findById(cardId)
  return card;
}

async function editCard(cardId, newCardData) {

  const modifiedCard = await Card.findByIdAndUpdate(cardId, newCardData, {new: true})
  return modifiedCard
}

async function deleteCard(cardId) {
  const deleteCard = await Card.findByIdAndDelete(cardId)
  return deleteCard
}

module.exports = {createCard, getCards, getOneCard, editCard, deleteCard}