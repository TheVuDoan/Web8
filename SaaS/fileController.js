const fs = require('fs');

const saveFile = (filename, data) => {
  fs.writeFileSync(filename,data);
}

const addToFile = (filename, data) => {
  fs.appendFileSync(filename,data);
}

const readFile = (filename) => {
  return fs.readFileSync(filename, {encoding: 'utf-8'});
}

const getElements = () => {
  listQuestionString = `[${readFile('question.txt')}]`;
  try {
   listQuestion = JSON.parse(listQuestionString);
   return listQuestion;
  } catch (err) {
   console.log(err);
   return [];
  }
}

module.exports = {
  saveFile,
  addToFile,
  getElements,
  readFile
}
