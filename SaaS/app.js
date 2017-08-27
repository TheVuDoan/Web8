const fileController = require('./fileController.js');
const filename = 'test.txt';

console.log(fileController.readFile(filename));
console.log('Hello world');
