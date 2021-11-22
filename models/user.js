const mongoose = require('../db/connection')
const Budget = require('./budget')

const userSchema = new mongoose.Schema({
    userName:String,
    budget: [Budget]
})

const User = mongoose.model("User",userSchema)
module.exports = User