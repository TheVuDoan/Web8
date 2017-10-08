const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const likeSchema = new Schema({
    date : { type : Date, default : new Date().toISOString() },
    likeBy : { type: ObjectId, ref : 'users', default : null }
});

const imagesSchema = new Schema({
  name : { type : String, default : '' },
  content : { type : String, default : '' },
  title : {type : String, default : '' },
  imageUrl : { type : String },
  views : { type : Number,  default : 0 },
  createBy : { type : ObjectId , ref : 'users', default : null },
  likes : {
    type : [ likeSchema ],
    default : []
  }
}, { timestamps: { createdAt: 'created_at', updatedAt : 'updated_at' } });

module.exports = imagesSchema;
