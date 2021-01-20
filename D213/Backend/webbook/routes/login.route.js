const app = require('../app.js');
const controllerUser = require('../controllers/usercontroller');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');
const express = require('express');
const validator = require("../assets/Validations/validator");

app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }));


app.route('/login/')
    .post(controllerUser.router.post)
    .get(controllerUser.router.get)
    .put(controllerUser.router.put) 
    .delete(controllerUser.router.delete) 

module.exports = app;