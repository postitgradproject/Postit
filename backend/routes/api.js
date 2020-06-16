// Full Documentation - https://www.turbo360.co/docs
// const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
// const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
// const router = vertex.router()
const router = require('express').Router();
const user=require('../models/users');
const postit = require('../models/postits');



/*  This is a sample API route. */
/* This is user part */


router.get('/users/add',(req,res)=>{
	user.find()
	.then(users=>{
		res.json({
			confirmation:"successfull jfsgvjfj",
			data:users
		})
	})
	.catch(err=>{   //eger hata cıkarsa burayi basar
		res.json({
			confirmation:'fail',
			message:err,message
		})
	})
})
//burasi log in ekrani
var user_id;
var nickname;
var login_conf;

module.exports.user_id;
module.exports.nickname;



router.get('/deneme',(req,res)=>{
	user.find({})
	.then(users=> {
	
		res.json({
			confirmation: "GIRDI",
			data:users
		});
	
})
})


router.get('/signin',function(req,res, next){
	const db = req.app.locals.db;
	
	// console.log("Whatusp" + req.query.username);
	const query=req.query;
	//console.log(req.query);
	console.log("The username is , password is ," + query.username, query.password);
	user.findOne({username:query.username})
	.then(person=>{
		user_id = person.id;
		console.log("Attained user id is", user_id);
		console.log("Person is" + person);
		// res.json({
		// 	data:person
		// })
	}).catch(err=> {
		login_conf = "FAIL";
	})
	
	user.find(query).select("username")
.then(name=>{
	nickname=name;
})
	console.log("This is the nickname +>" + nickname);
	user.find(query)
	.then(person=>{
		res.json({
			confirmation:'entered successfully',
			data:person

		})
	})
	.catch(err=>{
		res.json({
			confirmation:'fail',
			message:err
		})
	})

/*
function SignIn(req,res){
var query=user.where({username:req.params.username});//burasi calistiktan sonra virgulle sifre eklenicek
query.find(function(err,person){
	if(err){
		return res.send('wrong username or password')
	}
	else{
		res.json('person')
	}
})
}


router.get('/signin',function(req,res){
	SignIn(req,res);
})
*/

//daha ileride buraya bak
/*
router.get('/signin',function(req,res){

var user_name=req.params.username;
var pass_word=req.body.password;

user.find({username:user_name})
.then(person=>{
	res.json({
		confirmation:'entered successfully',
		data:person
	})
})
.catch(err=>{
	res.json({
		confirmation:'fail',
		message:err
	})
})*/
/*
user.findOne({username:'sinan97'},function(err,user){
	if(err){
		console.log(err);
		return res.status(500).send();
	}
	if(!user){
		return res.status(404).send;
	}
	return res.status(200).send
})*/
})




/*This is postit part*/
//burasi collectiondaki dataları ceker 
//bir obje tanımlıyıp onu collection objesi gibi düşünüp onun üstünden
//queyleri yaratıcaz

router.post('/postits', (req,res) => {
	//var postid;
	var myData = new postit(req.body);
	console.log("DATA: ", myData);
	myData.save().then(postits => {
		res.json({
			confirmation: "We fucking did it",
			data:postits
		})
	})
	//postit.create(myData);
	//req.body.owner = user_id;
	
	//console.log("This is the req body for postit", req.body);
	//postit.create(req.body)
	//postit.save(req.body)
	/*
	.then(postits => {
		postid = postits._id;
		user.update({
			_id:user_id
		}, 
		{
			$push:{postit:postid}
		}
		)
	})
*/
})



router.get('/postits',(req,res)=>{  //re:request res:responce
postit.find()
.then(postits=>{ //normal sartlarda burayi basar
	res.json({
		confirmation:'successfull',
		data:postits
	})
})

.catch(err=>{   //eger hata cıkarsa burayi basar
	res.json({
		confirmation:'fail',
		message:err,message
	})
})
})




const note=require('../models/notes')

router.get('/notes',(req,res)=>{  //re:request res:responce
	note.find()
	.then(notes=>{ //normal sartlarda burayi basar
		res.json({
			confirmation:'successfull',
			data:notes
		})
	})
	
	.catch(err=>{   //eger hata cıkarsa burayi basar
		res.json({
			confirmation:'fail',
			message:err,message
		})
	})
	})

router.post('/user',(req,res)=>{
	// user.create(req.body) //this is create a document 
	console.log(req.body)
	var data = new user(req.body);
	data.save()
	
    .then(users=>{
		res.json({
			confirmation:'success',
			data:users
		})
	})
	.catch(err=>{
		res.json({
			confirmation:'fail',
			message:err.message
		
		})
	})
})

router.post('/notes',(req,res)=>{


	note.create(req.body) //this is create a document 
    .then(notes=>{
		res.json({
			confirmation:'success',
			data:notes
		})
	})
	.catch(err=>{
		res.json({
			confirmation:'fail',
			message:err.message
		
		})
	})
})

//Pazartesi günü buraya bak
router.post('/usernotes',function(req,res){
var note_id;
note.create(req.body)
.then(notes=>{
	note_id=notes._id
	user.update({_id:user_id},{$push:{notes:note_id},done})
})


})

const theuser = require('../models/users');

router.get('/login', function(req, res) {
	theuser.find()
	.then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
})
module.exports = router






router.get('/allpostits', (req,res) => {

	postit.find({ })
	.then((data) => {
		console.log('Data is', data);
		res.json(data);
	})
	.catch((error) => {
		console.log('error: ', error);
	})
})



