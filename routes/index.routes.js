const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");

//   const newCard = [
//     23456789,
//     555,
//     "thisone",
//     "Done",
//     "ThisOtherOne",
//     "Adventure",
//     "Loooorem",
//     "https://try.com",
//     5,
//   ];

//   function createCard(id, CreatedBy, Title, Status, Topic, Category, Content, Link, consumeTime) {
//     const sql = `INSERT INTO Cards(id, CreatedBy, Title, Status, Topic, Category, Content, Link, consumeTime)
//     Values(?)`;
//     database.query(sql, [id, CreatedBy, Title, Status, Topic, Category, Content, Link, consumeTime], (err, result) => {
//       if (err) {
//         console.error("Error creating record:", err);
//         return;
//       }
//       res.json(result)
//       console.log(`New record added with ID: ${result.insertId} into CARDS`);
//     });
//   }

//   createCard(newCard);
 });

module.exports = router;
