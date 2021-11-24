const mongoose = require('../db/connection')




const expenseSchema = mongoose.Schema({
    detail: String,
    amount: Number,
    dueDate: Date,
    users: {
        ref: "User",
        type: mongoose.Schema.Types.ObjectId
    }
})

const Expense = mongoose.model("Expense",expenseSchema)
module.exports = Expense