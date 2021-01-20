const connect = require('../config/connect.js');
const jsonMessagesPath = __dirname + "/../assets/jsonMessages/";
const jsonMessages = require(jsonMessagesPath + "bd");


function readEmail(req, res) {
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
}

function readLoginID(req, res) {
    const id = req.param('id');
    const post = { id_login: id };
    const query = connect.con.query('SELECT id_login, email, password, profile FROM login where ? ', post, function(err, rows, fields) {
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
}

function updateLogin(req, res) {
    const id = req.sanitize('id').escape();
    const email = req.sanitize('email').escape();
    const password = req.sanitize('password').escape();

    const errors = req.validationErrors();
    if (errors) {
        res.send(errors);
        console.log(errors);
        return;
    }
    else {
        if (id != "NULL" && typeof(id) != 'undefined' && typeof(email) != 'undefined' && typeof(password) != 'undefined') {
            const update = [email, password, id];
            console.log(update);
            const query = connect.con.query('UPDATE login SET email =?, password =? WHERE id_login=?', update, function(err, rows, fields) {
                console.log(query.sql);
                if (!err) {
                    res.status(jsonMessages.db.successUpdate.status).send(jsonMessages.db.successUpdate);
                }
                else {
                    console.log(err);
                    res.status(jsonMessages.db.successUpdate.status).send(jsonMessages.db.successUpdate);
                }
            });
        }
        else
            res.status(jsonMessages.db.requiredData.status).send(jsonMessages.db.requiredData);
    }
}

function deleteLogin(req, res) {
    const idLogin = req.param('id');
    const query = connect.con.query('DELETE FROM login WHERE id_login=?', idLogin, function(err, rows, fields) {
        console.log(query.sql);
        if (!err) {
            res.status(jsonMessages.db.successDelete.status).send(jsonMessages.db.successDelete);
        }
        else {
            console.log(err);
            res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
        }
    });
}

function updatePassword(req, res) {
    const id = req.sanitize('id').escape();
    const password = req.sanitize('password').escape();
    const errors = req.validationErrors();
    if (errors) {
        res.send(errors);
        console.log(errors);
        return;
    }
    else {
        if (id != "NULL" && typeof(id) != 'undefined' && typeof(password) != 'undefined') {
            const update = [password, id];
            console.log(update);
            const query = connect.con.query('UPDATE login SET password =? WHERE id_login=?', update, function(err, rows, fields) {
                console.log(query.sql);
                if (!err) {
                    res.status(jsonMessages.db.successUpdate.status).send(jsonMessages.db.successUpdate);
                }
                else {
                    console.log(err);
                    res.status(jsonMessages.db.successUpdate.status).send(jsonMessages.db.successUpdate);
                }
            });
        }
        else
            res.status(jsonMessages.db.requiredData.status).send(jsonMessages.db.requiredData);
    }
}

module.exports = {
    readEmail: readEmail,
    readLoginID: readLoginID,
    updateLogin: updateLogin,
    deleteLogin: deleteLogin,
    updatePassword: updatePassword,
};