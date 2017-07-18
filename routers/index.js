const express = require('express');
let router = express.Router();
const bodyParser = require ('body-parser');
const model = require("../models")
const makeKey = require("../helper/key")

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
router.get('/signup',function(req,res) {
  console.log(makeKey());
  res.render('signup',{title : 'Signup Form'})
})
router.post('/signup',function(req,res) {
  model.User.create({
    username : req.body.username,
    password : req.body.password,
    role     : req.body.roleList,
    Key : "",
    createdAt: new Date(),
    updatedAt: new Date(),
  }).then(res.redirect('/'))
})

router.get('/logout',function(req,res){
  req.session.destroy(function(err) {
     res.redirect('/')
  })
})

module.exports = router;
