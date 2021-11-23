const mongoose = require('../db/connection')




const expenseSchema = new mongoose.Schema({
    detail: String,
    amount: Number,
    dueDate: Date,
    user: {
        ref: "User",
        type: mongoose.Schema.Types.ObjectId
    }
})

const Expense = mongoose.model("Expense",expenseSchema)
module.exports = Expense