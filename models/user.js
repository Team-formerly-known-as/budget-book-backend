const mongoose = require('../db/connection')
const Expense = require('./expense')

const userSchema = new mongoose.Schema({
    userName:String,
    income: Number,
    expense: [Expense]
})

const User = mongoose.model("User",userSchema)
module.exports = User