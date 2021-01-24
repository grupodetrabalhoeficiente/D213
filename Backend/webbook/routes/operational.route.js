const {verify} = require('../controllers/middleware.js');
const app = require('../app.js');
const controllerOperational = require('../controllers/operational.controller.js');
const validator = require("../assets/Validations/validator");
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
})

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
