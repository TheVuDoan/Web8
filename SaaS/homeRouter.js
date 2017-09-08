const express = require('express');
const Router = express.Router();
const fileController = require('./fileController.js');
const filein = 'question.txt';

Router.get('/', (req, res) => {
  let listQuestion = fileController.getElements();
  data = listQuestion[Math.floor(Math.random() * listQuestion.length)];
  question = JSON.stringify(data.name);
  res.render('home',
  {
    question : question,
    link : `/api/question/${data.id}`
  });
});

module.exports = Router;
