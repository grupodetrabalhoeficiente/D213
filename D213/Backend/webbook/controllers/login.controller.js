const connect = require('../config/connect.js');
const jsonMessagesPath = __dirname + "/../assets/jsonMessages/";
const jsonMessages = require(jsonMessagesPath + "bd");
const jwt = require('jsonwebtoken');


exports.login = function(req, res) {
    let email = req.body.email;
    let password = req.body.password;
    const query = connect.con.query('SELECT * FROM login where email = ? and password =? limit 1',[email, password], function(err, rows, fields) {
        if (err) {
            console.log(err);
            res.status(jsonMessages.db.noRecords.status).send(jsonMessages.db.dbError);
        }
        else {
            if (rows.length == 0) {
                res.status(jsonMessages.db.noRecords.status).send(jsonMessages.db.noRecords);
            }
            else {
                let user = JSON.parse(JSON.stringify(rows));
                //use the payload to store information about the user such as username, user role, etc.
                let payload = { email: email}
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
                user[0].email.refreshToken = refreshToken;
                //send the access token to the client inside a cookie
                res.cookie("jwt", accessToken, {maxAge: 1000 * 60 * 15,secure: true, httpOnly: true})
                res.send();
            }
        }
    });
}

exports.refresh = function(req, res) {
    const query = connect.con.query('SELECT * FROM login ', function(err, rows, fields) {
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
                 let accessToken = req.cookies.jwt

                if (!accessToken) {
                    return res.status(403).send()
                }

                let payload
                try {
                    payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
                }
                catch (e) {
                    return res.status(401).send()
                }

                //retrieve the refresh token from the users array
                let refreshToken = rows[payload.username].refreshToken

                //verify the refresh token
                try {
                    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET)
                }
                catch (e) {
                    return res.status(401).send()
                }

                let newToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
                    algorithm: "HS256",
                    expiresIn: process.env.ACCESS_TOKEN_LIFE
                })
                res.cookie("jwt", accessToken, {secure: true, httpOnly: true})
                res.send()
            }
        }
    });
}
