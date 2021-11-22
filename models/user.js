const mongoose = require('../db/connection')

const userSchema = new mongoose.Schema({
    userName:String,
    budget: [budget]
})

const User = mongoose.model("User",userSchema)
module.exports = User