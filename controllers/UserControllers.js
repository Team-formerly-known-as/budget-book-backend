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
    Expense.findById(req.params.expenseId).then( expense => {
        User.findByIdAndUpdate((req.params.userId), req.body, {new: true})
        .then(user => {
            user.expenses.push(expense._id)
            expense.expenses.push(user._id)

            user.save()
            expense.save()
            res.json(user)
        })
    })  
})

module.exports = router

