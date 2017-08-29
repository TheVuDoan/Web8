const express = require('express');
const fileController = require('./fileController.js');
const filename = 'test.txt';
var content = fileController.readFile(filename);
var data = "<html> <head>" +
    "<meta charset='utf-8'>" +
    "<title>My File</title>" +
    "<link rel='stylesheet' type='text/css' href='server_style.css'>" +
  "</head>" +
  " <body>" +
    "<nav class='menu'>" +
      "<a href='/'><span>Homepage</span></a>" +
      "<a href='about'><span>About me</span></a>" +
      "<a href='myfile'><span>My File</span></a>" +
    "</nav>" +

    "<p>Check out my file!</p>" +
    `${content}` + "</body>" + "</html>";

let app = express();

app.get('/',(req, res) => {
  res.sendFile(__dirname + '/public/homepage.html');
});

app.get('/about',(req, res) => {
  res.sendFile(__dirname + '/public/about.html');
});

app.get('/myfile',(req, res) => {
  res.send(data);
});

app.use(express.static(__dirname + '/public'));

app.listen(6969, () => {
  console.log('server is up');
});
