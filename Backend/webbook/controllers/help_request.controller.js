const http = require('http');
const mysql = require('mysql');
const connect = require('../config/connect');
const express = require('express');
const app = express();

//função de leitura que retorna o resultado de witness no callback
function readHelpRequest(req, res) {
    //criar e executar a query de leitura na BD
    connect.con.query('SELECT * FROM help_request order by request_id', function(err,
        rows, fields) {
        if (!err) {
            //verifica os resultados se o número de linhas for 0 devolve dados não encontrados, caso contrário envia os resultados (rows).
            if (rows.length == 0) {
                res.status(404).send("Data not found");
            }
            else {
                res.status(200).send(rows);
            }
        }
        else
            console.log('Error while performing Query.', err);
    });
}

/*function queryRow(req,res) { // mostra a tabela toda
    let selectQuery = 'SELECT * FROM ??';
    let query = mysql.format(selectQuery, ['witness']);
    connect.con.query(query, (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        // rows fetch
        console.log(query);
    });
}*/
//função de leitura que retorna o resultado de um iduser
function readIDHelpRequest(req, res) {
    //criar e executar a query de leitura na BD
    const request_id = req.sanitize('request_id').escape();
    const post = {
        request_id: request_id
    };
    connect.con.query('SELECT * from help_request where request_id = ?', post,
        function(err, rows, fields) {
            if (!err) {
                //verifica os resultados se o número de linhas for 0 devolve dados não encontrados, caso contrário envia os resultados (rows).
                if (rows.length == 0) {
                    res.status(404).send({
                        "msg": "data not found"
                    });
                }
                else {
                    res.status(200).send(rows);
                }
            }
            else
                res.status(400).send({
                    "msg": err.code
                });
            console.log('Error while performing Query.', err);
        });
}

//função de gravação que recebe os 5 parametros
function saveHelpRequest(req, res) {
    //receber os dados do formuário que são enviados por post
    const request_id = req.sanitize('request_id').escape();
    const reason = req.sanitize('reason').escape();
    let query = "";
    query = connect.con.query('INSERT INTO ?? VALUES (?,?)', ["help_request", request_id, reason], function(err, rows, fields) {
        console.log(query.sql);
        if (!err) {
            res.status(200).location(rows.insertId).send({
                "msg": "inserted with success"
            });
            console.log("Number of records inserted: " + rows.affectedRows);
        }
        else {
            if (err.code == "ER_DUP_ENTRY") {
                res.status(409).send({ "msg": err.code });
                console.log('Error while performing Query.', err);
            }
            else res.status(400).send({ "msg": err.code });
        }
    });
}

function updateHelpRequest(req, res) {
    //receber os dados do formuário que são enviados por post
    const request_id = req.sanitize('request_id').escape();
    const reason = req.sanitize('reason').escape();
    console.log("without hahsh:" + req.body.pass);
    var query = "";
    /*var update = {
        witness_id,
        name,
        email,
        place,
        profession
    };*/
    query = connect.con.query('Update ?? SET reason = ? where request_id=?', ["help_request", reason], function(err, rows,
        fields) {
        console.log(query.sql);
        if (!err) {
            console.log("Number of records updated: " + rows.affectedRows);
            res.status(200).send({ "msg": "update with success" });
        }
        else {
            res.status(400).send({ "msg": err.code });
            console.log('Error while performing Query.', err);
        }
    });
}


//função que apaga todos os dados de um witness
function deleteIDHelpRequest(req, res) {
    //criar e executar a query de leitura na BD
    const request_id = req.sanitize('request_id').escape();
    const post = {
        request_id: request_id
    };
    connect.con.query('DELETE from help_request where request_id = ?', post, function(err, rows, fields) {
        if (!err) {
            //verifica os resultados se o número de linhas for 0 devolve dados não encontrados, caso contrário envia os resultados (rows).

            if (rows.length == 0) {
                res.status(404).send({
                    "msg": "data not found"
                });
            }
            else {
                res.status(200).send({
                    "msg": "success"
                });
            }
        }
        else
            console.log('Error while performing Query.', err);
    });
}

/*function addRow(data) { // controller??
    let insertQuery = 'INSERT INTO ?? VALUES (?,?,?,?,?)';
    let query = mysql.format(insertQuery, ["witness", data.witness_id, data.name, data.email, data.place, data.profession]);
    connect.con.query(query, (err, response) => {
        if (err) {
            console.error(err);
            return;
        }
        // rows added
        console.log(response.insertId);
    });
}*/
module.exports = {
    readHelpRequest: readHelpRequest,
    readIDHelpRequest: readIDHelpRequest,
    saveHelpRequest: saveHelpRequest,
    updateHelpRequest: updateHelpRequest,
    deleteIDHelpRequest: deleteIDHelpRequest,
};
