const express = require('express')
const { model } = require('mongoose')
const router = express.Router()
const User = require('../models/user')


router.post("/",(req,res) =>{
    User.create(req.body)
    // might need fart arrow
    .then(res.json({
        status:201,
        user:User
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

model.exports = router

