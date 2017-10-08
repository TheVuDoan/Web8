const mongoose = require('mongoose');
const imagesSchema = require('./imagesSchema');

const imagesModel = mongoose.model('images', imagesSchema);

//Create
const createImage = (image, callback) => {
  let newImage = {
    imageUrl : image.imageUrl,
    content : image.content,
    title : image.title,
  }
  imagesModel.create(newImage, (err, doc) => {
    if (err) {
      callback(err);
    } else {
      callback(null, doc);
    }
  })
}

//Get image
const getImageById = (imageId, callback) => {
  imagesModel.find({ 'content' : { $like : imageId } })
    .populate('createBy').lean().exec((err, doc) => {
    if (err) {
      throw (err);
    } else {
      console.log(doc);
      callback(null, doc);
    }
  });
}
//Edit image

//Delete image

module.exports = {
  createImage,
  getImageById
}
