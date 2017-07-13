const express = require('express')
let router = express.Router();
const bodyParser = require('body-parser')
const model = require('../models')

router.get('/',function(req,res){
  model.Teachers.findAll().then(teacher =>{
    res.render('teacher',{dataTeacher : teacher})
  }).catch(function(){console.log(err)})
})


module.exports = router;
