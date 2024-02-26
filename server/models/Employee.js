import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})

const EmployeeModel = mongoose.model("employees",EmployeeSchema);

export default EmployeeModel