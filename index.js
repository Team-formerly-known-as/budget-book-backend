require("dotenv").config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT

const UserController = require('./controllers/UserControllers')
const ExpenseController = require('./controllers/ExpenseController')

const User = require ('./models/user')
const Expense = require('./models/expense')

app.use(cors())
app.use(morgan('combined'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())


app.get('/', function(req,res){
    res.send("hello")
})

app.use('/user', UserController)
app.use('/expense', ExpenseController)


// app.listen(PORT, () =>{
//     console.log(`listening in on port: ${PORT}`)
// })

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});

