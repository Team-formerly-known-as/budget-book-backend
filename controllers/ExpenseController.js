const express = require('express')
const router = express.Router()
const Expense = require('../models/expense')
const User = require('../models/user')

router.post('/:userId', (req, res) => {
  console.log('body', req.body)

  Expense.create(req.body).then((newExpense) => {
    User.findById(req.params.userId)
      .populate('expenses')
      .then((user) => {
        console.log(user)
        user.expenses.push(newExpense)
        let income = user.income
        for (let x = 0; x < user.expenses.length; x++) {
          income = income - user.expenses[x].amount
        }
        user.remainder = income
        return(user)
      })
      .then((user) => {
          user.save(function () {
            res.status(200).json(user)
          })
      })
  })
})

router.get('/', (req, res) => {
  Expense.find().then((expense) =>
    res.json({
      status: 200,
      expense: expense,
    }),
  )
})

router.delete("/:expenseId/:ownerId", (req, res) => {
  Expense.findByIdAndDelete(req.params.expenseId).then((expense) => {
    console.log("expense", expense)
    User.findById(req.params.ownerId).then((user) => {
      console.log("expense1", expense)
      console.log("user",user)
      user.save();
     
      res.json({
        status: 200,
        user: user,
      });
    });
  });
});

router.put('/:id', (req, res) => {
  Expense.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    (expense) =>
      res.json({
        status: 200,
        expense: expense,
      }),
  )
})

module.exports = router
