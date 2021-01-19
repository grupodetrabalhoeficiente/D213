const app = require('../app.js');
const controllerUser = require('../controllers/usercontroller');
const bodyParser = require('body-parser');
app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }));
const validator = require("../assets/Validations/validator");

