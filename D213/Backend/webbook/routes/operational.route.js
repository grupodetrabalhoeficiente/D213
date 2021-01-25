const {verify} = require('../controllers/middleware.js');
const app = require('../app.js');
const controllerOperational = require('../controllers/operational.controller.js');
const validator = require("../assets/Validations/validator");

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
