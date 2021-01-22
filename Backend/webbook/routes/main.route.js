const {login, refresh, responsible} = require('../controllers/auth.controller.js')
require('dotenv').config()
const {verify} = require('../controllers/middleware.js')
const app = require('../app.js');
const bodyParser = require('body-parser');
const html_dir = '../../Frontend/';
const controllerOccurrence = require('../controllers/occurrence.controller');
const jsonMessages = __dirname + "/../assets/jsonMessages/";
app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }));


    

module.exports = app;

