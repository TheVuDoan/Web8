const express = require('express');
const Router = express.Router();
const fileController = require('./fileController.js');
const questionModel = require('./questionSchema');

Router.post('/question', (req, res) => {
  let listQuestion;
  fileController.getElements((err,listQuestion) => {
    let question = {
      subid: listQuestion.length,
      question: req.body.question,
      yes: 0,
      no: 0
    }
    questionModel.create(question, (err,question) => {
      if (err) {
        console.log(err);
      } else {
        console.log(question);
        res.redirect(`/question/${question.subid}`);
      }
    });
  });
});

Router.post('/question/:id', (req, res) => {
  let yesNum,noNum;
  fileController.getElements((err,listQuestion) => {
    for (i=0;i<listQuestion.length;i++) {
      if (req.params.id == listQuestion[i].subid) {
        if (req.body.choice === 'yes') {
          yesNum = listQuestion[i].yes + 1;
          noNum = listQuestion[i].no;
        } else if (req.body.choice === 'no'){
          yesNum = listQuestion[i].yes;
          noNum = listQuestion[i].no + 1;
        } else if (req.body.choice === 'random'){
          res.redirect('/question');
        } else {
          yesNum = listQuestion[i].yes;
          noNum = listQuestion[i].no;
        }
      }
    }
    questionModel.findOneAndUpdate({subid: req.params.id}, {yes: yesNum, no: noNum}, (err) => {
       if (err) {
         console.log(err);
       } else {
         res.redirect(`/question/${req.params.id}`);
       }
     });
  });
});

module.exports = Router;
