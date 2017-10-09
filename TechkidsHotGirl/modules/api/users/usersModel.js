const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const usersSchema = require('./usersSchema');

let usersModel = mongoose.model('users', usersSchema);

const createUser = (user, callback) => {
  usersModel.create(user, (err, doc) => {
    if (err) {
      callback(err);
    } else {
      callback(null, doc);
    }
  });
};

const loginUser = (user, callback) => {
  usersModel.findOne({username : user.username }, (err, doc) => {
    bcrypt.compare(user.password, doc.password, (err, res) => {
      if (res) {
        callback(null, doc);
      } else {
        callback("Login failed");
      }
    })
  });
}
module.exports = {
  createUser,
  loginUser
}
