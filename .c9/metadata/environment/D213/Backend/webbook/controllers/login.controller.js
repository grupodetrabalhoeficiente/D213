{"changed":true,"filter":false,"title":"login.controller.js","tooltip":"/D213/Backend/webbook/controllers/login.controller.js","value":"","undoManager":{"mark":-2,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":79,"column":3},"action":"remove","lines":["/*const connect = require('../config/connect');","","// INSERTS","","function addRow(data) {","    let insertQuery = 'INSERT INTO ?? VALUES (?,?,?,?)';","    let query = mysql.format(insertQuery,[\"login\",data.id_login,data.email,data.password,data.profile]);","    pool.query(query,(err, response) => {","        if(err) {","            console.error(err);","            return;","        }","        // rows added","        console.log(response.insertId);","    });","}","","","//SELECTS","function readID(id) {","    let selectQuery = 'SELECT (id_login, email) FROM ?? WHERE ?? = ?';    ","    let query = mysql.format(selectQuery,[\"login\",\"id_login\", id]);","    // query = SELECT * FROM `todo` where `user` = 'shahid'","    pool.query(query,(err, data) => {","        if(err) {","            console.error(err);","            return;","        }","        // rows fetch","        console.log(data);","    });","}","","function readAll() {","    let selectQuery = 'SELECT (id_login, email) FROM ??';","    let query = mysql.format(selectQuery,[\"login\"]);","    // query = SELECT * FROM `todo` where `user` = 'shahid'","    pool.query(query,(err, data) => {","        if(err) {","            console.error(err);","            return;","        }","        // rows fetch","        console.log(data);","    });","}","","","// DELETE","","function deleteRow(id) {","    let deleteQuery = \"DELETE from ?? where ?? = ?\";","    let query = mysql.format(deleteQuery, [\"login\", \"id_login\", id]);","    // query = DELETE from `todo` where `user`='shahid';","    pool.query(query,(err, response) => {","        if(err) {","            console.error(err);","            return;","        }","        // rows deleted","        console.log(response.affectedRows);","    });","}","","","// UPDATES","","function updateRow(data) {","    let updateQuery = \"UPDATE ?? SET ?? = ? WHERE ?? = ?\";","    let query = mysql.format(updateQuery,[\"login\",data.alterar,data.value,\"id_login\",data.id]);","    // query = UPDATE `todo` SET `notes`='Hello' WHERE `name`='shahid'","    pool.query(query,(err, response) => {","        if(err) {","            console.error(err);","            return;","        }","        // rows updated","        console.log(response.affectedRows);","    });","}*/"],"id":2}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":0,"column":0},"end":{"row":0,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":131,"mode":"ace/mode/javascript"}},"timestamp":1610926548628}