const express = require("express");
const { model } = require("mongoose");
const Expense = require("../models/expense");
const router = express.Router();
const User = require("../models/user");

router.post("/", (req, res) => {
  console.log(req.body);
  User.find({ userName: req.body.userName }).then((users) => {
    if (users.length !== 0) {
      res.status(400).json({
        message: `user with username ${req.body.userName} already exists`,
      });
    } else {
      User.create(req.body).then((user) =>
        res.json({
          status: 201,
          user: user,
        })
      );
    }
  });
});

router.get("/", (req, res) => {
  User.find()
    .populate("expenses")
    .then((user) =>
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
  User.findById(req.params.id)
    .populate("expenses")
    .then((user) =>
      res.json({
        status: 200,
        user: user,
      })
    );
});

router.put("/:expenseId/:userId", (req, res) => {
  Expense.findByIdAndUpdate(req.params.expenseId, req.body, { new: true }).then(
    (expense) => {
      console.log("expense", expense);
      User.findByIdAndUpdate(req.params.userId, req.body, { new: true })
        .populate("expenses")
        .then((user) => {
          console.log("user", user);

          expense.save();
          console.log("user2", user);
          res.json({
            status: 200,
            user: user,
          });
        });
    }
  );
});

module.exports = router;
