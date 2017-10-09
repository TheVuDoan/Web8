const express = require('express');
const Router = express.Router();

const imagesModel = require('./imagesModel');

//POST
Router.post('/', (req, res) => {
  console.log(req.body);

  imagesModel.createImage(req.body, (err, newImage) => {
    if (err) {
      res.send(err.errmsg);
    } else {
      console.log(newImage);
      let result = {
        imageUrl : newImage.imageUrl,
        content : newImage.content,
        title : newImage.title
      }
      res.send(result);
    }
  });
});

//GET
Router.get('/', (req, res) => {
  //get all image
  imagesModel.getAllImage((err, doc) => {
    if (err) {
      res.send(err);
    } else {
      res.send(doc);
    }
  })
});

Router.get('/:id', (req, res) => {
  imagesModel.getImageById(req.params.id, (err, doc) => {
    if (err) {
      res.send(err.msg);
    } else {
      res.send(doc);
    }
  });
});

module.exports = Router;
