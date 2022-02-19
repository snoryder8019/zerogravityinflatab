var signUpInit = [1,1,1,1,1];
const express =require('express');
const dotenv = require('dotenv').config();
const fs =require('fs');
const ejs = require('ejs');
const mongoose = require('mongoose');
var url = require('url');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT;
var http = require('http');
var nodemailer = require('nodemailer');
const date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let showTime = hours+':'+minutes;
//middle POST
app.use(express.urlencoded( {extended: true} ))
//middle static
app.use(express.static('public'));
app.use(express.static('views'));
app.use(express.static('css'));
app.use(express.static('jsFiles'));
app.use(express.static('partials'));
app.use(require('./routes'));
//HOMEPAGE ROUTE
app.get('/',(req, res) => {
  res.render('pages/index')
  fs.appendFile('./views/partials/logs.ejs','<br>'+ showTime+' Index Hit '+req.ip+'\r\n', function (err) {
      if(err) {throw err};
      console.log(showTime+'Index route hit & data logged successfully'+req.ip);
  });
});
app.get('/success',(req,res) => {
  res.render('success');
});
//SET EJS TEMPLATE
  app.set('view engine','ejs');
  //SET SERVER
  console.log('static and listening on:(portEnv) started at: '+Date());
  console.log('find app @ www.zerogravityinflatables.com');
app.listen(port);
