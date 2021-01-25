const {verify} = require('../controllers/middleware.js')
const app = require('../app.js');
const controllerOperational = require('../controllers/operational.controller.js');

app.post('/heroku',function(req,res){
  
})

app.route('/ranks')
    .get(verify,controllerOperational.readOperationalPoints)

module.exports = app;
