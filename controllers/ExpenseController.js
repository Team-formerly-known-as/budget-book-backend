const express = require("express")
const router = express.Router()
const Expense = require('../models/expense')



router.post("/",(req,res) =>{
    console.log('This is my log',req.body)
    Expense.create(req.body)
    .then(expense => res.json({
        status:201,
        expense: expense
    }))   
})



router.get('/', (req,res) =>{
    Expense.find()
    .then(expense => res.json({
        status:200,
        expense:expense
    }))
})

router.delete("/:id", (req,res) =>{
    Expense.findByIdAndDelete(req.params.id)
    .then(() => res.status(204))    
})

router.put('/:id', (req, res) => {
    Expense.findByIdAndUpdate((req.params.id), req.body, {new: true})
    .then((expense) => res.json({
        status: 200,
        expense: expense
    }))
})

module.exports = router