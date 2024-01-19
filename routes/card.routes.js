const router = require("express").Router();
const mongoose = require("mongoose");

const Card = require("../models/Card.model");

const { isAuthenticated } = require("../middleware/jwt.middleware");
const { createCard, getCards, getOneCard } = require("../services/cardService");

router.post("/cards", isAuthenticated, async (req, res) => {
  try {
    const newCard = await createCard({
      ...req.body,
      createdBy: req.payload._id,
    });
    res.json(newCard);
  } catch (err) {
    console.log("Error creating a new Card...", err);
    res.status(500).json({
      message: "We are sorry, we couldn't create your card",
    });
  }
});

router.get("/cards", async (req, res) => {
  try {
    const allCards = await getCards();
    res.json(allCards);
  } catch (err) {
    console.log("Error getting the list of Cards...", err);
    res.status(500).json({
      message: "We are sorry, we couldn't get your Card's list",
    });
  }

});

router.get("/cards/:cardId", async (req, res) => {
  //const { cardId } = req.params;

  try {
    const findCardById = await getOneCard({cardId: req.params});
    res.status(200).json(findCardById)
  } catch (err){
    console.log("Error getting the specified Card...", err);
    res.status(500).json({
      message: "We are sorry, we couldn't get your Card",
    });
  }


//   if (!mongoose.Types.ObjectId.isValid(cardId)) {
//     res.status(400).json({ message: "Specified card ID is not valid" });
//     return;
//   }

//   Card.findById(cardId)
//     .then((card) => res.status(200).json(card))
//     .catch((err) => {
//       console.log("Error getting the specified Card...", err);
//       res.status(500).json({
//         message: "We are sorry, we couldn't get your Card",
//       });
//     });
 });

router.put("/cards/:cardId/edit", (req, res) => {
  const { cardId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(cardId)) {
    res.status(400).json({ message: "specified card ID is not valid" });
    return;
  }

  Game.findByIdAndUpdate(cardId, req.body, { new: true })
    .then((updatedCard) => res.json(updatedCard))
    .catch((err) => {
      console.log("Error UPDATING the specified Card...", err);
      res.status(500).json({
        message: "We are sorry, we couldn't update your Card",
      });
    });
});

router.delete("/cards/:cardId", (req, res) => {
  const { cardId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(cardId)) {
    res.status(400).json({ message: "specified card ID is not valid" });
    return;
  }

  Card.findByIdAndDelete(cardId)
    .then(() => res.json({ message: "Your card has been deleted" }))
    .catch((err) => {
      console.log("Error DELETING the specified Card...", err);
      res.status(500).json({
        message: "We are sorry, we couldn't delete your Card",
      });
    });
});

module.exports = router;
