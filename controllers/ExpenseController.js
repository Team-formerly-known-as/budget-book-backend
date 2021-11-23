const express = require("express")
const router = express.Router()
const expenseSchema = require('../models/expense')



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

router.put('/:id', (req, res) => {
    User.findByIdAndUpdate((req.params.id), req.body, {new: true})
    .then((user) => res.json({
        status: 200,
        user: user
    }))
})

module.exports = router