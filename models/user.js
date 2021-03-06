const mongoose = require('../db/connection')



const userSchema = new mongoose.Schema({
    userName: String,
    income: Number,
    remainder: Number,
    expenses: [{
        ref: "Expense",
        type: mongoose.Schema.Types.ObjectId
    }]
})

const User = mongoose.model("User",userSchema)
module.exports = User