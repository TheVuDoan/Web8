const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const homeRouter = require('./homeRouter');
const askRouter = require('./askRouter');
const apiRouter = require('./apiRouter');
const questionRouter = require('./questionRouter');
const fileController = require('./fileController.js');


let app = express();

app.use(bodyParser.urlencoded({ extend : true }));
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/server_style.css',(req, res) => {
  res.sendFile(__dirname + '/public/server_style.css');
});

app.use('/', homeRouter);
app.use('/ask', askRouter);
app.use('/api', apiRouter);
app.use('/question', questionRouter);

app.use(express.static(__dirname + '/public'));

mongoose.connect('mongodb://admin:admin@ds137054.mlab.com:37054/web8',(err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connect success');
  }
});

app.listen(6969, () => {
  console.log('server is up');
});
