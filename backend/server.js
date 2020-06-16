const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const uri = process.env.ATLAS_URI;
// const uri = process.env.URI

var url = "mongodb://localhost:27017/project";
mongoose.connect(url, { useNewUrlParser: false, useCreateIndex: true ,  useUnifiedTopology: true });


const connection = mongoose.connection;

connection.on('open', () => {
  console.log('Connected to mongodb server.');
  //console.log()
  connection.db.listCollections().toArray(function (err, users) {
    console.log(users);
   });
})


require('./models/users');

connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const usersRouter = require('./routes/routes_users');
const api = require('./routes/api');

const user=require('./models/users');
const postits = require('./models/postits');

// async function findUser(username) {
//   return await User.findOne({ username })
// }


app.use('', api);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});