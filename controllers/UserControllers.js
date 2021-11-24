const express = require('express')
const { model } = require('mongoose')
const Expense = require('../models/expense')
const router = express.Router()
const User = require('../models/user')



router.post("/",(req,res) =>{
    console.log(req.body)
    User.create(req.body)
    // might need fart arrow
    .then(user => res.json({
        status:201,
        user: user
    }))   
})



router.get('/', (req,res) =>{
    User.find()
    .then(user => res.json({
        status:200,
        user:user
    }))
})

router.delete("/:id", (req,res) =>{
    User.findByIdAndDelete(req.params.id)
    .then(() => res.status(204))    
})

router.put('/:expenseId/:userId', (req, res) => {
    // console.log("userid",req.params.userId)
    // console.log("expense",req.params.expenseId)
    // console.log("body",req.body)
    Expense.findById(req.params.expenseId).then( expense => {
        console.log("expense",expense)
        User.findByIdAndUpdate((req.params.userId), req.body, {new: true})
        .then(user => {
            console.log("user",user)
            user.expenses.push(expense._id)
            // expense.user.push(user._id)

            user.save()
            expense.save()
            console.log("user2",user)
            res.json({
                status:200,
                user:user
            })
        })
    })  
})

module.exports = router

