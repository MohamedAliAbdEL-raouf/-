const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name:String,
    phone:Number,
    code:Number,
    nationalId:Number,
    age:Number,
    q1:String,
    q2:String
});

const userModel = mongoose.model("user" , userSchema)
module.exports= userModel;

