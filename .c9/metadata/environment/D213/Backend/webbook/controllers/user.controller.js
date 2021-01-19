{"filter":false,"title":"user.controller.js","tooltip":"/D213/Backend/webbook/controllers/user.controller.js","undoManager":{"mark":70,"position":70,"stack":[[{"start":{"row":0,"column":0},"end":{"row":6,"column":24},"action":"insert","lines":["var express = require('express');","var router = express.Router();","var bodyParser = require('body-parser');","router.use(bodyParser.urlencoded({ extended: true }));","router.use(bodyParser.json());","var User = require('./User');","module.exports = router;"],"id":1}],[{"start":{"row":6,"column":24},"end":{"row":7,"column":0},"action":"insert","lines":["",""],"id":2},{"start":{"row":7,"column":0},"end":{"row":8,"column":0},"action":"insert","lines":["",""]},{"start":{"row":8,"column":0},"end":{"row":9,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":9,"column":0},"end":{"row":35,"column":24},"action":"insert","lines":["var express = require('express');","var router = express.Router();","var bodyParser = require('body-parser');","router.use(bodyParser.urlencoded({ extended: true }));","router.use(bodyParser.json());","var User = require('./User');","// ADD THIS PART","// CREATES A NEW USER","router.post('/', function (req, res) {","    User.create({","            name : req.body.name,","            email : req.body.email,","            password : req.body.password","        }, ","        function (err, user) {","            if (err) return res.status(500).send(\"There was a problem adding the information to the database.\");","            res.status(200).send(user);","        });","});","// RETURNS ALL THE USERS IN THE DATABASE","router.get('/', function (req, res) {","    User.find({}, function (err, users) {","        if (err) return res.status(500).send(\"There was a problem finding the users.\");","        res.status(200).send(users);","    });","});","module.exports = router;"],"id":3}],[{"start":{"row":0,"column":0},"end":{"row":7,"column":0},"action":"remove","lines":["var express = require('express');","var router = express.Router();","var bodyParser = require('body-parser');","router.use(bodyParser.urlencoded({ extended: true }));","router.use(bodyParser.json());","var User = require('./User');","module.exports = router;",""],"id":4}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"remove","lines":["",""],"id":5},{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":6,"column":0},"end":{"row":7,"column":21},"action":"remove","lines":["// ADD THIS PART","// CREATES A NEW USER"],"id":6}],[{"start":{"row":14,"column":50},"end":{"row":14,"column":51},"action":"insert","lines":["H"],"id":7},{"start":{"row":14,"column":51},"end":{"row":14,"column":52},"action":"insert","lines":["o"]},{"start":{"row":14,"column":52},"end":{"row":14,"column":53},"action":"insert","lines":["u"]},{"start":{"row":14,"column":53},"end":{"row":14,"column":54},"action":"insert","lines":["v"]},{"start":{"row":14,"column":54},"end":{"row":14,"column":55},"action":"insert","lines":["e"]}],[{"start":{"row":14,"column":55},"end":{"row":14,"column":56},"action":"insert","lines":[" "],"id":8},{"start":{"row":14,"column":56},"end":{"row":14,"column":57},"action":"insert","lines":["u"]},{"start":{"row":14,"column":57},"end":{"row":14,"column":58},"action":"insert","lines":["m"]}],[{"start":{"row":14,"column":58},"end":{"row":14,"column":59},"action":"insert","lines":[" "],"id":9},{"start":{"row":14,"column":59},"end":{"row":14,"column":60},"action":"insert","lines":["p"]},{"start":{"row":14,"column":60},"end":{"row":14,"column":61},"action":"insert","lines":["r"]},{"start":{"row":14,"column":61},"end":{"row":14,"column":62},"action":"insert","lines":["o"]},{"start":{"row":14,"column":62},"end":{"row":14,"column":63},"action":"insert","lines":["b"]},{"start":{"row":14,"column":63},"end":{"row":14,"column":64},"action":"insert","lines":["l"]},{"start":{"row":14,"column":64},"end":{"row":14,"column":65},"action":"insert","lines":["e"]},{"start":{"row":14,"column":65},"end":{"row":14,"column":66},"action":"insert","lines":["m"]},{"start":{"row":14,"column":66},"end":{"row":14,"column":67},"action":"insert","lines":["a"]}],[{"start":{"row":14,"column":67},"end":{"row":14,"column":68},"action":"insert","lines":[" "],"id":10},{"start":{"row":14,"column":68},"end":{"row":14,"column":69},"action":"insert","lines":["a"]}],[{"start":{"row":14,"column":69},"end":{"row":14,"column":70},"action":"insert","lines":[" "],"id":11}],[{"start":{"row":14,"column":70},"end":{"row":14,"column":71},"action":"insert","lines":["a"],"id":12},{"start":{"row":14,"column":71},"end":{"row":14,"column":72},"action":"insert","lines":["d"]},{"start":{"row":14,"column":72},"end":{"row":14,"column":73},"action":"insert","lines":["i"]},{"start":{"row":14,"column":73},"end":{"row":14,"column":74},"action":"insert","lines":["c"]},{"start":{"row":14,"column":74},"end":{"row":14,"column":75},"action":"insert","lines":["i"]},{"start":{"row":14,"column":75},"end":{"row":14,"column":76},"action":"insert","lines":["o"]},{"start":{"row":14,"column":76},"end":{"row":14,"column":77},"action":"insert","lines":["n"]},{"start":{"row":14,"column":77},"end":{"row":14,"column":78},"action":"insert","lines":["a"]},{"start":{"row":14,"column":78},"end":{"row":14,"column":79},"action":"insert","lines":["r"]}],[{"start":{"row":14,"column":79},"end":{"row":14,"column":80},"action":"insert","lines":[" "],"id":13},{"start":{"row":14,"column":80},"end":{"row":14,"column":81},"action":"insert","lines":["i"]},{"start":{"row":14,"column":81},"end":{"row":14,"column":82},"action":"insert","lines":["n"]},{"start":{"row":14,"column":82},"end":{"row":14,"column":83},"action":"insert","lines":["f"]},{"start":{"row":14,"column":83},"end":{"row":14,"column":84},"action":"insert","lines":["o"]},{"start":{"row":14,"column":84},"end":{"row":14,"column":85},"action":"insert","lines":["r"]},{"start":{"row":14,"column":85},"end":{"row":14,"column":86},"action":"insert","lines":["m"]},{"start":{"row":14,"column":86},"end":{"row":14,"column":87},"action":"insert","lines":["a"]}],[{"start":{"row":14,"column":87},"end":{"row":14,"column":88},"action":"insert","lines":["ç"],"id":14},{"start":{"row":14,"column":88},"end":{"row":14,"column":89},"action":"insert","lines":["ã"]},{"start":{"row":14,"column":89},"end":{"row":14,"column":90},"action":"insert","lines":["o"]}],[{"start":{"row":14,"column":90},"end":{"row":14,"column":91},"action":"insert","lines":[" "],"id":15},{"start":{"row":14,"column":91},"end":{"row":14,"column":92},"action":"insert","lines":["n"]},{"start":{"row":14,"column":92},"end":{"row":14,"column":93},"action":"insert","lines":["a"]}],[{"start":{"row":14,"column":93},"end":{"row":14,"column":94},"action":"insert","lines":[" "],"id":16},{"start":{"row":14,"column":94},"end":{"row":14,"column":95},"action":"insert","lines":["b"]},{"start":{"row":14,"column":95},"end":{"row":14,"column":96},"action":"insert","lines":["a"]},{"start":{"row":14,"column":96},"end":{"row":14,"column":97},"action":"insert","lines":["s"]},{"start":{"row":14,"column":97},"end":{"row":14,"column":98},"action":"insert","lines":["e"]}],[{"start":{"row":14,"column":98},"end":{"row":14,"column":99},"action":"insert","lines":[" "],"id":17},{"start":{"row":14,"column":99},"end":{"row":14,"column":100},"action":"insert","lines":["d"]},{"start":{"row":14,"column":100},"end":{"row":14,"column":101},"action":"insert","lines":["e"]}],[{"start":{"row":14,"column":101},"end":{"row":14,"column":102},"action":"insert","lines":[" "],"id":18},{"start":{"row":14,"column":102},"end":{"row":14,"column":103},"action":"insert","lines":["d"]},{"start":{"row":14,"column":103},"end":{"row":14,"column":104},"action":"insert","lines":["a"]},{"start":{"row":14,"column":104},"end":{"row":14,"column":105},"action":"insert","lines":["d"]},{"start":{"row":14,"column":105},"end":{"row":14,"column":106},"action":"insert","lines":["o"]},{"start":{"row":14,"column":106},"end":{"row":14,"column":107},"action":"insert","lines":["s"]}],[{"start":{"row":14,"column":107},"end":{"row":14,"column":108},"action":"insert","lines":["."],"id":19}],[{"start":{"row":14,"column":109},"end":{"row":14,"column":167},"action":"remove","lines":["here was a problem adding the information to the database."],"id":20},{"start":{"row":14,"column":108},"end":{"row":14,"column":109},"action":"remove","lines":["T"]}],[{"start":{"row":17,"column":3},"end":{"row":18,"column":0},"action":"insert","lines":["",""],"id":21}],[{"start":{"row":19,"column":40},"end":{"row":19,"column":41},"action":"insert","lines":[" "],"id":22},{"start":{"row":19,"column":41},"end":{"row":19,"column":42},"action":"insert","lines":["R"]},{"start":{"row":19,"column":42},"end":{"row":19,"column":43},"action":"insert","lines":["e"]},{"start":{"row":19,"column":43},"end":{"row":19,"column":44},"action":"insert","lines":["t"]},{"start":{"row":19,"column":44},"end":{"row":19,"column":45},"action":"insert","lines":["r"]}],[{"start":{"row":19,"column":45},"end":{"row":19,"column":46},"action":"insert","lines":["i"],"id":23},{"start":{"row":19,"column":46},"end":{"row":19,"column":47},"action":"insert","lines":["b"]},{"start":{"row":19,"column":47},"end":{"row":19,"column":48},"action":"insert","lines":["u"]},{"start":{"row":19,"column":48},"end":{"row":19,"column":49},"action":"insert","lines":["i"]}],[{"start":{"row":19,"column":49},"end":{"row":19,"column":50},"action":"insert","lines":[" "],"id":24},{"start":{"row":19,"column":50},"end":{"row":19,"column":51},"action":"insert","lines":["t"]},{"start":{"row":19,"column":51},"end":{"row":19,"column":52},"action":"insert","lines":["o"]},{"start":{"row":19,"column":52},"end":{"row":19,"column":53},"action":"insert","lines":["d"]},{"start":{"row":19,"column":53},"end":{"row":19,"column":54},"action":"insert","lines":["o"]},{"start":{"row":19,"column":54},"end":{"row":19,"column":55},"action":"insert","lines":["s"]}],[{"start":{"row":19,"column":55},"end":{"row":19,"column":56},"action":"insert","lines":[" "],"id":25},{"start":{"row":19,"column":56},"end":{"row":19,"column":57},"action":"insert","lines":["o"]},{"start":{"row":19,"column":57},"end":{"row":19,"column":58},"action":"insert","lines":["s"]}],[{"start":{"row":19,"column":58},"end":{"row":19,"column":59},"action":"insert","lines":[" "],"id":26},{"start":{"row":19,"column":59},"end":{"row":19,"column":60},"action":"insert","lines":["u"]},{"start":{"row":19,"column":60},"end":{"row":19,"column":61},"action":"insert","lines":["s"]},{"start":{"row":19,"column":61},"end":{"row":19,"column":62},"action":"insert","lines":["e"]},{"start":{"row":19,"column":62},"end":{"row":19,"column":63},"action":"insert","lines":["r"]},{"start":{"row":19,"column":63},"end":{"row":19,"column":64},"action":"insert","lines":["e"]},{"start":{"row":19,"column":64},"end":{"row":19,"column":65},"action":"insert","lines":["s"]}],[{"start":{"row":19,"column":64},"end":{"row":19,"column":65},"action":"remove","lines":["s"],"id":27},{"start":{"row":19,"column":63},"end":{"row":19,"column":64},"action":"remove","lines":["e"]}],[{"start":{"row":19,"column":63},"end":{"row":19,"column":64},"action":"insert","lines":["s"],"id":28}],[{"start":{"row":19,"column":64},"end":{"row":19,"column":65},"action":"insert","lines":[" "],"id":29},{"start":{"row":19,"column":65},"end":{"row":19,"column":66},"action":"insert","lines":["d"]},{"start":{"row":19,"column":66},"end":{"row":19,"column":67},"action":"insert","lines":["a"]}],[{"start":{"row":19,"column":67},"end":{"row":19,"column":68},"action":"insert","lines":[" "],"id":30},{"start":{"row":19,"column":68},"end":{"row":19,"column":69},"action":"insert","lines":["d"]},{"start":{"row":19,"column":69},"end":{"row":19,"column":70},"action":"insert","lines":["a"]}],[{"start":{"row":19,"column":69},"end":{"row":19,"column":70},"action":"remove","lines":["a"],"id":31},{"start":{"row":19,"column":68},"end":{"row":19,"column":69},"action":"remove","lines":["d"]}],[{"start":{"row":19,"column":68},"end":{"row":19,"column":69},"action":"insert","lines":["b"],"id":32},{"start":{"row":19,"column":69},"end":{"row":19,"column":70},"action":"insert","lines":["a"]},{"start":{"row":19,"column":70},"end":{"row":19,"column":71},"action":"insert","lines":["s"]},{"start":{"row":19,"column":71},"end":{"row":19,"column":72},"action":"insert","lines":["e"]}],[{"start":{"row":19,"column":72},"end":{"row":19,"column":73},"action":"insert","lines":[" "],"id":33},{"start":{"row":19,"column":73},"end":{"row":19,"column":74},"action":"insert","lines":["d"]},{"start":{"row":19,"column":74},"end":{"row":19,"column":75},"action":"insert","lines":["a"]}],[{"start":{"row":19,"column":75},"end":{"row":19,"column":76},"action":"insert","lines":[" "],"id":34},{"start":{"row":19,"column":76},"end":{"row":19,"column":77},"action":"insert","lines":["d"]}],[{"start":{"row":19,"column":76},"end":{"row":19,"column":77},"action":"remove","lines":["d"],"id":35},{"start":{"row":19,"column":75},"end":{"row":19,"column":76},"action":"remove","lines":[" "]},{"start":{"row":19,"column":74},"end":{"row":19,"column":75},"action":"remove","lines":["a"]}],[{"start":{"row":19,"column":74},"end":{"row":19,"column":75},"action":"insert","lines":["e"],"id":36}],[{"start":{"row":19,"column":75},"end":{"row":19,"column":76},"action":"insert","lines":[" "],"id":37},{"start":{"row":19,"column":76},"end":{"row":19,"column":77},"action":"insert","lines":["d"]},{"start":{"row":19,"column":77},"end":{"row":19,"column":78},"action":"insert","lines":["a"]},{"start":{"row":19,"column":78},"end":{"row":19,"column":79},"action":"insert","lines":["d"]},{"start":{"row":19,"column":79},"end":{"row":19,"column":80},"action":"insert","lines":["o"]},{"start":{"row":19,"column":80},"end":{"row":19,"column":81},"action":"insert","lines":["s"]}],[{"start":{"row":19,"column":3},"end":{"row":19,"column":41},"action":"remove","lines":["RETURNS ALL THE USERS IN THE DATABASE "],"id":38}],[{"start":{"row":6,"column":0},"end":{"row":7,"column":0},"action":"insert","lines":["",""],"id":39},{"start":{"row":7,"column":0},"end":{"row":7,"column":1},"action":"insert","lines":["/"]},{"start":{"row":7,"column":1},"end":{"row":7,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":7,"column":2},"end":{"row":7,"column":3},"action":"insert","lines":["C"],"id":40},{"start":{"row":7,"column":3},"end":{"row":7,"column":4},"action":"insert","lines":["R"]},{"start":{"row":7,"column":4},"end":{"row":7,"column":5},"action":"insert","lines":["I"]},{"start":{"row":7,"column":5},"end":{"row":7,"column":6},"action":"insert","lines":["A"]}],[{"start":{"row":7,"column":6},"end":{"row":7,"column":7},"action":"insert","lines":[" "],"id":41},{"start":{"row":7,"column":7},"end":{"row":7,"column":8},"action":"insert","lines":["U"]},{"start":{"row":7,"column":8},"end":{"row":7,"column":9},"action":"insert","lines":["M"]}],[{"start":{"row":7,"column":9},"end":{"row":7,"column":10},"action":"insert","lines":[" "],"id":42},{"start":{"row":7,"column":10},"end":{"row":7,"column":11},"action":"insert","lines":["N"]},{"start":{"row":7,"column":11},"end":{"row":7,"column":12},"action":"insert","lines":["O"]},{"start":{"row":7,"column":12},"end":{"row":7,"column":13},"action":"insert","lines":["V"]},{"start":{"row":7,"column":13},"end":{"row":7,"column":14},"action":"insert","lines":["O"]}],[{"start":{"row":7,"column":14},"end":{"row":7,"column":15},"action":"insert","lines":[" "],"id":43},{"start":{"row":7,"column":15},"end":{"row":7,"column":16},"action":"insert","lines":["U"]},{"start":{"row":7,"column":16},"end":{"row":7,"column":17},"action":"insert","lines":["S"]},{"start":{"row":7,"column":17},"end":{"row":7,"column":18},"action":"insert","lines":["E"]},{"start":{"row":7,"column":18},"end":{"row":7,"column":19},"action":"insert","lines":["R"]}],[{"start":{"row":20,"column":2},"end":{"row":20,"column":3},"action":"remove","lines":[" "],"id":44},{"start":{"row":20,"column":2},"end":{"row":20,"column":3},"action":"insert","lines":["R"]},{"start":{"row":20,"column":3},"end":{"row":20,"column":4},"action":"insert","lines":["E"]},{"start":{"row":20,"column":4},"end":{"row":20,"column":5},"action":"insert","lines":["T"]},{"start":{"row":20,"column":5},"end":{"row":20,"column":6},"action":"insert","lines":["R"]},{"start":{"row":20,"column":6},"end":{"row":20,"column":7},"action":"insert","lines":["I"]},{"start":{"row":20,"column":7},"end":{"row":20,"column":8},"action":"insert","lines":["B"]},{"start":{"row":20,"column":8},"end":{"row":20,"column":9},"action":"insert","lines":["U"]},{"start":{"row":20,"column":9},"end":{"row":20,"column":10},"action":"insert","lines":["I"]}],[{"start":{"row":20,"column":10},"end":{"row":20,"column":11},"action":"insert","lines":[" "],"id":45},{"start":{"row":20,"column":11},"end":{"row":20,"column":12},"action":"insert","lines":["T"]},{"start":{"row":20,"column":12},"end":{"row":20,"column":13},"action":"insert","lines":["O"]},{"start":{"row":20,"column":13},"end":{"row":20,"column":14},"action":"insert","lines":["D"]},{"start":{"row":20,"column":14},"end":{"row":20,"column":15},"action":"insert","lines":["O"]},{"start":{"row":20,"column":15},"end":{"row":20,"column":16},"action":"insert","lines":["S"]}],[{"start":{"row":20,"column":16},"end":{"row":20,"column":17},"action":"insert","lines":[" "],"id":46},{"start":{"row":20,"column":17},"end":{"row":20,"column":18},"action":"insert","lines":["O"]},{"start":{"row":20,"column":18},"end":{"row":20,"column":19},"action":"insert","lines":["S"]}],[{"start":{"row":20,"column":19},"end":{"row":20,"column":20},"action":"insert","lines":[" "],"id":47},{"start":{"row":20,"column":20},"end":{"row":20,"column":21},"action":"insert","lines":["U"]},{"start":{"row":20,"column":21},"end":{"row":20,"column":22},"action":"insert","lines":["S"]},{"start":{"row":20,"column":22},"end":{"row":20,"column":23},"action":"insert","lines":["E"]},{"start":{"row":20,"column":23},"end":{"row":20,"column":24},"action":"insert","lines":["R"]},{"start":{"row":20,"column":24},"end":{"row":20,"column":25},"action":"insert","lines":["E"]}],[{"start":{"row":20,"column":24},"end":{"row":20,"column":25},"action":"remove","lines":["E"],"id":48}],[{"start":{"row":20,"column":24},"end":{"row":20,"column":25},"action":"insert","lines":["S"],"id":49}],[{"start":{"row":20,"column":25},"end":{"row":20,"column":26},"action":"insert","lines":[" "],"id":50},{"start":{"row":20,"column":26},"end":{"row":20,"column":27},"action":"insert","lines":["D"]},{"start":{"row":20,"column":27},"end":{"row":20,"column":28},"action":"insert","lines":["A"]}],[{"start":{"row":20,"column":28},"end":{"row":20,"column":29},"action":"insert","lines":[" "],"id":51},{"start":{"row":20,"column":29},"end":{"row":20,"column":30},"action":"insert","lines":["B"]},{"start":{"row":20,"column":30},"end":{"row":20,"column":31},"action":"insert","lines":["A"]},{"start":{"row":20,"column":31},"end":{"row":20,"column":32},"action":"insert","lines":["S"]},{"start":{"row":20,"column":32},"end":{"row":20,"column":33},"action":"insert","lines":["E"]}],[{"start":{"row":20,"column":33},"end":{"row":20,"column":34},"action":"insert","lines":[" "],"id":52},{"start":{"row":20,"column":34},"end":{"row":20,"column":35},"action":"insert","lines":["D"]},{"start":{"row":20,"column":35},"end":{"row":20,"column":36},"action":"insert","lines":["E"]}],[{"start":{"row":20,"column":36},"end":{"row":20,"column":37},"action":"insert","lines":[" "],"id":53},{"start":{"row":20,"column":37},"end":{"row":20,"column":38},"action":"insert","lines":["D"]},{"start":{"row":20,"column":38},"end":{"row":20,"column":39},"action":"insert","lines":["A"]},{"start":{"row":20,"column":39},"end":{"row":20,"column":40},"action":"insert","lines":["D"]},{"start":{"row":20,"column":40},"end":{"row":20,"column":41},"action":"insert","lines":["O"]},{"start":{"row":20,"column":41},"end":{"row":20,"column":42},"action":"insert","lines":["S"]}],[{"start":{"row":20,"column":43},"end":{"row":20,"column":82},"action":"remove","lines":["etribui todos os users da base de dados"],"id":54},{"start":{"row":20,"column":42},"end":{"row":20,"column":43},"action":"remove","lines":["R"]}],[{"start":{"row":23,"column":46},"end":{"row":23,"column":47},"action":"insert","lines":["h"],"id":55},{"start":{"row":23,"column":47},"end":{"row":23,"column":48},"action":"insert","lines":["O"]},{"start":{"row":23,"column":48},"end":{"row":23,"column":49},"action":"insert","lines":["U"]},{"start":{"row":23,"column":49},"end":{"row":23,"column":50},"action":"insert","lines":["V"]},{"start":{"row":23,"column":50},"end":{"row":23,"column":51},"action":"insert","lines":["E"]}],[{"start":{"row":23,"column":51},"end":{"row":23,"column":52},"action":"insert","lines":[" "],"id":56},{"start":{"row":23,"column":52},"end":{"row":23,"column":53},"action":"insert","lines":["U"]},{"start":{"row":23,"column":53},"end":{"row":23,"column":54},"action":"insert","lines":["M"]}],[{"start":{"row":23,"column":53},"end":{"row":23,"column":54},"action":"remove","lines":["M"],"id":57},{"start":{"row":23,"column":52},"end":{"row":23,"column":53},"action":"remove","lines":["U"]},{"start":{"row":23,"column":51},"end":{"row":23,"column":52},"action":"remove","lines":[" "]},{"start":{"row":23,"column":50},"end":{"row":23,"column":51},"action":"remove","lines":["E"]},{"start":{"row":23,"column":49},"end":{"row":23,"column":50},"action":"remove","lines":["V"]},{"start":{"row":23,"column":48},"end":{"row":23,"column":49},"action":"remove","lines":["U"]},{"start":{"row":23,"column":47},"end":{"row":23,"column":48},"action":"remove","lines":["O"]},{"start":{"row":23,"column":46},"end":{"row":23,"column":47},"action":"remove","lines":["h"]}],[{"start":{"row":23,"column":46},"end":{"row":23,"column":47},"action":"insert","lines":["a"],"id":58},{"start":{"row":23,"column":47},"end":{"row":23,"column":48},"action":"insert","lines":["H"]}],[{"start":{"row":23,"column":47},"end":{"row":23,"column":48},"action":"remove","lines":["H"],"id":59},{"start":{"row":23,"column":46},"end":{"row":23,"column":47},"action":"remove","lines":["a"]}],[{"start":{"row":23,"column":46},"end":{"row":23,"column":47},"action":"insert","lines":["H"],"id":60},{"start":{"row":23,"column":47},"end":{"row":23,"column":48},"action":"insert","lines":["o"]},{"start":{"row":23,"column":48},"end":{"row":23,"column":49},"action":"insert","lines":["u"]},{"start":{"row":23,"column":49},"end":{"row":23,"column":50},"action":"insert","lines":["v"]},{"start":{"row":23,"column":50},"end":{"row":23,"column":51},"action":"insert","lines":["e"]}],[{"start":{"row":23,"column":51},"end":{"row":23,"column":52},"action":"insert","lines":[" "],"id":61},{"start":{"row":23,"column":52},"end":{"row":23,"column":53},"action":"insert","lines":["u"]},{"start":{"row":23,"column":53},"end":{"row":23,"column":54},"action":"insert","lines":["m"]}],[{"start":{"row":23,"column":54},"end":{"row":23,"column":55},"action":"insert","lines":[" "],"id":62},{"start":{"row":23,"column":55},"end":{"row":23,"column":56},"action":"insert","lines":["o"]},{"start":{"row":23,"column":56},"end":{"row":23,"column":57},"action":"insert","lines":["r"]},{"start":{"row":23,"column":57},"end":{"row":23,"column":58},"action":"insert","lines":["i"]},{"start":{"row":23,"column":58},"end":{"row":23,"column":59},"action":"insert","lines":["b"]},{"start":{"row":23,"column":59},"end":{"row":23,"column":60},"action":"insert","lines":["k"]},{"start":{"row":23,"column":60},"end":{"row":23,"column":61},"action":"insert","lines":["e"]},{"start":{"row":23,"column":61},"end":{"row":23,"column":62},"action":"insert","lines":["n"]},{"start":{"row":23,"column":62},"end":{"row":23,"column":63},"action":"insert","lines":["a"]}],[{"start":{"row":23,"column":63},"end":{"row":23,"column":64},"action":"insert","lines":[" "],"id":63}],[{"start":{"row":23,"column":63},"end":{"row":23,"column":64},"action":"remove","lines":[" "],"id":64},{"start":{"row":23,"column":62},"end":{"row":23,"column":63},"action":"remove","lines":["a"]},{"start":{"row":23,"column":61},"end":{"row":23,"column":62},"action":"remove","lines":["n"]},{"start":{"row":23,"column":60},"end":{"row":23,"column":61},"action":"remove","lines":["e"]},{"start":{"row":23,"column":59},"end":{"row":23,"column":60},"action":"remove","lines":["k"]},{"start":{"row":23,"column":58},"end":{"row":23,"column":59},"action":"remove","lines":["b"]},{"start":{"row":23,"column":57},"end":{"row":23,"column":58},"action":"remove","lines":["i"]},{"start":{"row":23,"column":56},"end":{"row":23,"column":57},"action":"remove","lines":["r"]},{"start":{"row":23,"column":55},"end":{"row":23,"column":56},"action":"remove","lines":["o"]}],[{"start":{"row":23,"column":55},"end":{"row":23,"column":56},"action":"insert","lines":["p"],"id":65},{"start":{"row":23,"column":56},"end":{"row":23,"column":57},"action":"insert","lines":["r"]},{"start":{"row":23,"column":57},"end":{"row":23,"column":58},"action":"insert","lines":["o"]},{"start":{"row":23,"column":58},"end":{"row":23,"column":59},"action":"insert","lines":["b"]},{"start":{"row":23,"column":59},"end":{"row":23,"column":60},"action":"insert","lines":["l"]},{"start":{"row":23,"column":60},"end":{"row":23,"column":61},"action":"insert","lines":["e"]},{"start":{"row":23,"column":61},"end":{"row":23,"column":62},"action":"insert","lines":["m"]},{"start":{"row":23,"column":62},"end":{"row":23,"column":63},"action":"insert","lines":["a"]}],[{"start":{"row":23,"column":63},"end":{"row":23,"column":64},"action":"insert","lines":[" "],"id":66},{"start":{"row":23,"column":64},"end":{"row":23,"column":65},"action":"insert","lines":["a"]}],[{"start":{"row":23,"column":65},"end":{"row":23,"column":66},"action":"insert","lines":[" "],"id":67},{"start":{"row":23,"column":66},"end":{"row":23,"column":67},"action":"insert","lines":["e"]},{"start":{"row":23,"column":67},"end":{"row":23,"column":68},"action":"insert","lines":["n"]},{"start":{"row":23,"column":68},"end":{"row":23,"column":69},"action":"insert","lines":["c"]},{"start":{"row":23,"column":69},"end":{"row":23,"column":70},"action":"insert","lines":["o"]},{"start":{"row":23,"column":70},"end":{"row":23,"column":71},"action":"insert","lines":["n"]},{"start":{"row":23,"column":71},"end":{"row":23,"column":72},"action":"insert","lines":["t"]},{"start":{"row":23,"column":72},"end":{"row":23,"column":73},"action":"insert","lines":["r"]},{"start":{"row":23,"column":73},"end":{"row":23,"column":74},"action":"insert","lines":["a"]},{"start":{"row":23,"column":74},"end":{"row":23,"column":75},"action":"insert","lines":["r"]}],[{"start":{"row":23,"column":75},"end":{"row":23,"column":76},"action":"insert","lines":[" "],"id":68},{"start":{"row":23,"column":76},"end":{"row":23,"column":77},"action":"insert","lines":["o"]},{"start":{"row":23,"column":77},"end":{"row":23,"column":78},"action":"insert","lines":["s"]}],[{"start":{"row":23,"column":78},"end":{"row":23,"column":79},"action":"insert","lines":[" "],"id":69},{"start":{"row":23,"column":79},"end":{"row":23,"column":80},"action":"insert","lines":["u"]},{"start":{"row":23,"column":80},"end":{"row":23,"column":81},"action":"insert","lines":["s"]},{"start":{"row":23,"column":81},"end":{"row":23,"column":82},"action":"insert","lines":["e"]},{"start":{"row":23,"column":82},"end":{"row":23,"column":83},"action":"insert","lines":["r"]},{"start":{"row":23,"column":83},"end":{"row":23,"column":84},"action":"insert","lines":["s"]}],[{"start":{"row":23,"column":84},"end":{"row":23,"column":85},"action":"insert","lines":["."],"id":70}],[{"start":{"row":23,"column":86},"end":{"row":23,"column":123},"action":"remove","lines":["here was a problem finding the users."],"id":71},{"start":{"row":23,"column":85},"end":{"row":23,"column":86},"action":"remove","lines":["T"]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":27,"column":24},"end":{"row":27,"column":24},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":4,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1611009811623,"hash":"b160f4b33fe097047de02acbc7b98b86aee5193c"}