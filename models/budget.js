const mongoose = require('../db/connection')
const Expense = require('./expense')

const budgetSchema = new mongoose.Schema({
    income: Number,
    expense: [Expense]
})

const Budget = mongoose.model("Budget",budgetSchema)
module.exports = Budget