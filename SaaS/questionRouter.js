const express = require('express');
const Router = express.Router();
const fileController = require('./fileController.js');
const filein = 'question.txt';
const filename = 'question.txt';

Router.get('/',(req, res) => {
  let listQuestion = fileController.getElements();
  let question = [];
  for (i=0;i<listQuestion.length;i++) {
    question[i] = JSON.stringify(listQuestion[i].name);
  }
  res.render('myfile',
  {
    question : question
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
    yesNum : yesNum,
    noNum : noNum
  });
});

module.exports = Router;
