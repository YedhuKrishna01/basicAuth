import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import EmployeeModel from './models/Employee.js'

const app = express()
const PORT = 3000

app.use(express.json());
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/employee')

app.post('/register',(req, res)=>{
    EmployeeModel.create(req.body)
    .then(employee => res.json(employee))
    .catch(err=> res.json(err))
})

app.post('/login',(req, res)=>{
    const {email,password} = req.body;
    EmployeeModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password===password){
                res.json("Successfully logged in")
            }else{
                res.json("Password incorrect")
            }
        }else{
            res.json("user doesn't exists")
        }
    })
})

app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`)
})