{"filter":false,"title":"help_request.controller.js","tooltip":"/D213/Backend/webbook/controllers/help_request.controller.js","undoManager":{"mark":82,"position":82,"stack":[[{"start":{"row":25,"column":0},"end":{"row":36,"column":3},"action":"remove","lines":["/*function queryRow(req,res) { // mostra a tabela toda","    let selectQuery = 'SELECT * FROM ??';","    let query = mysql.format(selectQuery, ['witness']);","    connect.con.query(query, (err, data) => {","        if (err) {","            console.error(err);","            return;","        }","        // rows fetch","        console.log(query);","    });","}*/"],"id":2},{"start":{"row":24,"column":0},"end":{"row":25,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":6,"column":0},"end":{"row":51,"column":1},"action":"remove","lines":["//função de leitura que retorna o resultado de witness no callback","function readHelpRequest(req, res) {","    //criar e executar a query de leitura na BD","    connect.con.query('SELECT * FROM help_request order by request_id', function(err,","        rows, fields) {","        if (!err) {","            //verifica os resultados se o número de linhas for 0 devolve dados não encontrados, caso contrário envia os resultados (rows).","            if (rows.length == 0) {","                res.status(404).send(\"Data not found\");","            }","            else {","                res.status(200).send(rows);","            }","        }","        else","            console.log('Error while performing Query.', err);","    });","}","","//função de leitura que retorna o resultado de um iduser","function readIDHelpRequest(req, res) {","    //criar e executar a query de leitura na BD","    const request_id = req.sanitize('request_id').escape();","    const post = {","        request_id: request_id","    };","    connect.con.query('SELECT * from help_request where request_id = ?', post,","        function(err, rows, fields) {","            if (!err) {","                //verifica os resultados se o número de linhas for 0 devolve dados não encontrados, caso contrário envia os resultados (rows).","                if (rows.length == 0) {","                    res.status(404).send({","                        \"msg\": \"data not found\"","                    });","                }","                else {","                    res.status(200).send(rows);","                }","            }","            else","                res.status(400).send({","                    \"msg\": err.code","                });","            console.log('Error while performing Query.', err);","        });","}"],"id":3}],[{"start":{"row":14,"column":45},"end":{"row":14,"column":46},"action":"insert","lines":["("],"id":5}],[{"start":{"row":14,"column":46},"end":{"row":14,"column":47},"action":"insert","lines":["?"],"id":6},{"start":{"row":14,"column":47},"end":{"row":14,"column":48},"action":"insert","lines":["?"]}],[{"start":{"row":14,"column":48},"end":{"row":14,"column":49},"action":"insert","lines":[","],"id":7}],[{"start":{"row":14,"column":49},"end":{"row":14,"column":50},"action":"insert","lines":["?"],"id":8},{"start":{"row":14,"column":50},"end":{"row":14,"column":51},"action":"insert","lines":["?"]},{"start":{"row":14,"column":51},"end":{"row":14,"column":52},"action":"insert","lines":[","]},{"start":{"row":14,"column":52},"end":{"row":14,"column":53},"action":"insert","lines":["?"]}],[{"start":{"row":14,"column":53},"end":{"row":14,"column":54},"action":"insert","lines":["?"],"id":9},{"start":{"row":14,"column":54},"end":{"row":14,"column":55},"action":"insert","lines":[","]},{"start":{"row":14,"column":55},"end":{"row":14,"column":56},"action":"insert","lines":["?"]},{"start":{"row":14,"column":56},"end":{"row":14,"column":57},"action":"insert","lines":["?"]},{"start":{"row":14,"column":57},"end":{"row":14,"column":58},"action":"insert","lines":[","]}],[{"start":{"row":14,"column":58},"end":{"row":14,"column":59},"action":"insert","lines":["?"],"id":10},{"start":{"row":14,"column":59},"end":{"row":14,"column":60},"action":"insert","lines":["?"]},{"start":{"row":14,"column":60},"end":{"row":14,"column":61},"action":"insert","lines":[")"]}],[{"start":{"row":14,"column":45},"end":{"row":14,"column":46},"action":"insert","lines":[" "],"id":11}],[{"start":{"row":14,"column":74},"end":{"row":14,"column":75},"action":"insert","lines":["?"],"id":12},{"start":{"row":14,"column":75},"end":{"row":14,"column":76},"action":"insert","lines":[";"]},{"start":{"row":14,"column":76},"end":{"row":14,"column":77},"action":"insert","lines":["?"]}],[{"start":{"row":14,"column":76},"end":{"row":14,"column":77},"action":"remove","lines":["?"],"id":13},{"start":{"row":14,"column":75},"end":{"row":14,"column":76},"action":"remove","lines":[";"]},{"start":{"row":14,"column":74},"end":{"row":14,"column":75},"action":"remove","lines":["?"]}],[{"start":{"row":14,"column":74},"end":{"row":14,"column":75},"action":"insert","lines":["?"],"id":14},{"start":{"row":14,"column":75},"end":{"row":14,"column":76},"action":"insert","lines":[","]},{"start":{"row":14,"column":76},"end":{"row":14,"column":77},"action":"insert","lines":["?"]}],[{"start":{"row":14,"column":76},"end":{"row":14,"column":77},"action":"remove","lines":["?"],"id":15},{"start":{"row":14,"column":75},"end":{"row":14,"column":76},"action":"remove","lines":[","]},{"start":{"row":14,"column":74},"end":{"row":14,"column":75},"action":"remove","lines":["?"]}],[{"start":{"row":14,"column":74},"end":{"row":14,"column":75},"action":"insert","lines":[","],"id":16},{"start":{"row":14,"column":75},"end":{"row":14,"column":76},"action":"insert","lines":["?"]},{"start":{"row":14,"column":76},"end":{"row":14,"column":77},"action":"insert","lines":[","]},{"start":{"row":14,"column":77},"end":{"row":14,"column":78},"action":"insert","lines":["?"]},{"start":{"row":14,"column":78},"end":{"row":14,"column":79},"action":"insert","lines":[","]}],[{"start":{"row":14,"column":79},"end":{"row":14,"column":80},"action":"insert","lines":["?"],"id":17}],[{"start":{"row":14,"column":100},"end":{"row":14,"column":102},"action":"insert","lines":["\"\""],"id":18}],[{"start":{"row":14,"column":101},"end":{"row":14,"column":102},"action":"insert","lines":["I"],"id":19},{"start":{"row":14,"column":102},"end":{"row":14,"column":103},"action":"insert","lines":["D"]}],[{"start":{"row":14,"column":102},"end":{"row":14,"column":103},"action":"remove","lines":["D"],"id":20},{"start":{"row":14,"column":101},"end":{"row":14,"column":102},"action":"remove","lines":["I"]}],[{"start":{"row":14,"column":101},"end":{"row":14,"column":102},"action":"insert","lines":["i"],"id":21},{"start":{"row":14,"column":102},"end":{"row":14,"column":103},"action":"insert","lines":["d"]},{"start":{"row":14,"column":103},"end":{"row":14,"column":104},"action":"insert","lines":["_"]},{"start":{"row":14,"column":104},"end":{"row":14,"column":105},"action":"insert","lines":["o"]},{"start":{"row":14,"column":105},"end":{"row":14,"column":106},"action":"insert","lines":["c"]},{"start":{"row":14,"column":106},"end":{"row":14,"column":107},"action":"insert","lines":["c"]}],[{"start":{"row":14,"column":107},"end":{"row":14,"column":108},"action":"insert","lines":["u"],"id":22},{"start":{"row":14,"column":108},"end":{"row":14,"column":109},"action":"insert","lines":["r"]},{"start":{"row":14,"column":109},"end":{"row":14,"column":110},"action":"insert","lines":["r"]},{"start":{"row":14,"column":110},"end":{"row":14,"column":111},"action":"insert","lines":["e"]},{"start":{"row":14,"column":111},"end":{"row":14,"column":112},"action":"insert","lines":["n"]},{"start":{"row":14,"column":112},"end":{"row":14,"column":113},"action":"insert","lines":["c"]},{"start":{"row":14,"column":113},"end":{"row":14,"column":114},"action":"insert","lines":["e"]}],[{"start":{"row":14,"column":115},"end":{"row":14,"column":116},"action":"insert","lines":[","],"id":23}],[{"start":{"row":14,"column":116},"end":{"row":14,"column":117},"action":"insert","lines":["r"],"id":24},{"start":{"row":14,"column":117},"end":{"row":14,"column":118},"action":"insert","lines":["e"]},{"start":{"row":14,"column":118},"end":{"row":14,"column":119},"action":"insert","lines":["a"]},{"start":{"row":14,"column":119},"end":{"row":14,"column":120},"action":"insert","lines":["s"]},{"start":{"row":14,"column":120},"end":{"row":14,"column":121},"action":"insert","lines":["o"]},{"start":{"row":14,"column":121},"end":{"row":14,"column":122},"action":"insert","lines":["n"]}],[{"start":{"row":14,"column":122},"end":{"row":14,"column":123},"action":"insert","lines":[","],"id":25}],[{"start":{"row":14,"column":123},"end":{"row":14,"column":124},"action":"insert","lines":["n"],"id":26}],[{"start":{"row":14,"column":123},"end":{"row":14,"column":124},"action":"remove","lines":["n"],"id":27},{"start":{"row":14,"column":122},"end":{"row":14,"column":123},"action":"remove","lines":[","]},{"start":{"row":14,"column":121},"end":{"row":14,"column":122},"action":"remove","lines":["n"]},{"start":{"row":14,"column":120},"end":{"row":14,"column":121},"action":"remove","lines":["o"]},{"start":{"row":14,"column":119},"end":{"row":14,"column":120},"action":"remove","lines":["s"]},{"start":{"row":14,"column":118},"end":{"row":14,"column":119},"action":"remove","lines":["a"]},{"start":{"row":14,"column":117},"end":{"row":14,"column":118},"action":"remove","lines":["e"]},{"start":{"row":14,"column":116},"end":{"row":14,"column":117},"action":"remove","lines":["r"]}],[{"start":{"row":14,"column":116},"end":{"row":14,"column":118},"action":"insert","lines":["\"\""],"id":28}],[{"start":{"row":14,"column":117},"end":{"row":14,"column":118},"action":"insert","lines":["r"],"id":29},{"start":{"row":14,"column":118},"end":{"row":14,"column":119},"action":"insert","lines":["e"]},{"start":{"row":14,"column":119},"end":{"row":14,"column":120},"action":"insert","lines":["a"]},{"start":{"row":14,"column":120},"end":{"row":14,"column":121},"action":"insert","lines":["s"]},{"start":{"row":14,"column":121},"end":{"row":14,"column":122},"action":"insert","lines":["o"]},{"start":{"row":14,"column":122},"end":{"row":14,"column":123},"action":"insert","lines":["n"]}],[{"start":{"row":14,"column":124},"end":{"row":14,"column":125},"action":"insert","lines":[","],"id":30}],[{"start":{"row":14,"column":125},"end":{"row":14,"column":127},"action":"insert","lines":["\"\""],"id":31}],[{"start":{"row":14,"column":126},"end":{"row":14,"column":127},"action":"insert","lines":["n"],"id":32},{"start":{"row":14,"column":127},"end":{"row":14,"column":128},"action":"insert","lines":["u"]},{"start":{"row":14,"column":128},"end":{"row":14,"column":129},"action":"insert","lines":["m"]},{"start":{"row":14,"column":129},"end":{"row":14,"column":130},"action":"insert","lines":["_"]},{"start":{"row":14,"column":130},"end":{"row":14,"column":131},"action":"insert","lines":["o"]},{"start":{"row":14,"column":131},"end":{"row":14,"column":132},"action":"insert","lines":["p"]},{"start":{"row":14,"column":132},"end":{"row":14,"column":133},"action":"insert","lines":["e"]},{"start":{"row":14,"column":133},"end":{"row":14,"column":134},"action":"insert","lines":["r"]},{"start":{"row":14,"column":134},"end":{"row":14,"column":135},"action":"insert","lines":["a"]},{"start":{"row":14,"column":135},"end":{"row":14,"column":136},"action":"insert","lines":["t"]},{"start":{"row":14,"column":136},"end":{"row":14,"column":137},"action":"insert","lines":["i"]}],[{"start":{"row":14,"column":137},"end":{"row":14,"column":138},"action":"insert","lines":["o"],"id":33},{"start":{"row":14,"column":138},"end":{"row":14,"column":139},"action":"insert","lines":["n"]},{"start":{"row":14,"column":139},"end":{"row":14,"column":140},"action":"insert","lines":["a"]},{"start":{"row":14,"column":140},"end":{"row":14,"column":141},"action":"insert","lines":["l"]},{"start":{"row":14,"column":141},"end":{"row":14,"column":142},"action":"insert","lines":["s"]}],[{"start":{"row":14,"column":143},"end":{"row":14,"column":144},"action":"insert","lines":[","],"id":34},{"start":{"row":14,"column":144},"end":{"row":14,"column":145},"action":"insert","lines":["n"]},{"start":{"row":14,"column":145},"end":{"row":14,"column":146},"action":"insert","lines":["u"]},{"start":{"row":14,"column":146},"end":{"row":14,"column":147},"action":"insert","lines":["m"]}],[{"start":{"row":14,"column":146},"end":{"row":14,"column":147},"action":"remove","lines":["m"],"id":35},{"start":{"row":14,"column":145},"end":{"row":14,"column":146},"action":"remove","lines":["u"]},{"start":{"row":14,"column":144},"end":{"row":14,"column":145},"action":"remove","lines":["n"]}],[{"start":{"row":14,"column":144},"end":{"row":14,"column":146},"action":"insert","lines":["\"\""],"id":36}],[{"start":{"row":14,"column":145},"end":{"row":14,"column":146},"action":"insert","lines":["n"],"id":37},{"start":{"row":14,"column":146},"end":{"row":14,"column":147},"action":"insert","lines":["u"]},{"start":{"row":14,"column":147},"end":{"row":14,"column":148},"action":"insert","lines":["m"]},{"start":{"row":14,"column":148},"end":{"row":14,"column":149},"action":"insert","lines":["_"]},{"start":{"row":14,"column":149},"end":{"row":14,"column":150},"action":"insert","lines":["m"]},{"start":{"row":14,"column":150},"end":{"row":14,"column":151},"action":"insert","lines":["a"]},{"start":{"row":14,"column":151},"end":{"row":14,"column":152},"action":"insert","lines":["t"]},{"start":{"row":14,"column":152},"end":{"row":14,"column":153},"action":"insert","lines":["e"]},{"start":{"row":14,"column":153},"end":{"row":14,"column":154},"action":"insert","lines":["r"]},{"start":{"row":14,"column":154},"end":{"row":14,"column":155},"action":"insert","lines":["i"]}],[{"start":{"row":14,"column":155},"end":{"row":14,"column":156},"action":"insert","lines":["l"],"id":38},{"start":{"row":14,"column":156},"end":{"row":14,"column":157},"action":"insert","lines":["a"]}],[{"start":{"row":14,"column":156},"end":{"row":14,"column":157},"action":"remove","lines":["a"],"id":39},{"start":{"row":14,"column":155},"end":{"row":14,"column":156},"action":"remove","lines":["l"]}],[{"start":{"row":14,"column":155},"end":{"row":14,"column":156},"action":"insert","lines":["a"],"id":40},{"start":{"row":14,"column":156},"end":{"row":14,"column":157},"action":"insert","lines":["l"]},{"start":{"row":14,"column":157},"end":{"row":14,"column":158},"action":"insert","lines":["s"]}],[{"start":{"row":14,"column":159},"end":{"row":14,"column":160},"action":"insert","lines":[","],"id":41}],[{"start":{"row":14,"column":160},"end":{"row":14,"column":162},"action":"insert","lines":["\"\""],"id":42}],[{"start":{"row":14,"column":161},"end":{"row":14,"column":162},"action":"insert","lines":["m"],"id":43},{"start":{"row":14,"column":162},"end":{"row":14,"column":163},"action":"insert","lines":["a"]},{"start":{"row":14,"column":163},"end":{"row":14,"column":164},"action":"insert","lines":["t"]},{"start":{"row":14,"column":164},"end":{"row":14,"column":165},"action":"insert","lines":["e"]},{"start":{"row":14,"column":165},"end":{"row":14,"column":166},"action":"insert","lines":["r"]},{"start":{"row":14,"column":166},"end":{"row":14,"column":167},"action":"insert","lines":["i"]},{"start":{"row":14,"column":167},"end":{"row":14,"column":168},"action":"insert","lines":["a"]},{"start":{"row":14,"column":168},"end":{"row":14,"column":169},"action":"insert","lines":["l"]},{"start":{"row":14,"column":169},"end":{"row":14,"column":170},"action":"insert","lines":["_"]}],[{"start":{"row":14,"column":170},"end":{"row":14,"column":171},"action":"insert","lines":["t"],"id":44},{"start":{"row":14,"column":171},"end":{"row":14,"column":172},"action":"insert","lines":["y"]},{"start":{"row":14,"column":172},"end":{"row":14,"column":173},"action":"insert","lines":["p"]},{"start":{"row":14,"column":173},"end":{"row":14,"column":174},"action":"insert","lines":["e"]}],[{"start":{"row":14,"column":175},"end":{"row":14,"column":176},"action":"insert","lines":[","],"id":45}],[{"start":{"row":11,"column":10},"end":{"row":11,"column":20},"action":"remove","lines":["request_id"],"id":46},{"start":{"row":11,"column":10},"end":{"row":11,"column":11},"action":"insert","lines":["i"]},{"start":{"row":11,"column":11},"end":{"row":11,"column":12},"action":"insert","lines":["d"]}],[{"start":{"row":11,"column":10},"end":{"row":11,"column":12},"action":"remove","lines":["id"],"id":47},{"start":{"row":11,"column":10},"end":{"row":11,"column":23},"action":"insert","lines":["id_occurrence"]}],[{"start":{"row":11,"column":40},"end":{"row":11,"column":50},"action":"remove","lines":["request_id"],"id":48},{"start":{"row":11,"column":40},"end":{"row":11,"column":41},"action":"insert","lines":["i"]},{"start":{"row":11,"column":41},"end":{"row":11,"column":42},"action":"insert","lines":["d"]}],[{"start":{"row":11,"column":40},"end":{"row":11,"column":42},"action":"remove","lines":["id"],"id":49},{"start":{"row":11,"column":40},"end":{"row":11,"column":53},"action":"insert","lines":["id_occurrence"]}],[{"start":{"row":14,"column":177},"end":{"row":14,"column":187},"action":"remove","lines":["request_id"],"id":50},{"start":{"row":14,"column":177},"end":{"row":14,"column":178},"action":"insert","lines":["i"]},{"start":{"row":14,"column":178},"end":{"row":14,"column":179},"action":"insert","lines":["d"]}],[{"start":{"row":14,"column":177},"end":{"row":14,"column":179},"action":"remove","lines":["id"],"id":51},{"start":{"row":14,"column":177},"end":{"row":14,"column":190},"action":"insert","lines":["id_occurrence"]}],[{"start":{"row":14,"column":198},"end":{"row":14,"column":199},"action":"insert","lines":[","],"id":52},{"start":{"row":14,"column":199},"end":{"row":14,"column":200},"action":"insert","lines":["n"]},{"start":{"row":14,"column":200},"end":{"row":14,"column":201},"action":"insert","lines":["u"]},{"start":{"row":14,"column":201},"end":{"row":14,"column":202},"action":"insert","lines":["m"]}],[{"start":{"row":14,"column":199},"end":{"row":14,"column":202},"action":"remove","lines":["num"],"id":53},{"start":{"row":14,"column":199},"end":{"row":14,"column":215},"action":"insert","lines":["num_operationals"]}],[{"start":{"row":14,"column":215},"end":{"row":14,"column":216},"action":"insert","lines":[","],"id":54},{"start":{"row":14,"column":216},"end":{"row":14,"column":217},"action":"insert","lines":["n"]},{"start":{"row":14,"column":217},"end":{"row":14,"column":218},"action":"insert","lines":["u"]},{"start":{"row":14,"column":218},"end":{"row":14,"column":219},"action":"insert","lines":["m"]}],[{"start":{"row":14,"column":216},"end":{"row":14,"column":219},"action":"remove","lines":["num"],"id":55},{"start":{"row":14,"column":216},"end":{"row":14,"column":229},"action":"insert","lines":["num_materials"]}],[{"start":{"row":14,"column":229},"end":{"row":14,"column":230},"action":"insert","lines":[","],"id":56},{"start":{"row":14,"column":230},"end":{"row":14,"column":231},"action":"insert","lines":["m"]},{"start":{"row":14,"column":231},"end":{"row":14,"column":232},"action":"insert","lines":["a"]}],[{"start":{"row":14,"column":230},"end":{"row":14,"column":232},"action":"remove","lines":["ma"],"id":57},{"start":{"row":14,"column":230},"end":{"row":14,"column":243},"action":"insert","lines":["material_type"]}],[{"start":{"row":12,"column":51},"end":{"row":13,"column":0},"action":"insert","lines":["",""],"id":58},{"start":{"row":13,"column":0},"end":{"row":13,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":13,"column":4},"end":{"row":13,"column":51},"action":"insert","lines":["const reason = req.sanitize('reason').escape();"],"id":59}],[{"start":{"row":13,"column":10},"end":{"row":13,"column":16},"action":"remove","lines":["reason"],"id":60},{"start":{"row":13,"column":10},"end":{"row":13,"column":11},"action":"insert","lines":["n"]},{"start":{"row":13,"column":11},"end":{"row":13,"column":12},"action":"insert","lines":["u"]},{"start":{"row":13,"column":12},"end":{"row":13,"column":13},"action":"insert","lines":["m"]}],[{"start":{"row":13,"column":10},"end":{"row":13,"column":13},"action":"remove","lines":["num"],"id":61},{"start":{"row":13,"column":10},"end":{"row":13,"column":26},"action":"insert","lines":["num_operationals"]}],[{"start":{"row":13,"column":43},"end":{"row":13,"column":49},"action":"remove","lines":["reason"],"id":62},{"start":{"row":13,"column":43},"end":{"row":13,"column":44},"action":"insert","lines":["n"]},{"start":{"row":13,"column":44},"end":{"row":13,"column":45},"action":"insert","lines":["u"]},{"start":{"row":13,"column":45},"end":{"row":13,"column":46},"action":"insert","lines":["m"]}],[{"start":{"row":13,"column":43},"end":{"row":13,"column":46},"action":"remove","lines":["num"],"id":63},{"start":{"row":13,"column":43},"end":{"row":13,"column":59},"action":"insert","lines":["num_operationals"]}],[{"start":{"row":13,"column":71},"end":{"row":14,"column":0},"action":"insert","lines":["",""],"id":64},{"start":{"row":14,"column":0},"end":{"row":14,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":14,"column":4},"end":{"row":14,"column":51},"action":"insert","lines":["const reason = req.sanitize('reason').escape();"],"id":65}],[{"start":{"row":14,"column":10},"end":{"row":14,"column":16},"action":"remove","lines":["reason"],"id":66},{"start":{"row":14,"column":10},"end":{"row":14,"column":11},"action":"insert","lines":["n"]},{"start":{"row":14,"column":11},"end":{"row":14,"column":12},"action":"insert","lines":["u"]},{"start":{"row":14,"column":12},"end":{"row":14,"column":13},"action":"insert","lines":["m"]}],[{"start":{"row":14,"column":10},"end":{"row":14,"column":13},"action":"remove","lines":["num"],"id":67},{"start":{"row":14,"column":10},"end":{"row":14,"column":23},"action":"insert","lines":["num_materials"]}],[{"start":{"row":14,"column":40},"end":{"row":14,"column":46},"action":"remove","lines":["reason"],"id":68},{"start":{"row":14,"column":40},"end":{"row":14,"column":41},"action":"insert","lines":["n"]},{"start":{"row":14,"column":41},"end":{"row":14,"column":42},"action":"insert","lines":["u"]},{"start":{"row":14,"column":42},"end":{"row":14,"column":43},"action":"insert","lines":["m"]}],[{"start":{"row":14,"column":40},"end":{"row":14,"column":43},"action":"remove","lines":["num"],"id":69},{"start":{"row":14,"column":40},"end":{"row":14,"column":53},"action":"insert","lines":["num_materials"]}],[{"start":{"row":14,"column":65},"end":{"row":15,"column":0},"action":"insert","lines":["",""],"id":70},{"start":{"row":15,"column":0},"end":{"row":15,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":15,"column":4},"end":{"row":15,"column":51},"action":"insert","lines":["const reason = req.sanitize('reason').escape();"],"id":71}],[{"start":{"row":15,"column":10},"end":{"row":15,"column":16},"action":"remove","lines":["reason"],"id":72},{"start":{"row":15,"column":10},"end":{"row":15,"column":11},"action":"insert","lines":["m"]},{"start":{"row":15,"column":11},"end":{"row":15,"column":12},"action":"insert","lines":["a"]},{"start":{"row":15,"column":12},"end":{"row":15,"column":13},"action":"insert","lines":["t"]},{"start":{"row":15,"column":13},"end":{"row":15,"column":14},"action":"insert","lines":["e"]}],[{"start":{"row":15,"column":10},"end":{"row":15,"column":14},"action":"remove","lines":["mate"],"id":73},{"start":{"row":15,"column":10},"end":{"row":15,"column":23},"action":"insert","lines":["material_type"]}],[{"start":{"row":15,"column":40},"end":{"row":15,"column":46},"action":"remove","lines":["reason"],"id":74},{"start":{"row":15,"column":40},"end":{"row":15,"column":41},"action":"insert","lines":["m"]},{"start":{"row":15,"column":41},"end":{"row":15,"column":42},"action":"insert","lines":["a"]},{"start":{"row":15,"column":42},"end":{"row":15,"column":43},"action":"insert","lines":["t"]},{"start":{"row":15,"column":43},"end":{"row":15,"column":44},"action":"insert","lines":["e"]},{"start":{"row":15,"column":44},"end":{"row":15,"column":45},"action":"insert","lines":["r"]},{"start":{"row":15,"column":45},"end":{"row":15,"column":46},"action":"insert","lines":["i"]},{"start":{"row":15,"column":46},"end":{"row":15,"column":47},"action":"insert","lines":["a"]},{"start":{"row":15,"column":47},"end":{"row":15,"column":48},"action":"insert","lines":["l"]}],[{"start":{"row":15,"column":40},"end":{"row":15,"column":48},"action":"remove","lines":["material"],"id":75},{"start":{"row":15,"column":40},"end":{"row":15,"column":53},"action":"insert","lines":["material_type"]}],[{"start":{"row":17,"column":100},"end":{"row":17,"column":101},"action":"insert","lines":[" "],"id":76},{"start":{"row":17,"column":117},"end":{"row":17,"column":118},"action":"insert","lines":[" "]},{"start":{"row":17,"column":127},"end":{"row":17,"column":128},"action":"insert","lines":[" "]},{"start":{"row":17,"column":147},"end":{"row":17,"column":148},"action":"insert","lines":[" "]},{"start":{"row":17,"column":164},"end":{"row":17,"column":165},"action":"insert","lines":[" "]},{"start":{"row":17,"column":204},"end":{"row":17,"column":205},"action":"insert","lines":[" "]},{"start":{"row":17,"column":222},"end":{"row":17,"column":223},"action":"insert","lines":[" "]},{"start":{"row":17,"column":237},"end":{"row":17,"column":238},"action":"insert","lines":[" "]}],[{"start":{"row":35,"column":0},"end":{"row":101,"column":3},"action":"remove","lines":["function updateHelpRequest(req, res) {","    //receber os dados do formuário que são enviados por post","    const request_id = req.sanitize('request_id').escape();","    const reason = req.sanitize('reason').escape();","    console.log(\"without hahsh:\" + req.body.pass);","    var query = \"\";","    /*var update = {","        witness_id,","        name,","        email,","        place,","        profession","    };*/","    query = connect.con.query('Update ?? SET reason = ? where request_id=?', [\"help_request\", reason], function(err, rows,","        fields) {","        console.log(query.sql);","        if (!err) {","            console.log(\"Number of records updated: \" + rows.affectedRows);","            res.status(200).send({ \"msg\": \"update with success\" });","        }","        else {","            res.status(400).send({ \"msg\": err.code });","            console.log('Error while performing Query.', err);","        }","    });","}","","","//função que apaga todos os dados de um witness","function deleteIDHelpRequest(req, res) {","    //criar e executar a query de leitura na BD","    const request_id = req.sanitize('request_id').escape();","    const post = {","        request_id: request_id","    };","    connect.con.query('DELETE from help_request where request_id = ?', post, function(err, rows, fields) {","        if (!err) {","            //verifica os resultados se o número de linhas for 0 devolve dados não encontrados, caso contrário envia os resultados (rows).","","            if (rows.length == 0) {","                res.status(404).send({","                    \"msg\": \"data not found\"","                });","            }","            else {","                res.status(200).send({","                    \"msg\": \"success\"","                });","            }","        }","        else","            console.log('Error while performing Query.', err);","    });","}","","/*function addRow(data) { // controller??","    let insertQuery = 'INSERT INTO ?? VALUES (?,?,?,?,?)';","    let query = mysql.format(insertQuery, [\"witness\", data.witness_id, data.name, data.email, data.place, data.profession]);","    connect.con.query(query, (err, response) => {","        if (err) {","            console.error(err);","            return;","        }","        // rows added","        console.log(response.insertId);","    });","}*/"],"id":77}],[{"start":{"row":40,"column":0},"end":{"row":41,"column":45},"action":"remove","lines":["    updateHelpRequest: updateHelpRequest,","    deleteIDHelpRequest: deleteIDHelpRequest,"],"id":78},{"start":{"row":39,"column":37},"end":{"row":40,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":37,"column":0},"end":{"row":38,"column":41},"action":"remove","lines":["    readHelpRequest: readHelpRequest,","    readIDHelpRequest: readIDHelpRequest,"],"id":79},{"start":{"row":36,"column":18},"end":{"row":37,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":9,"column":13},"end":{"row":9,"column":14},"action":"insert","lines":["O"],"id":80},{"start":{"row":9,"column":14},"end":{"row":9,"column":15},"action":"insert","lines":["c"]},{"start":{"row":9,"column":15},"end":{"row":9,"column":16},"action":"insert","lines":["c"]},{"start":{"row":9,"column":16},"end":{"row":9,"column":17},"action":"insert","lines":["u"]},{"start":{"row":9,"column":17},"end":{"row":9,"column":18},"action":"insert","lines":["r"]},{"start":{"row":9,"column":18},"end":{"row":9,"column":19},"action":"insert","lines":["r"]},{"start":{"row":9,"column":19},"end":{"row":9,"column":20},"action":"insert","lines":["e"]},{"start":{"row":9,"column":20},"end":{"row":9,"column":21},"action":"insert","lines":["n"]},{"start":{"row":9,"column":21},"end":{"row":9,"column":22},"action":"insert","lines":["c"]},{"start":{"row":9,"column":22},"end":{"row":9,"column":23},"action":"insert","lines":["e"]}],[{"start":{"row":37,"column":25},"end":{"row":37,"column":26},"action":"insert","lines":["O"],"id":81},{"start":{"row":37,"column":26},"end":{"row":37,"column":27},"action":"insert","lines":["c"]}],[{"start":{"row":37,"column":21},"end":{"row":37,"column":27},"action":"remove","lines":["saveOc"],"id":82},{"start":{"row":37,"column":21},"end":{"row":37,"column":48},"action":"insert","lines":["saveOccurrenceHelpRequest()"]}],[{"start":{"row":37,"column":8},"end":{"row":37,"column":9},"action":"insert","lines":["O"],"id":83}],[{"start":{"row":37,"column":4},"end":{"row":37,"column":20},"action":"remove","lines":["saveOHelpRequest"],"id":84},{"start":{"row":37,"column":4},"end":{"row":37,"column":29},"action":"insert","lines":["saveOccurrenceHelpRequest"]}],[{"start":{"row":37,"column":56},"end":{"row":37,"column":69},"action":"remove","lines":["()HelpRequest"],"id":85}]]},"ace":{"folds":[],"scrolltop":225,"scrollleft":0,"selection":{"start":{"row":37,"column":4},"end":{"row":37,"column":56},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":12,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1610926895283,"hash":"a4201d1b077abebf48bbd21022e8da127c897976"}