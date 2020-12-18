const connect = require('../config/connect');
const { body, validationResult } = require('express-validator');


//função de leitura que retorna o resultado no callback
function readOperational(req, res) {
    //criar e executar a query de leitura na BD
    connect.con.query('Select * from operational order by id_operational', function(err, rows, fields) {
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

function readOperationalPoints(req, res) {
    //criar e executar a query de leitura na BD
    connect.con.query('Select operational.*,SUM(operational_occurrence.points) as points from operational left join operational_occurrence on operational.id_operational=operational_occurrence.id_operational group by operational.id_operational order by SUM(operational_occurrence.points) desc', function(err, rows, fields) {
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

function readOccurrenceFromOperational(req, res) {
    //criar e executar a query de leitura na BD
    const id_operational = req.sanitize('id_operational').escape();
    connect.con.query('SELECT occurrence.id_occurrence,occurrence.local,occurrence.distance,occurrence.occurrence_type,occurrence.status,occurrence.access_code,occurrence.arrival,occurrence.departure,occurrence.cost,occurrence.origin,occurrence.description,occurrence.id_entity,occurrence.id_request, points FROM occurrence,operational_occurrence where id_operational=? and occurrence.id_occurrence=operational_occurrence.id_occurrence', [id_operational], function(err,
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

//função de leitura que retorna o resultado de um iduser
function readIDOperational(req, res) {
    //criar e executar a query de leitura na BD
    const id_operational = req.sanitize('id_operational').escape();
    connect.con.query('SELECT operational.*,password,email from operational,login where id_operational = ? and operational.id_login=login.id_login', [id_operational],
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
                    console.log(rows);
                }
            }
            else
                res.status(400).send({
                    "msg": err.code
                });
        });
}

//função de gravação que recebe os 3 parâmetros
function saveOperational(req, res) { // nao deve ser preciso
    //receber os dados do formuário que são enviados por post
    const id_operational = req.sanitize('id_operational').escape();
    const name = req.sanitize('name').escape();
    const birth_date = req.sanitize('birth_date').escape();
    const adress = req.sanitize('adress').escape();
    const entry_date = req.sanitize('entry_date').escape();
    const cc = req.sanitize('cc').escape();
    const phone_number = req.sanitize('phone_number').escape();
    const pay_per_hour = req.sanitize('pay_per_hour').escape();
    const operational_type = req.sanitize('operational_type').escape();
    const speciality = req.sanitize('speciality').escape();
    const id_login = req.sanitize('id_login').escape();
    const password = req.sanitize('password').escape()
    let query = "";
    query = connect.con.query('INSERT INTO ?? VALUES (?,?,?,?,?,?,?,?,?,?,?,?)', ["operational", id_operational, name, birth_date, adress, entry_date, cc, phone_number, pay_per_hour, operational_type, speciality, id_login, password], function(err, rows, fields) {
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

//efetuar updade de todos os dados para um determinado iduser
function updateOperational(req, res) {
    //receber os dados do formuário que são enviados por post
    //req.checkBody('newPassword').isLength({ min: 5, max: 20 }).withMessage('Username should have between 5 and 20 chars');
    //const errors = validationResult(req);
    //if (errors.isEmpty()) {
    const password = req.sanitize('newPassword').escape();
    const id_operational = req.sanitize('id_operational').escape();
    let query = "";
    query = connect.con.query('UPDATE login INNER JOIN operational ON login.id_login=operational.id_login and id_operational=?  SET login.password=?  ', [id_operational, password], function(err, rows, fields) {
        console.log(query.sql);
        if (!err) {
            console.log("Number of records updateOperationald: " + rows.affectedRows);
            res.status(200).send({ "msg": "updateOperational with success" });
        }
        else {
            res.status(400).send({ "msg": err.code });
            console.log('Error while performing Query.', err);
        }
    });
    /* }
     else {
         return res.status(400).json({ errors: errors.array() });
     }*/
}

//função que apaga todos os dados de um iduser
function deleteOperationalID(req, res) {
    //criar e executar a query de leitura na BD
    const id_operational = req.sanitize('id_operational').escape();
    const post = {
        id_operational: id_operational
    };
    connect.con.query('delete from operational where id_operational = ?', post, function(err, rows, fields) {
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

module.exports = {
    readOperational: readOperational,
    readOperationalPoints: readOperationalPoints,
    readOccurrenceFromOperational: readOccurrenceFromOperational,
    readIDOperational: readIDOperational,
    saveOperational: saveOperational,
    updateOperational: updateOperational,
    deleteOperationalID: deleteOperationalID
};
