const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const homeRouter = require('./homeRouter');
const askRouter = require('./askRouter');
const apiRouter = require('./apiRouter');
const questionRouter = require('./questionRouter');
const fileController = require('./fileController.js');
const filename = 'question.txt';

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

app.get('/about',(req, res) => {
  let htmlRender = fileController.readFile(__dirname + '/public/about.html')
  res.render('about',
  {
    htmlRender : htmlRender
  });
});

app.get('/myfile',(req, res) => {
  let fileRender = fileController.readFile(filename);
  res.render('myfile',
  {
    fileRender : fileRender
  });
});

//app.use(express.static(__dirname + '/public'));

app.listen(6969, () => {
  console.log('server is up');
});
