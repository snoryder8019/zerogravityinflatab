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
//const contactSent = require('../pages/partials/contact.ejs');
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



app.get('/trial',(req, res) => {
  res.render('pages/trial')
  fs.appendFile('./views/partials/logs.ejs','<br>'+ showTime+' Index Hit '+req.ip+'\r\n', function (err) {
      if(err) {throw err};
      console.log(showTime+'trial route hit & data logged successfully'+req.ip);

  });
});

//HOMEPAGE ROUTE
app.get('/',(req, res) => {
  res.render('pages/index')
  fs.appendFile('./views/partials/logs.ejs','<br>'+ showTime+' Index Hit '+req.ip+'\r\n', function (err) {
      if(err) {throw err};
      console.log(showTime+'Index route hit & data logged successfully'+req.ip);

  });
});
//frontend log checking
app.get('/BranLogs',(req, res) => {
  res.render('pages/logs')
  fs.appendFile('./views/partials/logs.ejs','<br>'+ showTime+' BranLogs Hit '+req.ip+'\r\n', function (err) {
      if(err) {throw err};
      console.log(showTime+'ricklogs route hit & data logged successfully'+req.ip);

  });
});


//contact form
app.get('/contact',(req, res) => {
  fs.appendFile('./views/partials/logs.ejs','<br>'+ showTime+' Contact Form Hit '+req.ip, function (err) {
      if(err) {throw err};
      console.log(showTime+' Contact route hit & data logged successfully'+req.ip);

  });
    res.render('pages/contact')
});
//CONTACT FORM POST
app.post('/sendData', (req,res) => {
  fs.appendFile('./views/partials/logs.ejs','<br>'+ showTime+' Contact ****POST ACTION*** Check clent/saved/signups.html '+req.ip, function (err) {
      if(err) {throw err};
      console.log('**New Contact Saved** \r\n'+req.body.fname + ' '+req.body.lname);
    });
  fs.appendFile('./client/saved/logs.ejs', '\r\n'+'  New Submission:\r\n'+Date()+'\r\n'+req.ip+'\r\n'+req.body.fname+'\r\n'+req.body.lname+'\r\n'+req.body.email+'\r\n This lead is interested in '+req.body.userComment, function (err) {
      if(err) {throw err};
          res.render('pages/contact_thankyou');
  });
});
app.post('/postBlog', (req,res) => {
  fs.appendFile('./views/partials/blogs.ejs','file made'+ req.body.title,
function (err){
  if(err){throw err};
  console.log('blog Saved!!')
})
  // fs.appendFile('./views/partials/blogs.ejs','<br>'+ showTime+' Contact ****POST ACTION*** Check clent/saved/signups.html '+req.ip,
  //  function (err) {
  //     if(err) {throw err};
  //     console.log('**New Blog Saved** \r\n'+req.body.title + ' '+req.body.imgSelect);
  //   });
  // fs.appendFile('./client/saved/blogs.ejs', '\r\n'+'  New Submission:\r\n'+Date()+'\r\n'+req.ip+'\r\n'+req.body.fname+'\r\n'+req.body.lname+'\r\n'+req.body.email+'\r\n This lead is interested in '+req.body.userComment,
  //  function (err) {
  //     if(err) {throw err};
  //         res.render('pages/contact_thankyou');
  //});
});
//SET EJS TEMPLATE
  app.set('view engine','ejs');
  //SET SERVER
  console.log('static and listening on:(portEnv) started at: '+Date());
  console.log('find app @ www.zerogravityinflatables.com');
app.listen(port);
