var express = require('express')
let app = express();
const bodyParser = require ('body-parser');
const ejs = require('ejs');
app.set('view engine', 'ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

let index = require('./routers/index')
app.use('/',index)

let subject = require('./routers/subject')
app.use('/subject',subject)

let teacher = require('./routers/teachers')
app.use('/teacher',teacher)

let student = require('./routers/student')
app.use('/student',student)


app.listen(3000)
