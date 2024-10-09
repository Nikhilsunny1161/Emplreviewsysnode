const mongoose = require("mongoose");
const dotEnv = require('dotenv');
dotEnv.config();

const url=process.env.MONGODB_URL;
// Connection to mongodb.
mongoose.connect("mongodb+srv://nikhilsunny02:x1jlsZRBqopFuvvL@nikhilsunny02.7kcep3f.mongodb.net"); 


// db variable store the connection
const db = mongoose.connection; 


// checking the connection
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Database connected");
});

// for exporting the connection
module.exports = db;