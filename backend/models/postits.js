const mongoose=require('mongoose')

const postitschema=new mongoose.Schema({
//owner:{type:mongoose.Schema.Types.ObjectId,ref:'USER'},
question:{type:String,default:''},
//replies:[{type:String,default:''}],
/*
value:{
    like:{type:Number,default:0},
    dislike:{type:Number,default:0},
    mlrate:{type:Number,default:0}
}
*/
})
module.exports=mongoose.model('POST-IT',postitschema, 'postits')