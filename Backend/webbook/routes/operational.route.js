const {verify} = require('../controllers/middleware.js');
const app = require('../app.js');
const controllerOperational = require('../controllers/operational.controller.js');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');
const express = require('express');
const validator = require("../assets/Validations/validator");
app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }));

app.route('/operationals')
  .get(verify,controllerOperational.readOperationalPoints) 

app.route('/operationals/:id_operational')
  .get(verify,controllerOperational.readIDOperational) 
  .put(verify,validator.updatePassword, controllerOperational.updateOperational) 

app.route('/operationals/:id_operational/occurrences')
  .get(verify,controllerOperational.readOccurrenceFromOperational) 


app.route('/operationals/:id_operational/upload')
  .put(verify,controllerOperational.updateAvatar)

module.exports = app;
