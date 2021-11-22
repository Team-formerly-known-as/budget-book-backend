const mongoose = require('../db/connection')

const expenseSchema = new mongoose.Schema({
    detail: String,
    amount: Number,
    dueDate: Date
})

const Expense = mongoose.model("Expense",expenseSchema)
module.exports = Expense