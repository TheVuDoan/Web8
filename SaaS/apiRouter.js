const express = require('express');
const Router = express.Router();
const fileController = require('./fileController.js');
const fileout = 'question.txt';

Router.post('/question', (req, res) => {
  let listQuestion = fileController.getElements(fileout);
  let question = {
    id: listQuestion.length,
    name: req.body.question,
    yes: 0,
    no: 0
  }
  console.log(listQuestion.length);
  let data;
  if (listQuestion.length == 0) {
    data = JSON.stringify(question);
  } else {
    data = ",\n" + JSON.stringify(question);
  }
  fileController.addToFile(fileout,data);
  res.redirect(`/question/${question.id}`);
});

Router.post('/question/:id', (req, res) => {
  listQuestion = fileController.getElements();
  for (i=0;i<listQuestion.length;i++) {
    if (req.params.id == listQuestion[i].id) {
      if (req.body.choice === 'yes') {
        listQuestion[i].yes += 1;
      } else if (req.body.choice === 'no'){
        listQuestion[i].no += 1;
      } else if (req.body.choice === 'random'){
        res.redirect('/question');
      }
    }
  }
  let tmp = "";
  for (i = 0; i < listQuestion.length; i++) {
    if (i == 0) {
      tmp += JSON.stringify(listQuestion[i]);
    } else {
      tmp += ",\n" + JSON.stringify(listQuestion[i]);
    }
  }
  fileController.saveFile('question.txt', tmp);
  res.redirect(`/question/${req.params.id}`);
});

module.exports = Router;
