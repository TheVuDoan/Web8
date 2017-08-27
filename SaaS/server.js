const express = require('express');

let app = express();

app.get('/',(req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/style.css',(req, res) => {
  res.sendFile(__dirname + '/public/style.css');
});

//app.use(express.static(__dirname + '/public'));

app.get('/about',(req, res) => {
  res.send('<h1>Vu</h1>');
});

app.get('/testreset',(req, res) => {
  res.send('reset');
});

app.listen(6969, () => {
  console.log('server is up');
});
