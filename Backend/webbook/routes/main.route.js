
const {verify} = require('../controllers/middleware.js')
const app = require('../app.js');
const bodyParser = require('body-parser');
const html_dir = '../../Frontend/';
const controllerOccurrence = require('../controllers/occurrence.controller');
const jsonMessages = __dirname + "/../assets/jsonMessages/";
app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.send("hello");
});

app.route('/menu')
// .get(controllerOccurrence)

module.exports = app;
//funçao para o login
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    else {
          res.status(jsonMessages.login.unauthorized.status).send(jsonMessages.login.unauthorized);
        return next();
    }
}
