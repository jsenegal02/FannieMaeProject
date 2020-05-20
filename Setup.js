var mysql = require('mysql');
var http = require('http');
var url = require('url');
var fs = require('fs');
var express   =    require("express");
var app       =    express();


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

con.query("DROP DATABASE IF EXISTS Student_Catalog", function (err, result) {
  if (err) throw err;
  console.log("Database Deleted!");
});

con.query("CREATE DATABASE Student_Catalog", function (err, result) {
    if (err) throw err;
    console.log("Database Created!");
});


//Dropping and Creating the Catalog Database



//Drop table to start over
var sql = "DROP TABLE IF EXISTS Student_Catalog.teachers";
con.query(sql, function (err, result) {
  if (err) throw err;
  //console.log("table deleted");
});


//Create a table named "teachers":
var sql = "CREATE TABLE Student_Catalog.teachers (teacherid int(11),firstname VARCHAR(255), lastname VARCHAR(255), yearsin int(11))";
con.query(sql, function (err, result) {
  if (err) throw err;
  //console.log("table created");
});

//Insert data into table named "teachers":
var sql =
 "INSERT INTO Student_Catalog.teachers (teacherid,firstname,lastname,yearsin) VALUES (1,'Johnny', 'Thompson',5),(2,'Justin', 'Hughes',1),(3,'Miles', 'Connor',4)";
con.query(sql, function (err, result) {
  if (err) throw err;
  //console.log("1 log created");
});

//Create a table named "students":
var sql = "CREATE TABLE Student_Catalog.students (studentid int(11),firstname VARCHAR(255), lastname VARCHAR(255), classification VARCHAR(255),major VARCHAR(255))";
con.query(sql, function (err, result) {
  if (err) throw err;
  //console.log("table created");
});

//Insert data into table named "students":
var sql =
 "INSERT INTO Student_Catalog.students (studentid,firstname,lastname,classification,major) VALUES (1,'John', 'Donald','Freshman', 'Undecided'),(2,'George','Smith','Junior','Music'),(3,'Miles','Connor','Senior','Math')";
con.query(sql, function (err, result) {
  if (err) throw err;
  //console.log("1 log created");
});



 /*
http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080) ;
console.log("Listening....")
*/


con.end((err) => {
  // The connection is terminated gracefully
  // Ensures all remaining queries are executed
  // Then sends a quit packet to the MySQL server.
});