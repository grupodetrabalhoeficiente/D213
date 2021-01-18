{"filter":false,"title":"occurrence.controller.js","tooltip":"/D213/Backend/webbook/controllers/occurrence.controller.js","undoManager":{"mark":6,"position":6,"stack":[[{"start":{"row":690,"column":0},"end":{"row":715,"column":1},"action":"insert","lines":["//função de gravação que recebe os 5 parametros","function saveOccurrenceHelpRequest(req, res) {","    //receber os dados do formuário que são enviados por post","    const id_occurrence = req.sanitize('id_occurrence').escape();","    const reason = req.sanitize('reason').escape();","    const num_operationals = req.sanitize('num_operationals').escape();","    const num_materials = req.sanitize('num_materials').escape();","    const material_type = req.sanitize('material_type').escape();","    let query = \"\";","    query = connect.con.query('INSERT INTO ?? (??,??,??,??,??) VALUES (?,?,?,?,?)', [\"help_request\", \"id_occurrence\", \"reason\", \"num_operationals\", \"num_materials\", \"material_type\", id_occurrence, reason, num_operationals, num_materials, material_type], function(err, rows, fields) {","        console.log(query.sql);","        if (!err) {","            res.status(200).location(rows.insertId).send({","                \"msg\": \"inserted with success\"","            });","            console.log(\"Number of records inserted: \" + rows.affectedRows);","        }","        else {","            if (err.code == \"ER_DUP_ENTRY\") {","                res.status(409).send({ \"msg\": err.code });","                console.log('Error while performing Query.', err);","            }","            else res.status(400).send({ \"msg\": err.code });","        }","    });","}"],"id":69}],[{"start":{"row":751,"column":30},"end":{"row":751,"column":31},"action":"insert","lines":[","],"id":70}],[{"start":{"row":751,"column":31},"end":{"row":752,"column":0},"action":"insert","lines":["",""],"id":71},{"start":{"row":752,"column":0},"end":{"row":752,"column":4},"action":"insert","lines":["    "]},{"start":{"row":752,"column":4},"end":{"row":753,"column":0},"action":"insert","lines":["",""]},{"start":{"row":753,"column":0},"end":{"row":753,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":753,"column":4},"end":{"row":753,"column":56},"action":"insert","lines":["saveOccurrenceHelpRequest: saveOccurrenceHelpRequest"],"id":72}],[{"start":{"row":752,"column":0},"end":{"row":752,"column":4},"action":"remove","lines":["    "],"id":73}],[{"start":{"row":668,"column":0},"end":{"row":689,"column":1},"action":"remove","lines":["//função que apaga todos os dados de um iduser","function deleteIDNote(req, res) { // nao devemos usar","    //criar e executar a query de leitura na BD","    const id_note = req.sanitize('id_note').escape();","    connect.con.query('DELETE from note where id_note = ?', [id_note], function(err, rows, fields) {","        if (!err) {","            //verifica os resultados se o número de linhas for 0 devolve dados não encontrados, caso contrário envia os resultados (rows).","            if (rows.length == 0) {","                res.status(404).send({","                    \"msg\": \"data not found\"","                });","            }","            else {","                res.status(200).send({","                    \"msg\": \"success\"","                });","            }","        }","        else","            console.log('Error while performing Query.', err);","    });","}"],"id":74}],[{"start":{"row":730,"column":0},"end":{"row":730,"column":31},"action":"remove","lines":["    deleteIDNote: deleteIDNote,"],"id":75},{"start":{"row":729,"column":23},"end":{"row":730,"column":0},"action":"remove","lines":["",""]}]]},"ace":{"folds":[],"scrolltop":11902,"scrollleft":0,"selection":{"start":{"row":731,"column":4},"end":{"row":731,"column":29},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":66,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1610927018519,"hash":"ca00f9ac4ca9ed20f8dcb11bc944b4aac6391eba"}