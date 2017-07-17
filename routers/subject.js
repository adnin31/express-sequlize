const express = require('express')
let router = express.Router();
const bodyParser = require('body-parser')
const model = require('../models')
const letterScore = require('../helper/letterScore')

router.get('/',function(req,res){
  model.Subject.findAll({
    include : [model.Teachers],
    order:[['subject_name' ,'ASC']]
  }).then(subject =>{
    res.render('subject',{dataSubject : subject, title: 'Subject List',session : req.session.role})
  }).catch(function(){console.log(err);})
})
router.post('/',function(req,res){
  model.Subject.create({
    subject_name :req.body.name,
    createdAt : new Date(),
    updatedAt : new Date()
  })
  res.redirect('/subject')
})

router.get('/delete/:id',function(req,res){
  model.Subject.destroy({where :{ id : req.params.id} })
  res.redirect('/subject')
})

router.get('/:id/enrollStudent',function (req,res) {
  model.StudentSubject.findAll({
    where :{SubjectId : req.params.id},
    include:[{all:true}],
    order:[['Student','first_name','ASC']]
  }).then(studentSubject =>{
    let scoreLetter = letterScore(studentSubject);
    res.render('enrollStudent',{dataStudentSubject : studentSubject ,dataLetter: scoreLetter,session : req.session.role})
  })
})


router.get('/:id/giveScore',function (req,res){
  model.StudentSubject.findAll({
    where :{id : req.params.id},
    include:[{all:true}]
  }).then(studentSubject =>{
    res.render('givescore',{dataStudentSubject : studentSubject,session : req.session.role})
  })
})

router.post('/:id/giveScore',function (req,res){
  model.StudentSubject.update({
    Score :req.body.score,
    createdAt : new Date(),
    updatedAt : new Date()
  },{where : {id: req.params.id}}).then(()=>{res.redirect(`/subject`)})
})
router.get('/logout',function(req,res){
  req.session.destroy(function(err) {
     res.redirect('/')
  })
})
module.exports = router;
