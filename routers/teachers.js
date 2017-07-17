const express = require('express')
let router = express.Router();
const bodyParser = require('body-parser')
const model = require('../models')

router.get('/',function(req,res){

  model.Teachers.findAll({
    include :[model.Subject],
    order:[['first_name' ,'ASC']]
  }).then(teacher =>{
      res.render('teacher',{dataTeacher : teacher, title : 'Teachers List',session : req.session.role})
  })
})

router.get('/add',function(req,res){
  model.Subject.findAll().then(subject =>{
    res.render('addTeacher',{dataSubject : subject})
  })
})

router.post('/add',function(req,res){

    model.Teachers.create({
      first_name : req.body.first_name,
      last_name : req.body.last_name,
      email :req.body.email,
      SubjectId : req.body.subjectList,
      createdAt : new Date(),
      updatedAt : new Date()
    }).then(()=>res.redirect('/teacher'))
})


router.get('/edit/:id',function(req,res){
    model.Teachers.findAll({
      include :[model.Subject],
      where : {id : req.params.id}
    }).then(teacher =>{
      model.Subject.findAll().then(subject =>{
          res.render('editTeacher',{ editTeacher : teacher , dataSubject :subject  })
      })

    }).catch(err=>{console.log(err);})
})
router.post('/edit/:id',function(req,res){
  model.Teachers.update({
    first_name : req.body.first_name,
    las_name :req.body.last_name,
    email : req.body.email,
    SubjectId : req.body.subject_id,
    createdAt : new Date(),
    updatedAt : new Date()
  },{where : {id: req.body.id}}).then(()=>{res.redirect('/teacher')})
})

router.get('/delete/:id',function (req,res) {
  model.Teachers.destroy({
    where :{id : req.params.id}
  }).then(()=>res.redirect('/teacher'))
})
router.get('/logout',function(req,res){
  req.session.destroy(function(err) {
     res.redirect('/')
  })
})

module.exports = router;
