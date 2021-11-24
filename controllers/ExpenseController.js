const express = require("express")
const router = express.Router()
const Expense = require('../models/expense')
const User = require('../models/user')


router.post("/:userId", (req, res) => {
  console.log("body", req.body);
  //FIXME: this doesnt include the latest exspense
  Expense.create(req.body).then((newExpense) => {
    User.findById(req.params.userId)
    .populate("expenses")
    .then((user) => {
      user.expenses.push(newExpense._id);
      user.save(function (){
        res.status(200).json(user);
      });
      
    });
  });
});



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