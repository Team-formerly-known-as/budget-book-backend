const express = require("express");
const { model } = require("mongoose");
const Expense = require("../models/expense");
const router = express.Router();
const User = require("../models/user");

router.post("/", (req, res) => {
  console.log(req.body);
  User.find({ userName: req.body.userName }).then((users) => {
    if (users.length !== 0 ) {
      res
        .status(400)
        .json({
          message: `user with username ${req.body.userName} already exists`,
        });
    } else {
      User.create(req.body)
        .then((user) =>
          res.json({
            status: 201,
            user: user,
          })
        );
    }
  });
});

router.get("/", (req, res) => {
  User.find().then((user) =>
    res.json({
      status: 200,
      user: user,
    })
  );
});

router.delete("/:id", (req, res) => {
  User.findByIdAndDelete(req.params.id).then(() => res.status(204));
});

router.get("/:id", (req, res) => {
  User.findById(req.params.id).populate("expenses").then((user) =>
    res.json({
      status: 200,
      user: user,
    })
  );
});

router.put("/:expenseId/:userId", (req, res) => {
 
    Expense.findByIdAndUpdate(req.params.expenseId, req.body, { new: false}).then((expense) => {
      console.log("expense", expense);
      User.findByIdAndUpdate(req.params.userId, req.body, { new: true}).populate('expenses').then(
        (user) => {
          console.log("user", user);
          user.expenses.push(expense);
          
         
          expense.save();
          console.log("user2", user);
          res.json({
            status: 200,
            user: user,
          });
        }
      );
    });
  });

// router.put("/:expenseId/:userId", (req, res) => {
 
//   Expense.findById(req.params.expenseId).then((expense) => {
//     console.log("expense", expense);
//     User.findByIdAndUpdate(req.params.userId, req.body, { new: true}).populate('expenses').then(
//       (user) => {
//         console.log("user", user);
//         user.expenses.push(expense);
        
       
//         expense.save();
//         console.log("user2", user);
//         res.json({
//           status: 200,
//           user: user,
//         });

//         //Expense.findById(req.params.expenseId).then( (expense) => {
//         //User.findByIdAndUpdate((req.params.userId), {$push: {expenses: expense.id}}, {new: true})
//         //.then((newUser) => { res.json(newUser)
//       }
//     );
//   });
// });

// router.delete("/:expenseId/:ownerId", (req, res) => {

//     console.log("ownerId",req.params.ownerId)
//      console.log("expense",req.params.expenseId)
//      console.log("body",req.body)

//    Expense.findByIdAndDelete(req.params.expenseId).then((expense) => {
//      console.log("expense", expense)
//      User.findById((req.params.userId))
//      .then((user) => {
//        console.log("expense1", expense)
//        console.log("user",user)
//     //    user.save()
//        res.json({
//          status: 200,
//          user: user,
//        });
//      });
//    });
//  });

module.exports = router;
