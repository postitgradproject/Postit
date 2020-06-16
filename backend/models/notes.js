const mongoose=require('mongoose')

const noteschema=new mongoose.Schema({
    description:{type:String,default:''},
    type:{type:Number,default:0}
})

module.exports=mongoose.model('NOTES', noteschema)