const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
    },
    password: {
      type: String,
      required: [true, "Password is required."],
    },
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;


// const database = require("../db");

// const mySqlQuery = `CREATE TABLE if not exists Users (
//   id int(11) NOT NULL AUTO_INCREMENT primary key,
//   Name varchar(150) NOT NULL,
//   Password varchar(150) NOT NULL
//   )`;

// const Users = database.query(mySqlQuery, (err, result) => {
//   if (err) {
//     console.error("Error creating record:", err);
//     return;
//   }
//   console.log(`New Table USERS added with ID: ${result.insertId},`);
// });

// module.exports = Users;
