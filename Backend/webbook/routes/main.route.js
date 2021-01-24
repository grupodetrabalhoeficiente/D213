const {verify} = require('../controllers/middleware.js')
const app = require('../app.js');
const controllerOperational = require('../controllers/operational.controller.js');
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
})

app.route('/ranks')
    .get(verify,controllerOperational.readOperationalPoints)

module.exports = app;
