const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  subid : {
    type : Number,
    require : true
  },
  question : {
    type : String,
    require : true
  },
  yes : {
    type : Number,
    default : 0
  },
  no : {
    type : Number,
    default : 0
  }
});

module.exports = mongoose.model('questions', questionSchema);
