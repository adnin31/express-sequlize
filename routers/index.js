const express = require('express');
let router = express.Router();
const bodyParser = require ('body-parser');
const model = require("../models")

router.get('/',function(req,res){
  res.send('Welcome')
})

module.exports = router;
