var express = require('express')
let app = express();

const bodyParser = require ('body-parser');
const ejs = require('ejs');
const path = require('path')
const session = require('express-session')
var path_name = path.join(__dirname,'public');
var express_static = express.static(path_name)
app.set('view engine', 'ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))
app.use(express.static(__dirname + '/public'));

let index = require('./routers/index')
let subject = require('./routers/subject')
let teacher = require('./routers/teachers')
let student = require('./routers/student')

app.use(session({
  secret: 'hacktiv',
  resave: false,
  saveUninitialized: true,
  cookie: {}
}))



app.use('/',index)


app.use((req,res,next) =>{
  if(req.session.role){
    next()
  }else {
    res.sendStatus(403)
  }
})
app.use('/teacher',teacher)
app.use('/subject',subject)
app.use('/student',student)



app.listen(3000)
