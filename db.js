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
