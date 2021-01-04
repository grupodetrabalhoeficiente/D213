const app = require('../app.js');
const bodyParser = require('body-parser');
const html_dir = '../../Frontend/';
const controllerOccurrence = require('../controllers/occurrence.controller');
app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.send("hello");
});

app.route('/menu')
// .get(controllerOccurrence)

module.exports = app;
