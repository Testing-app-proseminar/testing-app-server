const Card = model("Card", cardSchema);

const database = require("../db");

  const mySqlQuery = `CREATE TABLE if not exists Cards (
    id int(11) NOT NULL AUTO_INCREMENT primary key,
    CreatedBy int(11),
    Title varchar(150) NOT NULL,
    Status varchar(5) check (Status in ('To-do', 'Doing', 'Done')),
    Topic varchar(150),
    Category varchar(50),
    Content varchar(3000),
    Link varchar(500),
    consumeTime int(5)
  )`;

const Cards = database.query(
  mySqlQuery,
  (err, result) => {
    if (err) {
      console.error("Error creating record:", err);
      return;
    }
    console.log(`New CARDS Table added with ID: ${result.insertId},`);
  }
);

module.exports = Cards;