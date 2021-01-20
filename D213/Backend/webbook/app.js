const express = require('express');
const port = process.env.PORT || 8080;
const host = process.env.HOST || '127.0.0.1';
//carregar bibliotecas globais
require('dotenv').config()
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
const {login, refresh} = require('./controllers/login.controller.js')

let app = express();
app.use(express.static("../../Frontend/"));
app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }));
app.use(expressSanitizer());
app.use(expressValidator());
app.use(cookieParser());
/*                 Login                   */
app.post('/login', login)
app.post('/refresh', refresh)


/*exports.login = function(req, res){
const email = req.param('email');
    const post = { email: email };
    const query = connect.con.query('SELECT email FROM login WHERE ?',post, function(err, rows, fields) {
        console.log(query.sql);
        if (err) {
            console.log(err);
            res.status(jsonMessages.db.noRecords.status).send(jsonMessages.db.dbError);
        }
        else {
            if (rows.length == 0) {
                res.status(jsonMessages.db.noRecords.status).send(jsonMessages.db.noRecords);
            }
            else {
                res.send(rows);
            }
        }
    });
    let username = req.body.username
    let password = req.body.password

    //use the payload to store information about the user such as username, user role, etc.
    let payload = {username: username}

    //create the access token with the shorter lifespan
    let accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
        algorithm: "HS256",
        expiresIn: process.env.ACCESS_TOKEN_LIFE
    })

    //create the refresh token with the longer lifespan
    let refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
        algorithm: "HS256",
        expiresIn: process.env.REFRESH_TOKEN_LIFE
    })

    //store the refresh token in the user array
    users[username].refreshToken = refreshToken

    //send the access token to the client inside a cookie
    //res.cookie("jwt", accessToken, {secure: true, httpOnly: true})
    res.localStorage.setItem("jwt", accessToken, {secure: true, httpOnly: true})
    res.send()
}

*/










/*const usercontroller = require('./user/usercontroller');*/



/*app.set('trust proxy',1);
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

//Sync Database
models.sequelize.sync().then(function() {
  console.log('Nice! Database looks fine');

}).catch(function(err) {
  console.log(err, "Something went wrong with the Database Update!");
});*/


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
