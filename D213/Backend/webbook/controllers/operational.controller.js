const connect = require('../config/connect');
const { validationResult } = require('express-validator/check');
const localStorage = require('localStorage');
let bCrypt = require('bcrypt-nodejs');

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
    connect.con.query('SELECT occurrence.id_occurrence,occurrence.local,occurrence.distance,occurrence.occurrence_type,occurrence.status,occurrence.arrival,occurrence.departure,occurrence.cost,occurrence.origin,occurrence.description,occurrence.id_entity,occurrence.id_request, points FROM occurrence,operational_occurrence where id_operational=? and occurrence.id_occurrence=operational_occurrence.id_occurrence', [id_operational], function(err,
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
    connect.con.query('SELECT operational.*,users.email from operational,users where operational.id_operational = ? and users.id=operational.id', [id_operational],
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

//alterar pass
function alt(password) {

    return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
}
//efetuar updade de todos os dados para um determinado iduser
function updateOperational(req, res) {

    const errors = validationResult(req);
    if (errors.isEmpty()) {
        const password = req.sanitize('newPassword', 'invalid Password').escape()
        const confirmPassword = req.sanitize('confirmPassword').escape();
        const id_operational = req.sanitize('id_operational').escape();
         let userPassword = alt(password);
        let query = "";
        query = connect.con.query('UPDATE users INNER JOIN operational ON users.id=operational.id and id_operational=?  SET users.password=?  ', [id_operational, userPassword], function(err, rows, fields) {
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
    }
    else {
        return res.status(400).json({ errors: errors.array() });
    }
}
function updateAvatar(req, res) {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        const avatar = localStorage.getItem("localUploadedFileName");
        console.log(avatar);
        const id_operational = req.sanitize('id_operational').escape();
        let query = "";
        query = connect.con.query('UPDATE users INNER JOIN operational ON users.id=operational.id and id_operational=?  SET avatar=?  ', [id_operational, avatar], function(err, rows, fields) {
            console.log(query.sql);
            if (!err) {
                console.log("Number of records updateAvatar: " + rows.affectedRows);
                res.status(200).send({ "msg": "updateAvatar with success" });
            }
            else {
                res.status(400).send({ "msg": err.code });
                console.log('Error while performing Query.', err);
            }
        });
    }
    else {
        return res.status(400).json({ errors: errors.array() });
    }
}

module.exports = {
    readOperational: readOperational,
    readOperationalPoints: readOperationalPoints,
    readOccurrenceFromOperational: readOccurrenceFromOperational,
    readIDOperational: readIDOperational,
    updateOperational: updateOperational,
    updateAvatar: updateAvatar
};
