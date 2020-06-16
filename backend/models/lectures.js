const mongoose=require('mongoose')
const lectureschema=new mongoose.Schema({
    name:{type:String,trim:true,default:''},
    documents:[{type:mongoose.Schema.Types.ObjectId,ref:'DOCUMENT'}]//check array 
})
module.exports=mongoose.model('LECTURE',lectureschema)