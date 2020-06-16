const mongoose=require('mongoose')

const documentschema=new mongoose.Schema({
    path:{type:String,trim:true,default:''},
    name:{type:String,trim:true,default:''}

})
module.exports=mongoose.model('DOCUMENT',documentschema)