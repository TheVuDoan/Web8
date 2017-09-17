const express = require('express');
const Router = express.Router();
const fileController = require('./fileController.js');
const filein = 'question.txt';
const filename = 'question.txt';

Router.get('/', (req, res) => {
  let listQuestion = fileController.getElements();
  data = listQuestion[Math.floor(Math.random() * listQuestion.length)];
  question = JSON.stringify(data.name);
  res.render('home',
  {
    question : question,
    questionView : "class='active'",
    link : `/api/question/${data.id}`
  });
});

Router.get('/:id', (req, res) => {
  listQuestion = fileController.getElements();
  let yesNum,noNum,question;
  for (i=0;i<listQuestion.length;i++) {
    if (req.params.id == listQuestion[i].id) {
      question = JSON.stringify(listQuestion[i].name);
      yesNum = listQuestion[i].yes;
      noNum = listQuestion[i].no;
    }
  }
  res.render('getQuestion',
  {
    question : question,
    questionView : "class='active'",  
    yesNum : yesNum,
    noNum : noNum
  });
});

module.exports = Router;
