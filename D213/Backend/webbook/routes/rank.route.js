const {verify} = require('../controllers/middleware.js')
const app = require('../app.js');
const controllerOperational = require('../controllers/operational.controller.js');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');
const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const validator = require("../assets/Validations/validator");


app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }));

app.route('/ranks')
    .get(verify,controllerOperational.readOperationalPoints)

/*app.route('/ranks/:id_operational')
    .get(controllerOperational.readIDOperational)
*/
module.exports = app;