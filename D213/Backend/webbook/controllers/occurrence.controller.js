const connect = require('../config/connect');
const { validationResult } = require('express-validator/check');

//função de leitura que retorna o resultado no callback
function readOccurrence(req, res) {
    //criar e executar a query de leitura na BD
    connect.con.query('SELECT * from occurrence order by id_occurrence', function(err,
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

function readOccurrenceMonths(req, res) {
    //criar e executar a query de leitura na BD
    connect.con.query('SELECT * from occurrence order by id_occurrence', function(err,
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

function readOccurrenceUnfinished(req, res) {
    //criar e executar a query de leitura na BD
    connect.con.query('SELECT * from occurrence where status=? order by id_occurrence', ['Em progresso'], function(err,
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
function readIDOccurrence(req, res) {
    //criar e executar a query de leitura na BD
    const id_occurrence = req.sanitize('id_occurrence').escape();
    connect.con.query('SELECT * from occurrence where id_occurrence = ?', [id_occurrence],
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

function updateOccurrenceStatus(req, res) {
    //receber os dados do formuário que são enviados por post
    const id_occurrence = req.sanitize('id_occurrence').escape();
    let query = "";
    query = connect.con.query('update ?? SET status=? where id_occurrence=?', ['occurrence', "Finalizada", id_occurrence], function(err, rows,
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

//                    Operational- Occurrence

//função de leitura que retorna o resultado de operational_ocorrence no callback
function readOperationalOccurrence(req, res) { // nao deve ser preciso
    //criar e executar a query de leitura na BD
    connect.con.query('SELECT * FROM operational_occurrence order by id_occurrence', function(err,
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

function readOperationalFromOccurrence(req, res) {
    //criar e executar a query de leitura na BD
    const id_occurrence = req.sanitize('id_occurrence').escape();
    connect.con.query('SELECT * FROM operational_occurrence where id_occurrence=?', [id_occurrence], function(err,
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

//função de leitura que retorna o resultado de um operational ocurrence
function readIDOperationalOccurrence(req, res) {
    //criar e executar a query de leitura na BD
    const id_operational = req.sanitize('id_operational').escape();
    const id_occurrence = req.sanitize('id_occurrence').escape();
    connect.con.query('SELECT * from operational_occurrence where id_operational = ? and id_occurrence = ?', [id_operational, id_occurrence],
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

function readPresentOperationalOccurrence(req, res) {
    const id_occurrence = req.sanitize('id_occurrence').escape();
    //criar e executar a query de leitura na BD
    connect.con.query('SELECT * FROM operational_occurrence where id_occurrence=? and presence=?', [id_occurrence, 'true'], function(err,
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

function updateOperationalOccurrenceArrival(req, res) { // ver esta
    const arrival = req.sanitize('arrival').escape();
    const id_operational = req.sanitize('id_operational').escape();
    const id_occurrence = req.sanitize('id_occurrence').escape();
    let query = "";
    query = connect.con.query('Update ?? SET arrival = ? where id_operational=? and id_occurrence=?', ["operational_occurrence", arrival, id_operational, id_occurrence], function(err, rows,
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

function updateOperationalOccurrenceDeparture(req, res) {
    const departure = req.sanitize('departure').escape();
    const id_operational = req.sanitize('id_operational').escape();
    const id_occurrence = req.sanitize('id_occurrence').escape();
    let query = "";
    query = connect.con.query('Update ?? SET departure = ? where id_operational=? and id_occurrence=?', ["operational_occurrence", departure, id_operational, id_occurrence], function(err, rows,
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

function updateOperationalOccurrencePoints(req, res) {
    const points = req.sanitize('points').escape();
    const id_operational = req.sanitize('id_operational').escape();
    const id_occurrence = req.sanitize('id_occurrence').escape();
    let query = "";
    query = connect.con.query('Update ?? SET points = ? where id_operational=? and id_occurrence=?', ["operational_occurrence", points, id_operational, id_occurrence], function(err, rows,
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

function updateOperationalOccurrencePresence(req, res) {
    const presence = req.sanitize('presence').escape();
    const id_operational = req.sanitize('id_operational').escape();
    const id_occurrence = req.sanitize('id_occurrence').escape();
    let query = "";
    query = connect.con.query('Update ?? SET presence = ? where id_operational=? and id_occurrence=?', ["operational_occurrence", presence, id_operational, id_occurrence], function(err, rows,
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

//                     Witness- occurrence

//função de leitura que retorna o resultado de witness_ocorrence no callback
function readWitnessOccurrence(req, res) {
    //criar e executar a query de leitura na BD
    connect.con.query('SELECT * FROM witness_occurrence order by id_occurrence', function(err,
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

function readWitnessFromOccurrence(req, res) {
    //criar e executar a query de leitura na BD
    const id_occurrence = req.sanitize('id_occurrence').escape();
    connect.con.query('SELECT * FROM witness_occurrence where id_occurrence=?', [id_occurrence], function(err,
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
//função de leitura que retorna o resultado de um witness id
function readIDWitnessOccurrence(req, res) {
    //criar e executar a query de leitura na BD
    const id_witness = req.sanitize('id_witness').escape();
    const id_occurrence = req.sanitize('id_occurrence').escape();
    connect.con.query('SELECT * from witness_occurrence where id_witness = ? and id_occurrence = ?', [id_witness, id_occurrence],
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

function saveWitnessOccurrence(req, res) {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        const id_occurrence = req.sanitize('id_occurrence').escape();
        const testimony = req.sanitize('testimony').escape();
        const justification = req.sanitize('justification').escape();
        const name = req.sanitize('name').escape();
        const email = req.sanitize('email').escape();
        const place = req.sanitize('place').escape();
        const profession = req.sanitize('profession').escape();
        const id_witness = /*req.sanitize('id_witness').escape();*/ "zeulo";
        let query = "";
        query = connect.con.query('INSERT INTO ?? VALUES (?,?,?,?,?,?,?,?)', ["witness_occurrence", id_occurrence, id_witness, testimony, justification, name, email, place, profession], function(err, rows, fields) {
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
    else {
        return res.status(400).json({ errors: errors.array() });
    }
}

function updateWitnessOccurrence(req, res) { // nao deve ser preciso
    //receber os dados do formuário que são enviados por post
    const testimony = req.sanitize('testimony').escape();
    const date = req.sanitize('date').escape();
    const group_nr = req.sanitize('group_nr').escape();
    const justification = req.sanitize('justification').escape();
    const id_witness = req.sanitize('id_witness').escape();
    const id_occurrence = req.sanitize('id_occurrence').escape();
    let query = "";
    query = connect.con.query('Update ?? SET testimony = ?, date =?, group_nr=? ,justification=?, where id_witness=? and id_occurrence=?', ["witness_occurrence", testimony, date, group_nr, justification, id_witness, id_occurrence], function(err, rows,
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

//função que apaga todos os dados de um witness_occurrence
function deleteIDWitnessOccurrence(req, res) { // nao deve ser preciso
    //criar e executar a query de leitura na BD
    const id_witness = req.sanitize('id_witness').escape();
    const id_occurrence = req.sanitize('id_occurrence').escape();
    const post = {
        id_witness: id_witness,
        id_occurrence: id_occurrence
    };
    connect.con.query('DELETE from witness_occurrence where id_witness = ? and id_occurrence=?', post, function(err, rows, fields) {
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

//                          VehicleMaterialOcurrence


function readVehicleMaterialFromOccurrence(req, res) {
    //criar e executar a query de leitura na BD
    const id_occurrence = req.sanitize('id_occurrence').escape();
    connect.con.query('SELECT * FROM occur_vehic_material where id_occurrence=?', [id_occurrence], function(err,
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

//função de leitura que retorna o resultado de um VehicleMaterialOccurrence
function readIDVehicleMaterialOccurrence(req, res) {
    //criar e executar a query de leitura na BD
    const id_vei_mat = req.sanitize('id_vei_mat').escape();
    const id_occurrence = req.sanitize('id_occurrence').escape();
    connect.con.query('SELECT * from occur_vehic_material where id_vei_mat = ? and id_occurrence = ?', [id_vei_mat, id_occurrence],
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

function readConfirmedVehicleMaterialOccurrence(req, res) {
    const id_occurrence = req.sanitize('id_occurrence').escape();
    const confirmation = 1;
    //criar e executar a query de leitura na BD
    connect.con.query('SELECT * FROM occur_vehic_material where id_occurrence=? and confirmation=?', [id_occurrence, confirmation], function(err,
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
        console.log(req);
    });
}

function updateVehicleMaterialOccurrenceConfirmation(req, res) {
    //receber os dados do formuário que são enviados por post
    const id_occurrence = req.sanitize('id_occurrence').escape();
    const id_vei_mat = req.sanitize('id_vei_mat').escape();
    const confirmation = req.sanitize('confirmation').escape();
    let query = "";
    query = connect.con.query('Update ?? SET confirmation = ? where id_vei_mat=? and id_occurrence=?', ["occur_vehic_material", confirmation, id_vei_mat, id_occurrence], function(err, rows,
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

function updateVehicleMaterialOccurrenceUtilization(req, res) {
    //receber os dados do formuário que são enviados por post
    const id_occurrence = req.sanitize('id_occurrence').escape();
    const id_vei_mat = req.sanitize('id_vei_mat').escape();
    const utilization = req.sanitize('utilization').escape();
    let query = "";
    query = connect.con.query('Update ?? SET utilization = ? where id_vei_mat=? and id_occurrence=?', ["occur_vehic_material", utilization, id_vei_mat, id_occurrence], function(err, rows,
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

// Note

//função de leitura que retorna o resultado no callback
function readNoteFromOccurrence(req, res) {
    //criar e executar a query de leitura na BD
    const id_occurrence = req.sanitize('id_occurrence').escape();
    connect.con.query('SELECT * FROM note where id_occurrence=?', [id_occurrence], function(err,
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
function readIDNote(req, res) {
    //criar e executar a query de leitura na BD
    const id_note = req.sanitize('id_note').escape();
    const id_occurrence = req.sanitize('id_occurrence').escape();
    connect.con.query('SELECT * from note where id_note = ? and id_occurrence=?', [id_note, id_occurrence],
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

//função de gravação que recebe os 3 parâmetros
function saveNote(req, res) {
    //receber os dados do formuário que são enviados por post
    const id_note = /*req.sanitize('id_note').escape();*/ "nota99";
    const description = req.sanitize('description').escape();
    const id_occurrence = req.sanitize('id_occurrence').escape();
    let query = "";
    query = connect.con.query('INSERT INTO ?? VALUES (?,?,?)', ["note", id_note, description, id_occurrence], function(err, rows, fields) {
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

//função que apaga todos os dados de um iduser
function deleteIDNote(req, res) { // nao devemos usar
    //criar e executar a query de leitura na BD
    const id_note = req.sanitize('id_note').escape();
    connect.con.query('DELETE from note where id_note = ?', [id_note], function(err, rows, fields) {
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
    readOccurrence: readOccurrence,
    readOccurrenceMonths: readOccurrenceMonths,
    readOccurrenceUnfinished: readOccurrenceUnfinished,
    readIDOccurrence: readIDOccurrence,
    updateOccurrenceStatus: updateOccurrenceStatus,

    readOperationalOccurrence: readOperationalOccurrence,
    readOperationalFromOccurrence: readOperationalFromOccurrence,
    readIDOperationalOccurrence: readIDOperationalOccurrence,
    readPresentOperationalOccurrence: readPresentOperationalOccurrence,
    updateOperationalOccurrenceArrival: updateOperationalOccurrenceArrival,
    updateOperationalOccurrenceDeparture: updateOperationalOccurrenceDeparture,
    updateOperationalOccurrencePoints: updateOperationalOccurrencePoints,
    updateOperationalOccurrencePresence: updateOperationalOccurrencePresence,

    readWitnessOccurrence: readWitnessOccurrence,
    readWitnessFromOccurrence: readWitnessFromOccurrence,
    readIDWitnessOccurrence: readIDWitnessOccurrence,
    saveWitnessOccurrence: saveWitnessOccurrence,
    updateWitnessOccurrence: updateWitnessOccurrence,
    deleteIDWitnessOccurrence: deleteIDWitnessOccurrence,

    readVehicleMaterialFromOccurrence: readVehicleMaterialFromOccurrence,
    readIDVehicleMaterialOccurrence: readIDVehicleMaterialOccurrence,
    readConfirmedVehicleMaterialOccurrence: readConfirmedVehicleMaterialOccurrence,
    updateVehicleMaterialOccurrenceConfirmation: updateVehicleMaterialOccurrenceConfirmation,
    updateVehicleMaterialOccurrenceUtilization: updateVehicleMaterialOccurrenceUtilization,

    readNoteFromOccurrence: readNoteFromOccurrence,
    readIDNote: readIDNote,
    saveNote: saveNote,
    deleteIDNote: deleteIDNote
};
