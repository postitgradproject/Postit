const mongoose=require('mongoose')

const surveyschema=new mongoose.Schema({
name:{type:String,trim:true,default:''},
author:{type:String,trim:true,default:''},
content:{type:String,trim:true,default:''},
participants:[{user:{type:mongoose.Schema.Types.ObjectId,ref:'USER'},//check again
answer:{type:String,trim:true,default:''}}]
})

module.exports=mongoose.model('SURVEY', surveyschema)