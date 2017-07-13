const express = require('express');
let router = express.Router();
const bodyParser = require ('body-parser');
const model = require("../models")

router.get('/',function(req,res){
  model.Student.findAll().then(student =>{
    res.render('student',{dataStudent : student})
    })
})

router.get('/add',function(req,res){
  res.render('addStudent')
})

router.post('/add',function(req,res){
  model.Student.create({
    first_name : req.body.first_name,
    las_name : req.body.last_name,
    email : req.body.email,
    createdAt : new Date(),
    updatedAt : new Date()
  }).then(()=>{res.redirect('/student')})
})

router.get('/delete/:id',function(req,res){
  model.Student.destroy({where :{ id : req.params.id} })
  res.redirect('/student')
})

router.get('/edit/:id',function(req,res){
  model.Student.findAll({
  where : { id : req.params.id }
  }).then(student =>{
    console.log(student);
    res.render('editStudent',{editStudent : student})
  }).catch(function(){console.log(err);})
})

router.post('/edit/:id',function(req , res){
  model.Student.update({
    first_name : req.body.first_name,
    las_name :req.body.last_name,
    email : req.body.email,
    createdAt : new Date(),
    updatedAt : new Date()
  },{where : {id: req.body.id}}).then(()=>{res.redirect('/student')})



})



module.exports = router;
