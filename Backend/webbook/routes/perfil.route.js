const {verify} = require('../controllers/middleware.js');
const app = require('../app.js');
const controllerOperational = require('../controllers/operational.controller.js');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');
const express = require('express');
const validator = require("../assets/Validations/validator");

app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }));

app.route('/operationals')
  .get(verify,controllerOperational.readOperationalPoints) // certo e fetch

app.route('/operationals/:id_operational')
  .get(verify,controllerOperational.readIDOperational) //certo e fetch
  .put(verify,validator.updatePassword, controllerOperational.updateOperational) // certo e fetch (ta feito o validator)

app.route('/operationals/:id_operational/occurrences')
  .get(verify,controllerOperational.readOccurrenceFromOperational) // certo e fetch


app.route('/operationals/:id_operational/upload')
  .put(verify,controllerOperational.updateAvatar)
/*
app.post('/operationals/:id_operational', upload.single('avatar'), function(req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
})
*/
/*
app.post('/photos/upload', upload.array('photos', 12), function(req, res, next) {
  // req.files is array of `photos` files
  // req.body will contain the text fields, if there were any
})

let cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
app.post('/cool-profile', cpUpload, function(req, res, next) {
  // req.files is an object (String -> Array) where fieldname is the key, and the value is array of files
  //
  // e.g.
  //  req.files['avatar'][0] -> File
  //  req.files['gallery'] -> Array
  //
  // req.body will contain the text fields, if there were any
})*/

module.exports = app;
