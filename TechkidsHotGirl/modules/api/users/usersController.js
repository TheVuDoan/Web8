const express = require('express');
const Router = express.Router();

const usersModel = require('./usersModel');

Router.post('/', (req, res) => {
  let newUser = {
    username : req.body.username,
    password : req.body.password,
    email : req.body.email,
    avatar : req.body.avatar,
    fullname : req.body.fullname,
    dob : req.body.dob
  }

  usersModel.createUser(newUser, (err, doc) => {
    if (err) {
      res.send(err.errmsg);
    } else {
      res.send(doc);
    }
  });
});

Router.post("/signIn", (req, res) => {
  usersModel.loginUser(req.body, (err, doc) => {
    if (err) {
      res.send(err);
    } else {
      req.session.username = doc.username;
      res.send(doc);
    }
  });
});

module.exports = Router;
