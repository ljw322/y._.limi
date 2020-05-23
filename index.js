var express = require('express');
var path = require('path')
var qs = require('querystring');
var mysql = require('mysql');
var http = require('http');
var cookieParser = require('cookie-parser');
var JSAlert = require("js-alert");
var async = require('async');
var count=0;

// const PORT = 8080;
const PORT = process.env.PORT||3000;

var app = express();

var server = http.createServer(app);
var io = require('socket.io').listen(server);

app.set('view engine', 'ejs');

app.use('/static', express.static(__dirname + '/'));

app.use(cookieParser());

app.get('/socket.js', function (req, res) { //라이브러리 보내줌
    res.sendFile(__dirname + '/node_modules/socket.io-client/dist/socket.io.js');
});

app.get('/push.js', function (req, res) { //라이브러리 보내줌
    res.sendFile(__dirname + '/node_modules/push.js/bin/push.js');
});

app.get('/', function (req, res) {
  ////////////////////////////쿠키설정/////////////////////////////////////
    res.sendFile(path.join(__dirname + '/public/index.html'));
    res.cookie('islogin','bar',{
          maxAge:0
    });
    res.cookie('id','foo',{
          maxAge:0
    });
});

////////////////////////////////////////////////////////////////

app.use(function(req,res){
    res.send(404,"Not Found");
} );

io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
    socket.on('req_call', function (msg) {
        io.emit('res_call', msg);
    });
});

/*app.listen(PORT, function () {
    console.log('SERVER ON!');
});*/

server.listen(PORT, function () {
    console.log("SERVER ON");
});
