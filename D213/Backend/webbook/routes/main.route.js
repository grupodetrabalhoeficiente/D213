const {verify} = require('../controllers/middleware.js')
const appfile = require('../app.js');
const app = new appfile(app);
const controllerOperational = require('../controllers/operational.controller.js');
const bodyParser = require('body-parser');
const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });


app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }));

app.route('/ranks')
    .get(verify,controllerOperational.readOperationalPoints)

module.exports = app;
