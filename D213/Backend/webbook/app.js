const express = require('express');
const port = process.env.PORT || 8080;
const host = process.env.HOST || '127.0.0.1';
//carregar bibliotecas globais
require('dotenv').config();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const expressSanitizer = require('express-sanitizer');
const expressValidator = require('express-validator');
const multer = require('multer');
const localStorage = require('localStorage');
const {verify} = require('./controllers/middleware.js')
const {login, responsible,logout} = require('./controllers/auth.controller.js')

let app = express();
app.use(express.static("../../Frontend/"));
app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }));
app.use(expressSanitizer());
app.use(expressValidator());
app.use(cookieParser());
app.set('trust proxy', 1);
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
})
app.listen(port, function(err) {
    if (!err) {
        console.log('Your app is listening on ' + host + ' and port ' + port);
    }
    else { console.log(err); }
});

/*                 Login                   */
app.post('/login', login)
app.post('/occurrences/:id_occurrence/responsible',verify,responsible)
app.get('/logout', logout )

//Multer
const path = require('path');
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        console.log(file);
        let name = Date.now() + path.extname(file.originalname);
        cb(null, name);
        let nameUpload = "../Backend/webbook/uploads/" + name;
        localStorage.setItem("localUploadedFileName", nameUpload);
    }
    /*filename: (req, file, cb) => {
        console.log(file);
        cb(null, file.originalname);
    }*/
});
const fileFilter = (req, file, cb) => {
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
        cb(null, true);
    }
    else {
        cb(null, false);
    }
}
const upload = multer({ storage: storage, fileFilter: fileFilter });
app.post('/upload', upload.single('image'), (req, res, next) => {
    res.sendFile('Upload.html', { root: '../../Frontend' });
    /*try {
        return res.status(201).json({
            message: 'File uploded successfully'
        });
    }
    catch (error) {
        console.error(error);
    }*/
});

//forçar utilização das bibliotecas
module.exports = app;
require('./routes/occurrence.route.js');
require('./routes/operational.route.js');
require('./routes/main.route.js');
