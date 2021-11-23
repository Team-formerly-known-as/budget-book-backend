const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/budget-book-backend")

module.exports = mongoose;