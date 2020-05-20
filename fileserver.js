var db = require('./sqldata');
var express    = require('express');
var app        = express();
var router = express.Router();
var bodyParser= require('body-parser');


app.get('/',function(req,res){
    res.sendFile(__dirname+'/catalog.html'); //The UI
});
app.use(bodyParser.urlencoded({ extended: true }));

//Search Teacher by First Name
app.post('/SearchTeacherByFirst', function(req,res)  {
db.query("SELECT * FROM Student_Catalog.teachers WHERE firstname = '"+ req.body.Tfirst_name +"'; ", function (err, data, fields) {
    if (err) throw err;
    res.send(data);
        });
    });

//Search Teacher by Last Name
app.post('/SearchTeacherByLast', function(req,res)  {
    db.query("SELECT * FROM Student_Catalog.teachers WHERE lastname = '"+ req.body.Tlast_name +"'; ", function (err, data, fields) {
        if (err) throw err;
        res.send(data);
        
        });
    });

//Search Student by First Name
app.post('/SearchStudentByFirst', function(req,res)  {
    db.query("SELECT * FROM Student.body._Catalog.students WHERE firstname = '"+ req.body.Sfirst_name +"'; ", function (err, data, fields) {
            if (err) throw err;
            res.send(data);
            
            });
        });

//Search Teacher by Last Name
app.post('/SearchStudentByLast', function(req,res)  {
    db.query("SELECT * FROM Student_Catalog.students WHERE lastname = '"+ req.body.Slast_name +"'; ", function (err, data, fields) {
            if (err) throw err;
            res.send(data);
            
            });
        });

app.post('/PrintAllStudents', function(req,res)  {
            db.query("SELECT * FROM Student_Catalog.students", function (err, data, fields) {
                    if (err) throw err;
                    res.send(data);
                    });
                });

 app.post('/PrintAllTeachers', function(req,res)  {
                    db.query("SELECT * FROM Student_Catalog.teachers", function (err, data, fields) {
                            if (err) throw err;
                            res.send(data);
                            });
                        });

app.use('/', router);
app.listen(8080);
console.log('Magic happens on port ' + 8080);