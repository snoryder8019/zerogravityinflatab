const router = require('express').Router();
const nodemailer = require('nodemailer');
//router.use('./main', require('./main'))


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
          //to:'zgravityinflatables@gmail.com',
          subject:req.body.fname+' wants the '+req.body.invType+" on: "+req.body.date,
          text: req.body.message,
          html:'<h1>Customer Submission from: </h1><br><h2>'+req.body.fname+'</h2><br><h2>from email: </h2>'+req.body.email+'<br><h2>'+req.body.message+'</h2>'
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