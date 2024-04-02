const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    Firstname:{type:String,required:true},
    Lastname:{type:String,required:true},
    Email:{type:String,required:true,unique:true},
    Mob:{type:Number,required:true},
    Landmark:{type:String,required:true},
    Pin:{type:Number,required:true},
    Password:{type:String,required:true},
    seCkey:{type:String,required:true},
    tags:{type:Array},
    

},{timestamps:true}) 

module.exports=mongoose.model("Binoybatch2024",userSchema)

