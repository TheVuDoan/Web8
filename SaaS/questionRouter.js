const express = require('express');
const Router = express.Router();
const fileController = require('./fileController.js');
const questionModel = require('./questionSchema');

Router.get('/', (req, res) => {
  let listQuestion,data,question;
  fileController.getElements((err,listQuestion) =>{
    if (err == null && listQuestion.length > 0) {
      data = listQuestion[Math.floor(Math.random() * listQuestion.length)];
      question = JSON.stringify(data.question);
      res.render('home',
      {
        question : question,
        questionView : "class='active'",
        link : `/api/question/${data.subid}`
      });
    }
  });
});

Router.get('/:id', (req, res) => {
  fileController.getElements((err,listQuestion) => {
    let yesNum,noNum,question,name,i;
    for (i=0;i<listQuestion.length;i++) {
      if (req.params.id == listQuestion[i].subid) {
        question = JSON.stringify(listQuestion[i].question);
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
});

module.exports = Router;
