const connect = require('../config/connect');
const { validationResult } = require('express-validator/check');

//função de leitura que retorna o resultado no callback
function readOccurrence(req, res) {
    //criar e executar a query de leitura na BD
    connect.con.query('SELECT * from occurrence where status=? order by id_occurrence', ['Finalizada'], function(err,
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
    connect.con.query('SELECT * from occurrence where status=? order by id_occurrence', ['Em curso'], function(err,
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

function updateOccurrenceArrival(req, res) {
    //receber os dados do formuário que são enviados por post
    const id_occurrence = req.sanitize('id_occurrence').escape();
    const arrival = req.sanitize('arrival').escape();
    let query = "";
    query = connect.con.query('update ?? SET arrival=? where id_occurrence=?', ['occurrence', arrival, id_occurrence], function(err, rows,
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

function updateOccurrenceDeparture(req, res) {
    //receber os dados do formuário que são enviados por post
    const id_occurrence = req.sanitize('id_occurrence').escape();
    const departure = req.sanitize('departure').escape();
    let query = "";
    query = connect.con.query('update ?? SET departure=? where id_occurrence=?', ['occurrence', departure, id_occurrence], function(err, rows,
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
    connect.con.query('SELECT * FROM operational_occurrence left join operational ON operational.id_operational=operational_occurrence.id_operational where operational_occurrence.id_occurrence=? order by operational_occurrence.id_operational', [id_occurrence], function(err,
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
    connect.con.query('SELECT * from operational_occurrence left join operational ON operational.id_operational=operational_occurrence.id_operational where operational_occurrence.id_operational = ? and operational_occurrence.id_occurrence = ?', [id_operational, id_occurrence],
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
    connect.con.query('SELECT operational_occurrence.*, operational.* FROM operational_occurrence, operational where id_occurrence=? and presence=? and operational_occurrence.id_operational=operational.id_operational order by operational_occurrence.id_operational', [id_occurrence, '1'], function(err,
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
    const errors = validationResult(req);
    if (errors.isEmpty()) {
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
    else {
        return res.status(400).json({ errors: errors.array() });
    }
}

function updateOperationalOccurrenceDeparture(req, res) {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
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
    else {
        return res.status(400).json({ errors: errors.array() });
    }
}

function updateOperationalOccurrencePoints(req, res) {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
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
    else {
        return res.status(400).json({ errors: errors.array() });
    }
}

function updateOperationalOccurrencePresence(req, res) {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
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
    else {
        return res.status(400).json({ errors: errors.array() });
    }
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
        let query = "";
        query = connect.con.query('INSERT INTO ?? (??,??,??,??,??,??,??) VALUES (?,?,?,?,?,?,?)', ["witness_occurrence", "id_occurrence", "testimony", "justification", "name", "email", "place", "profession", id_occurrence, testimony, justification, name, email, place, profession], function(err, rows, fields) {
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

//                          VehicleMaterialOcurrence


function readVehicleMaterialFromOccurrence(req, res) {
    //criar e executar a query de leitura na BD
    const id_occurrence = req.sanitize('id_occurrence').escape();
    connect.con.query('SELECT occur_vehic_material.*, material.* FROM occur_vehic_material, vehicle_material,material where id_occurrence=? and occur_vehic_material.id_vei_mat=vehicle_material.id_vei_mat and vehicle_material.id_material=material.id_material order by id_vei_mat', [id_occurrence], function(err,
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
    const confirmation = '1';
    //criar e executar a query de leitura na BD
    connect.con.query('SELECT occur_vehic_material.*, material.* FROM occur_vehic_material, vehicle_material, material where id_occurrence=? and confirmation=? and occur_vehic_material.id_vei_mat=vehicle_material.id_vei_mat and vehicle_material.id_material=material.id_material order by id_vei_mat', [id_occurrence, confirmation], function(err,
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

function updateVehicleMaterialOccurrenceConfirmation(req, res) {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
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
    else {
        return res.status(400).json({ errors: errors.array() });
    }
}

function updateVehicleMaterialOccurrenceUtilization(req, res) {
    //receber os dados do formuário que são enviados por post
    const errors = validationResult(req);
    if (errors.isEmpty()) {
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
    else {
        return res.status(400).json({ errors: errors.array() });
    }
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


function saveNote(req, res) {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        const description = req.sanitize('description').escape();
        const id_occurrence = req.sanitize('id_occurrence').escape();
        let query = "";
        query = connect.con.query('INSERT INTO ?? (??,??) VALUES (?,?);', ["note", "id_occurrence", "description", id_occurrence, description], function(err, rows, fields) {
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


//função de gravação que recebe os 5 parametros
function saveOccurrenceHelpRequest(req, res) {
    //receber os dados do formuário que são enviados por post
    const id_occurrence = req.sanitize('id_occurrence').escape();
    const reason = req.sanitize('reason').escape();
    const num_operationals = req.sanitize('num_operationals').escape();
    const num_materials = req.sanitize('num_materials').escape();
    const material_type = req.sanitize('material_type').escape();
    let query = "";
    query = connect.con.query('INSERT INTO ?? (??,??,??,??,??) VALUES (?,?,?,?,?)', ["help_request", "id_occurrence", "reason", "num_operationals", "num_materials", "material_type", id_occurrence, reason, num_operationals, num_materials, material_type], function(err, rows, fields) {
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

module.exports = {
    readOccurrence: readOccurrence,
    readOccurrenceMonths: readOccurrenceMonths,
    readOccurrenceUnfinished: readOccurrenceUnfinished,
    readIDOccurrence: readIDOccurrence,
    updateOccurrenceStatus: updateOccurrenceStatus,
    updateOccurrenceArrival: updateOccurrenceArrival,
    updateOccurrenceDeparture: updateOccurrenceDeparture,

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

    readVehicleMaterialFromOccurrence: readVehicleMaterialFromOccurrence,
    readIDVehicleMaterialOccurrence: readIDVehicleMaterialOccurrence,
    readConfirmedVehicleMaterialOccurrence: readConfirmedVehicleMaterialOccurrence,
    updateVehicleMaterialOccurrenceConfirmation: updateVehicleMaterialOccurrenceConfirmation,
    updateVehicleMaterialOccurrenceUtilization: updateVehicleMaterialOccurrenceUtilization,

    readNoteFromOccurrence: readNoteFromOccurrence,
    readIDNote: readIDNote,
    saveNote: saveNote,

    saveOccurrenceHelpRequest: saveOccurrenceHelpRequest
};