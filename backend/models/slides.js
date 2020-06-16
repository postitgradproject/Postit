const mongoose=require('mongoose')
const slideschema=new mongoose.Schema({
    slide:{type:String,trim:true,default:''},
    postits:{type:Array}
})
module.exports=mongoose.model('SLIDES',slideschema)