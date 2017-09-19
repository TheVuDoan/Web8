const fs = require('fs');
const questionModel = require('./questionSchema');

const saveFile = (filename, data) => {
  fs.writeFileSync(filename,data);
}

const addToFile = (filename, data) => {
  fs.appendFileSync(filename,data);
}

const readFile = (filename) => {
  return fs.readFileSync(filename, {encoding: 'utf-8'});
}

const getElements = (callback) => {
  questionModel.find({}, (err, questions) => {
    if (err) {
      console.log(err);
    } else {
      callback(null, questions);
    }
  });
}

module.exports = {
  saveFile,
  addToFile,
  getElements,
  readFile
}
