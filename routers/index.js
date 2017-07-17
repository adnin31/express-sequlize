const express = require('express');
let router = express.Router();
const bodyParser = require ('body-parser');
const model = require("../models")

router.get('/',function(req,res){
  res.render('index',{title :'KRS online', session : req.session.role})
})

router.get('/login',function(req,res){
  res.render('login',{title :'Login KRS Online'})
})
router.post('/login',function(req,res){
  model.User.findOne({where:{username:req.body.username, password : req.body.password}}).
  then(data=>{
    if(data){
      req.session.user = data.username,
      req.session.role = data.role
      res.redirect('/')

    }else {
      res.send('salah')
    }

  })
})

router.get('/logout',function(req,res){
  req.session.destroy(function(err) {
     res.redirect('/')
  })
})

module.exports = router;
