const express = require("express")
const mongoose = require('mongoose')
const cors=require("cors")
const EmployeeModel=require('./models/Employee')

const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://gokulprakash1109:NzNmyDtk24ESrRy7@cluster0.rlx96.mongodb.net/votingsystem")

app.post("/login",(req,res)=>{
    const{email,password}=req.body;
    EmployeeModel.findOne({email:email})
    .then(user =>{
        if(user){
        if(user.password=== password){
res.json("success")
         } else {
                res.json("the password is incorrect")
         }
         } else {
            res.json(" No record existed")
         }
    })
})

app.post('/register',(req,res)=>{
    EmployeeModel.create(req.body)
    .then(employee=>res.json(employee))
    .catch(err=>res.json(err))
})

app.listen(3001,()=>{

    console.log("server is running")
})