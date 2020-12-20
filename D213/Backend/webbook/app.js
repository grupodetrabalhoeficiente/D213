const express = require('express');
const port = process.env.PORT || 8080;
const host = process.env.HOST || '127.0.0.1';
//carregar bibliotecas globais
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const expressSanitizer = require('express-sanitizer');
const expressValidator = require('express-validator');
//iniciar a aplicação

var app = express();
app.use(express.static("../../Frontend/"));
app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }));
app.use(expressSanitizer());
app.use(expressValidator());

app.listen(port, function(err) {
    if (!err) {
        console.log('Your app is listening on ' + host + ' and port ' + port);
    }
    else { console.log(err); }
});
//forçar utilização das bibliotecas
app.use(cors());
app.use(cookieParser());
module.exports = app;
require('./routes/occurrence.route.js');
require('./routes/perfil.route.js');
require('./routes/main.route.js');
