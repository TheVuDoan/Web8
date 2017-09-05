const express = require('express');
const Router = express.Router();
const fileController = require('./fileController.js');
const fileout = 'question.txt';

Router.get('/', (req, res) => {
  res.render('addQuestion');
});

module.exports = Router;
