{"filter":false,"title":"app.js","tooltip":"/D213/Backend/webbook/app.js","undoManager":{"mark":3,"position":3,"stack":[[{"start":{"row":22,"column":24},"end":{"row":23,"column":0},"action":"insert","lines":["",""],"id":5}],[{"start":{"row":23,"column":0},"end":{"row":23,"column":32},"action":"insert","lines":["app.use(express.cookieParser());"],"id":6}],[{"start":{"row":22,"column":0},"end":{"row":22,"column":24},"action":"remove","lines":["app.use(cookieParser());"],"id":7},{"start":{"row":21,"column":28},"end":{"row":22,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":22,"column":8},"end":{"row":22,"column":16},"action":"remove","lines":["express."],"id":8}],[{"start":{"row":28,"column":0},"end":{"row":29,"column":29},"action":"remove","lines":["app.post('/login', login)","app.post('/refresh', refresh)"],"id":25},{"start":{"row":27,"column":45},"end":{"row":28,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":7,"column":40},"end":{"row":7,"column":41},"action":"remove","lines":["."],"id":24},{"start":{"row":7,"column":39},"end":{"row":7,"column":40},"action":"remove","lines":["."]},{"start":{"row":7,"column":38},"end":{"row":7,"column":39},"action":"remove","lines":["/"]}],[{"start":{"row":7,"column":26},"end":{"row":7,"column":27},"action":"insert","lines":["_"],"id":23}],[{"start":{"row":7,"column":26},"end":{"row":7,"column":27},"action":"remove","lines":["_"],"id":22}],[{"start":{"row":6,"column":26},"end":{"row":6,"column":27},"action":"remove","lines":["."],"id":21}],[{"start":{"row":32,"column":15},"end":{"row":32,"column":25},"action":"remove","lines":["= function"],"id":20}],[{"start":{"row":32,"column":8},"end":{"row":32,"column":9},"action":"insert","lines":[" "],"id":19}],[{"start":{"row":32,"column":0},"end":{"row":32,"column":8},"action":"remove","lines":["exports."],"id":18},{"start":{"row":32,"column":0},"end":{"row":32,"column":1},"action":"insert","lines":["f"]},{"start":{"row":32,"column":1},"end":{"row":32,"column":2},"action":"insert","lines":["u"]},{"start":{"row":32,"column":2},"end":{"row":32,"column":3},"action":"insert","lines":["n"]},{"start":{"row":32,"column":3},"end":{"row":32,"column":4},"action":"insert","lines":["c"]},{"start":{"row":32,"column":4},"end":{"row":32,"column":5},"action":"insert","lines":["t"]},{"start":{"row":32,"column":5},"end":{"row":32,"column":6},"action":"insert","lines":["i"]},{"start":{"row":32,"column":6},"end":{"row":32,"column":7},"action":"insert","lines":["o"]},{"start":{"row":32,"column":7},"end":{"row":32,"column":8},"action":"insert","lines":["n"]}],[{"start":{"row":72,"column":17},"end":{"row":72,"column":27},"action":"remove","lines":["= function"],"id":17}],[{"start":{"row":72,"column":8},"end":{"row":72,"column":9},"action":"insert","lines":[" "],"id":16}],[{"start":{"row":72,"column":0},"end":{"row":72,"column":1},"action":"insert","lines":["f"],"id":15},{"start":{"row":72,"column":1},"end":{"row":72,"column":2},"action":"insert","lines":["u"]},{"start":{"row":72,"column":2},"end":{"row":72,"column":3},"action":"insert","lines":["n"]},{"start":{"row":72,"column":3},"end":{"row":72,"column":4},"action":"insert","lines":["c"]},{"start":{"row":72,"column":4},"end":{"row":72,"column":5},"action":"insert","lines":["t"]},{"start":{"row":72,"column":5},"end":{"row":72,"column":6},"action":"insert","lines":["i"]},{"start":{"row":72,"column":6},"end":{"row":72,"column":7},"action":"insert","lines":["o"]},{"start":{"row":72,"column":7},"end":{"row":72,"column":8},"action":"insert","lines":["n"]}],[{"start":{"row":72,"column":0},"end":{"row":72,"column":8},"action":"remove","lines":["exports."],"id":14}],[{"start":{"row":119,"column":0},"end":{"row":120,"column":29},"action":"insert","lines":["app.post('/login', login)","app.post('/refresh', refresh)"],"id":13}],[{"start":{"row":6,"column":0},"end":{"row":9,"column":36},"action":"insert","lines":["const connect = require('../config/connect.js');","const jsonMessagesPath = __dirname + \"/../assets/jsonMessages/\";","const jsonMessages = require(jsonMessagesPath + \"bd\");","const jwt = require('jsonwebtoken');"],"id":12}],[{"start":{"row":5,"column":34},"end":{"row":6,"column":0},"action":"insert","lines":["",""],"id":11}],[{"start":{"row":28,"column":0},"end":{"row":73,"column":2},"action":"remove","lines":["/*exports.login = function(req, res){","const email = req.param('email');","    const post = { email: email };","    const query = connect.con.query('SELECT email FROM login WHERE ?',post, function(err, rows, fields) {","        console.log(query.sql);","        if (err) {","            console.log(err);","            res.status(jsonMessages.db.noRecords.status).send(jsonMessages.db.dbError);","        }","        else {","            if (rows.length == 0) {","                res.status(jsonMessages.db.noRecords.status).send(jsonMessages.db.noRecords);","            }","            else {","                res.send(rows);","            }","        }","    });","    let username = req.body.username","    let password = req.body.password","","    //use the payload to store information about the user such as username, user role, etc.","    let payload = {username: username}","","    //create the access token with the shorter lifespan","    let accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {","        algorithm: \"HS256\",","        expiresIn: process.env.ACCESS_TOKEN_LIFE","    })","","    //create the refresh token with the longer lifespan","    let refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {","        algorithm: \"HS256\",","        expiresIn: process.env.REFRESH_TOKEN_LIFE","    })","","    //store the refresh token in the user array","    users[username].refreshToken = refreshToken","","    //send the access token to the client inside a cookie","    //res.cookie(\"jwt\", accessToken, {secure: true, httpOnly: true})","    res.localStorage.setItem(\"jwt\", accessToken, {secure: true, httpOnly: true})","    res.send()","}","","*/"],"id":10},{"start":{"row":28,"column":0},"end":{"row":115,"column":0},"action":"insert","lines":["exports.login = function(req, res) {","    let email = req.body.email;","    let password = req.body.password;","    const query = connect.con.query('SELECT * FROM login where email = ? and password =? limit 1',[email, password], function(err, rows, fields) {","        if (err) {","            console.log(err);","            res.status(jsonMessages.db.noRecords.status).send(jsonMessages.db.dbError);","        }","        else {","            if (rows.length == 0) {","                res.status(jsonMessages.db.noRecords.status).send(jsonMessages.db.noRecords);","            }","            else {","                let user = JSON.parse(JSON.stringify(rows))","               /* if (!email || !password || rows.email.password !== password){","        return res.status(401).send()","    }*/","                //use the payload to store information about the user such as username, user role, etc.","                let payload = { email: email}","                //create the access token with the shorter lifespan","                let accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {","                    algorithm: \"HS256\",","                    expiresIn: process.env.ACCESS_TOKEN_LIFE","                })","                //create the refresh token with the longer lifespan","                let refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {","                    algorithm: \"HS256\",","                    expiresIn: process.env.REFRESH_TOKEN_LIFE","                })","                ","                //store the refresh token in the user array","                user[0].email.refreshToken = refreshToken;","                //send the access token to the client inside a cookie","                res.cookie(\"jwt\", accessToken, {maxAge: 1000 * 60 * 15,secure: true, httpOnly: true})","                res.send();","            }","        }","    });","}","","exports.refresh = function(req, res) {","    const query = connect.con.query('SELECT * FROM login ', function(err, rows, fields) {","        console.log(query.sql);","        if (err) {","            console.log(err);","            res.status(jsonMessages.db.noRecords.status).send(jsonMessages.db.dbError);","        }","        else {","            if (rows.length == 0) {","                res.status(jsonMessages.db.noRecords.status).send(jsonMessages.db.noRecords);","            }","            else {","                 let accessToken = req.cookies.jwt","","                if (!accessToken) {","                    return res.status(403).send()","                }","","                let payload","                try {","                    payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)","                }","                catch (e) {","                    return res.status(401).send()","                }","","                //retrieve the refresh token from the users array","                let refreshToken = rows[payload.username].refreshToken","","                //verify the refresh token","                try {","                    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET)","                }","                catch (e) {","                    return res.status(401).send()","                }","","                let newToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {","                    algorithm: \"HS256\",","                    expiresIn: process.env.ACCESS_TOKEN_LIFE","                })","                res.cookie(\"jwt\", accessToken, {secure: true, httpOnly: true})","                res.send()","            }","        }","    });","}",""]}],[{"start":{"row":15,"column":0},"end":{"row":15,"column":1},"action":"insert","lines":["/"],"id":9},{"start":{"row":15,"column":1},"end":{"row":15,"column":2},"action":"insert","lines":["/"]}]]},"ace":{"folds":[],"scrolltop":300,"scrollleft":0,"selection":{"start":{"row":15,"column":0},"end":{"row":15,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1611172531066,"hash":"308ebd38329730a94eb8c562d9e51e6b6826a00e"}