const express = require('express');
let router = express.Router();
const bodyParser = require ('body-parser');
const model = require("../models")
const validator = require('validator')

router.get('/',function(req,res){
  model.Student.findAll({
      order:[['first_name' ,'ASC']]
  }).then(student =>{
    res.render('student',{dataStudent : student})
    })
})

router.get('/add',function(req,res){
  res.render('addStudent')
})

router.post('/add',function(req,res){

if (validator.isEmail(req.body.email)) {
  model.Student.create({
    first_name : req.body.first_name,
    las_name : req.body.last_name,
    email : req.body.email,
    createdAt : new Date(),
    updatedAt : new Date()
  }).then(()=>{res.redirect('/student')})
}else {
  res.send('maaf email yang anda masukan salah')
}

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
if(validator.isEmail(req.body.email)){
  model.Student.update({
    first_name : req.body.first_name,
    las_name :req.body.last_name,
    email : req.body.email,
    createdAt : new Date(),
    updatedAt : new Date()
  },{where : {id: req.body.id}}).then(()=>{res.redirect('/student')})
}else {
  res.send('maaf email yang anda masukan salah')
}

})

router.get('/:id/addSubject',function (req,res){
  model.Student.findAll({
    where :{id:req.params.id}
  }).then(student=>{
    model.Subject.findAll().then(subject =>{
      res.render('addStudentSubject', {dataStudent : student ,dataSubject : subject})
    })
  })

})

router.post('/:id/addSubject',function (req,res){
    model.StudentSubject.create({
      StudentId: req.params.id,
      SubjectId: req.body.subjectList,
      createdAt : new Date(),
      updatedAt : new Date()
    }).then(()=>res.redirect('/student'))
})



module.exports = router;
