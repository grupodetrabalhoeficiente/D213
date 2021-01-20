const express = require('express');
const port = process.env.PORT || 8080;
const host = process.env.HOST || '127.0.0.1';
//carregar bibliotecas globais
const models=require("./models/");
const passport = require('passport');
const session = require('express-session');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const expressSanitizer = require('express-sanitizer');
const expressValidator = require('express-validator');
const multer = require('multer');
const localStorage = require('localStorage');

/*const usercontroller = require('./user/usercontroller');*/

//iniciar a aplicação
let app = express();
app.use(express.static("../../Frontend/"));
app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }));
app.use(expressSanitizer());
app.use(expressValidator());
app.set('trust proxy',1);
app.use(session({
    secret: 'fire',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: true,
        maxAge: 60000,
        httpOnly: true,
    }
}))
app.use(function(req, res, next) {
    if(global.sessData === undefined) {
        global.sessData = req.session;
        global.sessData.ID = req.sessionID;
    }
    else {
        console.log('session exists', global.sessData.ID);
    }
    next();
});
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
require('./routes/auth.js')(app, passport);
require('./config/passport/passport.js')(passport, models.user);

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
require('./routes/auth.js')(app, passport);
require('./config/passport/passport.js')(passport, models.user);

//Sync Database
models.sequelize.sync().then(function() {
  console.log('Nice! Database looks fine');

}).catch(function(err) {
  console.log(err, "Something went wrong with the Database Update!");
});


app.listen(port, function(err) {
    if (!err) {
        console.log('Your app is listening on ' + host + ' and port ' + port);
    }
    else { console.log(err); }
});

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
app.use(cors());
app.use(cookieParser());

/*app.use('/users', usercontroller);*/

module.exports = app;
/*require('./multer.js');*/
require('./routes/occurrence.route.js');
require('./routes/perfil.route.js');
require('./routes/main.route.js');
require('./routes/rank.route.js');
require('./routes/auth.js');
