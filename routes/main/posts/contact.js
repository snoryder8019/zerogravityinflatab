//CONTACT FORM POST
const express = require('express');
const app = express();
var router = express.Router();

router.post('/sendData', (req,res) => {
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
  
  module.exports = router;