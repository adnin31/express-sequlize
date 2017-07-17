var express = require('express')
let app = express();

const bodyParser = require ('body-parser');
const ejs = require('ejs');
const path = require('path')
var path_name = path.join(__dirname,'public');
var express_static = express.static(path_name)
app.set('view engine', 'ejs')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))
app.use(express.static(__dirname + '/public'));

let index = require('./routers/index')
app.use('/',index)

let subject = require('./routers/subject')
app.use('/subject',subject)

let teacher = require('./routers/teachers')
app.use('/teacher',teacher)

let student = require('./routers/student')
app.use('/student',student)


app.listen(3000)
