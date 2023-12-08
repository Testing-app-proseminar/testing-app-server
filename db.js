const mySql = require("mysql2");
const env = require("dotenv");

env.config({ path:'./.env' });


let database = mySql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

database.connect((err) => {
  if(err){
    console.log('Error connecting to MySql');
    return;
  }
  console.log('Connected to MySql!');
});

module.exports = database

/*const createUsersSchema = `CREATE TABLE Users (
  id int(11) NOT NULL AUTO_INCREMENT primary key,
  Name varchar(150) NOT NULL,
  Password varchar(150) NOT NULL
  )`;

const createCardsSchema = `CREATE TABLE Cards (
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

database.query(createUsersSchema, function(err, results, fields){
  if(err){
    console.log(err.message);
  } else{
    console.log(results);
  }
});

database.query(createCardsSchema, function(err, results, fields){
  if(err){
    console.log(err.message);
  } else{
    console.log(results);
  }
});*/

// database.end((err) => {

// });


