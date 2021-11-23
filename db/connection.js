const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/budget-book-backend", {useNewUrlParser: true})
let mongoURI = "";

if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL;
  } else {
    mongoURI = "mongodb://localhost/book-e";
  }

module.exports = mongoose;