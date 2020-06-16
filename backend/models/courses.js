const mongoose=require('mongoose')

const courseschema=new mongoose.Schema({
    name:{type:String,trim:true,default:''},
    instructorid:{type:mongoose.Schema.Types.ObjectId,ref:'USER'},
    studentsid:[{type:mongoose.Schema.Types.ObjectId,ref:'USER'}],
    assistantsid:[{type:mongoose.Schema.Types.ObjectId,ref:'USER'}],
    lecturesid:{type:mongoose.Schema.Types.ObjectId,ref:'LECTURE'}


})
module.exports=mongoose.model('COURSE',courseschema)