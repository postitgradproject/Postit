const mongoose=require('mongoose')
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const config = require('config');

const userschema=new mongoose.Schema({
_id: mongoose.Schema.Types.ObjectId,
username:{type:String,trim:true,default:'',unique:true,index:true,required:true}, // trim 'Sinan' ' Sinan' 'Sinan ' same thing 
firstname:{type:String,trim:true,default:'',required:true},
lastname:{type:String,trim:true,default:'',required:true},
password:{type:String,trim:true,default:'',required:true},
accounttype:{type:String,trim:true,default:'',required:true},
mail:{type:String,index:{unique:true,dropDups:true}},//unique yapamadım buraya tekrar dön
postits:[{type:mongoose.Schema.Types.ObjectId,ref:'POST-IT'}],//look again
notes:[{type:mongoose.Schema.Types.ObjectId,ref:'NOTES'}]//look again

})

// UserSchema.methods.generateAuthToken = function() { 
//     const token = jwt.sign({ _id: this._id}, config.get('myprivatekey')); //get the private key from the config file -> environment variable
//     return token;
//   }



module.exports=mongoose.model('USER', userschema, 'users');