const express = require('express')
let router = express.Router();
const bodyParser = require('body-parser')
const model = require('../models')

router.get('/',function(req,res){
  model.Subject.findAll({
    include : [model.Teachers]
  }).then(subject =>{
    res.render('subject',{dataSubject : subject})
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

module.exports = router;
