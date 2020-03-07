var express = require('express');
var http = require('http');
var mysql = require('mysql');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
var dataFormat = require('dateformat');
var now = new Date();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));

// app.use('/js', express.static(__dirname + ));


const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"nodeWithMysql"
});

con.connect();

const siteTitle = "simple title";
const baseURL = "http://localhost:4000/";

app.get("/", function(req,res){
    res.render("pages/index", {

        title_index: "What we speak?",
        content_index:"Lorem ipsum dolor sit amet",

         footer_index:"My footer goes here"
        });


    });
var server  = app.listen(4000, function(){
    console.log("server 4000 started");
})