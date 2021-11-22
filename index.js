require("dotenv").config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT
const UserController = require('./controllers/UserControllers')
const BudgetController = require('./controllers/BudgetController')

const User = require ('./models/user.js')
const Budget = require('./models/budget')

app.use(cors())
app.use(morgan('combined'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())


app.get('/', function(req,res){
    res.send("hello")
})


app.listen(PORT, () =>{
    console.log(`listening in on port: ${PORT}`)
})