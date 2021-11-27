const Expense = require("../models/expense");
const User = require("../models/user");

async function addUser(userName, income, remainder){
  let newUser =  await User.create({
    userName: userName,
    income: income,
    remainder: remainder,
  })
  console.log("successfully created ",newUser.userName);
  return newUser
};

async function addExpense(detail, amount, dueDate,userId){
  let newExpense =  await Expense.create({
    detail: detail,
    amount: amount,
    dueDate: dueDate,
    users:userId
  })
  console.log("successfully created ",newExpense.detail);
  return newExpense
};
async function addUsers(){
  User.deleteMany({}).then(() =>{
    Expense.deleteMany({}).then(() =>{
      addUser("larry", 150000, 150000).then(async user => {
        const e1 = await Promise.resolve(addExpense("wifi",50,"12-25-2021",user._id))
        const e2 = await Promise.resolve(addExpense("heat",600,"12-25-2021",user._id)) 
        const e3 = await Promise.resolve(addExpense("car insurance",400,"12-25-2021",user._id)) 
        const e4 = await Promise.resolve(addExpense("groceries",200,"12-25-2021",user._id)) 
        user.expenses.push(e1,e2,e3,e4)
        user.save()
       })
       addUser("Damon", 1500, 1500).then(async user => {
         const e1 = await Promise.resolve(addExpense("car",5000,"12-25-2021",user._id))
         const e2 = await Promise.resolve(addExpense("take out",60000,"12-25-2021",user._id)) 
         const e3 = await Promise.resolve(addExpense("bicycle insurance",40000,"12-25-2021",user._id)) 
         const e4 = await Promise.resolve(addExpense("dogs",20000,"12-25-2021",user._id)) 
         user.expenses.push(e1,e2,e3,e4)
         user.save()
        })
        addUser("Jules", 15000, 15000).then(async user => {
         const e1 = await Promise.resolve(addExpense("cat",654,"12-25-2021",user._id))
         const e2 = await Promise.resolve(addExpense("internet",60000,"12-25-2021",user._id)) 
         const e3 = await Promise.resolve(addExpense("groceries",40000,"12-25-2021",user._id)) 
         const e4 = await Promise.resolve(addExpense("bus",20000,"12-25-2021",user._id)) 
         user.expenses.push(e1,e2,e3,e4)
         user.save()
        })
        addUser("Edgar", 15, -5).then(async user => {
         const e1 = await Promise.resolve(addExpense("cab",20,"12-25-2021",user._id))
         user.expenses.push(e1)
         user.save()
        })
    })

  })
  
}

addUsers()
