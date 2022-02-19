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

app.post('/sendData', (req,res) => {
  console.log("posts initiated")
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth:{
       //type:'OAuth2',
        user: process.env.EMAILNAME,
        pass:process.env.EMAILPASS,
        // clientId: cId,
        // clientSecret:cSec,
        // refreshToken:rToke,
        // accessToken:accessToken
      }
})
    let mailOptions = {
        from:'Your Zero Gravity WebApp!! from '+ req.body.fname + ' from email:'+ req.body.email,
        to:'w2marketing.scott@gmail.com',
        subject:'A Customer Fiiled out the Contact Form',
        text: req.body.message,
        html:'<h1>Customer Submission: </h1><br><h2>'+req.body.message+'</h2>'
    };
    transporter.sendMail(mailOptions,function(error,info){
        if(error){
            console.log("transporter "+error);

        }
        else{
        console.log('email sent'+ info.response)
        }
    })
    res.render('pages/success')
});



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
