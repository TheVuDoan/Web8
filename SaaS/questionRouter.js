const express = require('express');
const Router = express.Router();
const fileController = require('./fileController.js');
const filein = 'question.txt';

Router.get('/:id', (req, res) => {
  listQuestion = fileController.getElements();
  for (i=0;i<listQuestion.length;i++) {
    if (req.params.id == listQuestion[i].id)
    question = JSON.stringify(listQuestion[i].name);
  }
  res.render('getQuestion',
  {
    question : question
  });
});

module.exports = Router;
