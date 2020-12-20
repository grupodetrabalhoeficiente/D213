{"filter":false,"title":"validator.js","tooltip":"/D213/Backend/webbook/routes/validator.js","undoManager":{"mark":66,"position":66,"stack":[[{"start":{"row":0,"column":0},"end":{"row":2,"column":48},"action":"insert","lines":["const { check } = require('express-validator/check');","","exports.createUser = [check('email').isEmail()];"],"id":1}],[{"start":{"row":2,"column":8},"end":{"row":2,"column":18},"action":"remove","lines":["createUser"],"id":2},{"start":{"row":2,"column":8},"end":{"row":2,"column":9},"action":"insert","lines":["u"]},{"start":{"row":2,"column":9},"end":{"row":2,"column":10},"action":"insert","lines":["p"]},{"start":{"row":2,"column":10},"end":{"row":2,"column":11},"action":"insert","lines":["d"]},{"start":{"row":2,"column":11},"end":{"row":2,"column":12},"action":"insert","lines":["a"]},{"start":{"row":2,"column":12},"end":{"row":2,"column":13},"action":"insert","lines":["t"]},{"start":{"row":2,"column":13},"end":{"row":2,"column":14},"action":"insert","lines":["e"]},{"start":{"row":2,"column":14},"end":{"row":2,"column":15},"action":"insert","lines":["<"]},{"start":{"row":2,"column":15},"end":{"row":2,"column":16},"action":"insert","lines":[">"]}],[{"start":{"row":2,"column":15},"end":{"row":2,"column":16},"action":"remove","lines":[">"],"id":3},{"start":{"row":2,"column":14},"end":{"row":2,"column":15},"action":"remove","lines":["<"]}],[{"start":{"row":2,"column":14},"end":{"row":2,"column":15},"action":"insert","lines":["O"],"id":4},{"start":{"row":2,"column":15},"end":{"row":2,"column":16},"action":"insert","lines":["p"]}],[{"start":{"row":2,"column":15},"end":{"row":2,"column":16},"action":"remove","lines":["p"],"id":5},{"start":{"row":2,"column":14},"end":{"row":2,"column":15},"action":"remove","lines":["O"]}],[{"start":{"row":2,"column":14},"end":{"row":2,"column":15},"action":"insert","lines":["P"],"id":6},{"start":{"row":2,"column":15},"end":{"row":2,"column":16},"action":"insert","lines":["a"]},{"start":{"row":2,"column":16},"end":{"row":2,"column":17},"action":"insert","lines":["s"]},{"start":{"row":2,"column":17},"end":{"row":2,"column":18},"action":"insert","lines":["s"]},{"start":{"row":2,"column":18},"end":{"row":2,"column":19},"action":"insert","lines":["w"]},{"start":{"row":2,"column":19},"end":{"row":2,"column":20},"action":"insert","lines":["o"]},{"start":{"row":2,"column":20},"end":{"row":2,"column":21},"action":"insert","lines":["r"]},{"start":{"row":2,"column":21},"end":{"row":2,"column":22},"action":"insert","lines":["d"]}],[{"start":{"row":2,"column":34},"end":{"row":2,"column":38},"action":"remove","lines":["mail"],"id":7},{"start":{"row":2,"column":34},"end":{"row":2,"column":35},"action":"insert","lines":["n"]},{"start":{"row":2,"column":35},"end":{"row":2,"column":36},"action":"insert","lines":["e"]},{"start":{"row":2,"column":36},"end":{"row":2,"column":37},"action":"insert","lines":["w"]},{"start":{"row":2,"column":37},"end":{"row":2,"column":38},"action":"insert","lines":["P"]},{"start":{"row":2,"column":38},"end":{"row":2,"column":39},"action":"insert","lines":["a"]},{"start":{"row":2,"column":39},"end":{"row":2,"column":40},"action":"insert","lines":["s"]},{"start":{"row":2,"column":40},"end":{"row":2,"column":41},"action":"insert","lines":["s"]},{"start":{"row":2,"column":41},"end":{"row":2,"column":42},"action":"insert","lines":["w"]}],[{"start":{"row":2,"column":42},"end":{"row":2,"column":43},"action":"insert","lines":["o"],"id":8},{"start":{"row":2,"column":43},"end":{"row":2,"column":44},"action":"insert","lines":["r"]},{"start":{"row":2,"column":44},"end":{"row":2,"column":45},"action":"insert","lines":["d"]}],[{"start":{"row":2,"column":33},"end":{"row":2,"column":34},"action":"remove","lines":["e"],"id":9}],[{"start":{"row":2,"column":47},"end":{"row":2,"column":56},"action":"remove","lines":["isEmail()"],"id":10},{"start":{"row":2,"column":47},"end":{"row":2,"column":77},"action":"insert","lines":[".isLength({ min: 5, max: 10 })"]}],[{"start":{"row":2,"column":47},"end":{"row":2,"column":48},"action":"remove","lines":["."],"id":11}],[{"start":{"row":2,"column":76},"end":{"row":2,"column":77},"action":"insert","lines":["."],"id":12}],[{"start":{"row":2,"column":77},"end":{"row":2,"column":78},"action":"insert","lines":["e"],"id":13},{"start":{"row":2,"column":78},"end":{"row":2,"column":79},"action":"insert","lines":["q"]},{"start":{"row":2,"column":79},"end":{"row":2,"column":80},"action":"insert","lines":["u"]},{"start":{"row":2,"column":80},"end":{"row":2,"column":81},"action":"insert","lines":["a"]},{"start":{"row":2,"column":81},"end":{"row":2,"column":82},"action":"insert","lines":["l"]},{"start":{"row":2,"column":82},"end":{"row":2,"column":83},"action":"insert","lines":["e"]}],[{"start":{"row":2,"column":82},"end":{"row":2,"column":83},"action":"remove","lines":["e"],"id":14}],[{"start":{"row":2,"column":82},"end":{"row":2,"column":83},"action":"insert","lines":["s"],"id":15}],[{"start":{"row":2,"column":76},"end":{"row":2,"column":77},"action":"insert","lines":["."],"id":16},{"start":{"row":2,"column":77},"end":{"row":2,"column":78},"action":"insert","lines":["e"]},{"start":{"row":2,"column":78},"end":{"row":2,"column":79},"action":"insert","lines":["q"]},{"start":{"row":2,"column":79},"end":{"row":2,"column":80},"action":"insert","lines":["u"]},{"start":{"row":2,"column":80},"end":{"row":2,"column":81},"action":"insert","lines":["a"]},{"start":{"row":2,"column":81},"end":{"row":2,"column":82},"action":"insert","lines":["l"]},{"start":{"row":2,"column":82},"end":{"row":2,"column":83},"action":"insert","lines":["s"]}],[{"start":{"row":2,"column":83},"end":{"row":2,"column":85},"action":"insert","lines":["()"],"id":17}],[{"start":{"row":2,"column":84},"end":{"row":2,"column":85},"action":"insert","lines":["r"],"id":18},{"start":{"row":2,"column":85},"end":{"row":2,"column":86},"action":"insert","lines":["e"]},{"start":{"row":2,"column":86},"end":{"row":2,"column":87},"action":"insert","lines":["q"]},{"start":{"row":2,"column":87},"end":{"row":2,"column":88},"action":"insert","lines":["."]},{"start":{"row":2,"column":88},"end":{"row":2,"column":89},"action":"insert","lines":["b"]}],[{"start":{"row":2,"column":89},"end":{"row":2,"column":90},"action":"insert","lines":["o"],"id":19},{"start":{"row":2,"column":90},"end":{"row":2,"column":91},"action":"insert","lines":["d"]},{"start":{"row":2,"column":91},"end":{"row":2,"column":92},"action":"insert","lines":["y"]}],[{"start":{"row":2,"column":92},"end":{"row":2,"column":93},"action":"insert","lines":["."],"id":20}],[{"start":{"row":2,"column":93},"end":{"row":2,"column":115},"action":"insert","lines":["profileConfirmPassword"],"id":21}],[{"start":{"row":2,"column":84},"end":{"row":2,"column":115},"action":"remove","lines":["req.body.profileConfirmPassword"],"id":22}],[{"start":{"row":2,"column":84},"end":{"row":2,"column":85},"action":"insert","lines":["c"],"id":23},{"start":{"row":2,"column":85},"end":{"row":2,"column":86},"action":"insert","lines":["h"]},{"start":{"row":2,"column":86},"end":{"row":2,"column":87},"action":"insert","lines":["e"]},{"start":{"row":2,"column":87},"end":{"row":2,"column":88},"action":"insert","lines":["c"]},{"start":{"row":2,"column":88},"end":{"row":2,"column":89},"action":"insert","lines":["k"]}],[{"start":{"row":2,"column":89},"end":{"row":2,"column":91},"action":"insert","lines":["()"],"id":24}],[{"start":{"row":2,"column":90},"end":{"row":2,"column":92},"action":"insert","lines":["''"],"id":25}],[{"start":{"row":2,"column":91},"end":{"row":2,"column":113},"action":"insert","lines":["profileConfirmPassword"],"id":26}],[{"start":{"row":2,"column":118},"end":{"row":3,"column":0},"action":"insert","lines":["",""],"id":27}],[{"start":{"row":2,"column":91},"end":{"row":2,"column":113},"action":"remove","lines":["profileConfirmPassword"],"id":28},{"start":{"row":2,"column":91},"end":{"row":2,"column":106},"action":"insert","lines":["confirmPassword"]}],[{"start":{"row":2,"column":84},"end":{"row":2,"column":108},"action":"remove","lines":["check('confirmPassword')"],"id":29}],[{"start":{"row":2,"column":84},"end":{"row":2,"column":85},"action":"insert","lines":["b"],"id":30},{"start":{"row":2,"column":85},"end":{"row":2,"column":86},"action":"insert","lines":["o"]},{"start":{"row":2,"column":86},"end":{"row":2,"column":87},"action":"insert","lines":["d"]},{"start":{"row":2,"column":87},"end":{"row":2,"column":88},"action":"insert","lines":["y"]},{"start":{"row":2,"column":88},"end":{"row":2,"column":89},"action":"insert","lines":["."]}],[{"start":{"row":2,"column":89},"end":{"row":2,"column":90},"action":"insert","lines":["c"],"id":31},{"start":{"row":2,"column":90},"end":{"row":2,"column":91},"action":"insert","lines":["o"]},{"start":{"row":2,"column":91},"end":{"row":2,"column":92},"action":"insert","lines":["n"]},{"start":{"row":2,"column":92},"end":{"row":2,"column":93},"action":"insert","lines":["f"]},{"start":{"row":2,"column":93},"end":{"row":2,"column":94},"action":"insert","lines":["i"]}],[{"start":{"row":2,"column":94},"end":{"row":2,"column":95},"action":"insert","lines":["r"],"id":32},{"start":{"row":2,"column":95},"end":{"row":2,"column":96},"action":"insert","lines":["m"]},{"start":{"row":2,"column":96},"end":{"row":2,"column":97},"action":"insert","lines":["P"]},{"start":{"row":2,"column":97},"end":{"row":2,"column":98},"action":"insert","lines":["a"]},{"start":{"row":2,"column":98},"end":{"row":2,"column":99},"action":"insert","lines":["s"]},{"start":{"row":2,"column":99},"end":{"row":2,"column":100},"action":"insert","lines":["s"]},{"start":{"row":2,"column":100},"end":{"row":2,"column":101},"action":"insert","lines":["w"]},{"start":{"row":2,"column":101},"end":{"row":2,"column":102},"action":"insert","lines":["o"]},{"start":{"row":2,"column":102},"end":{"row":2,"column":103},"action":"insert","lines":["r"]}],[{"start":{"row":2,"column":103},"end":{"row":2,"column":104},"action":"insert","lines":["d"],"id":33}],[{"start":{"row":2,"column":84},"end":{"row":2,"column":104},"action":"remove","lines":["body.confirmPassword"],"id":34}],[{"start":{"row":2,"column":84},"end":{"row":2,"column":85},"action":"insert","lines":["n"],"id":35},{"start":{"row":2,"column":85},"end":{"row":2,"column":86},"action":"insert","lines":["e"]},{"start":{"row":2,"column":86},"end":{"row":2,"column":87},"action":"insert","lines":["w"]},{"start":{"row":2,"column":87},"end":{"row":2,"column":88},"action":"insert","lines":["P"]},{"start":{"row":2,"column":88},"end":{"row":2,"column":89},"action":"insert","lines":["a"]},{"start":{"row":2,"column":89},"end":{"row":2,"column":90},"action":"insert","lines":["s"]},{"start":{"row":2,"column":90},"end":{"row":2,"column":91},"action":"insert","lines":["s"]},{"start":{"row":2,"column":91},"end":{"row":2,"column":92},"action":"insert","lines":["w"]},{"start":{"row":2,"column":92},"end":{"row":2,"column":93},"action":"insert","lines":["o"]},{"start":{"row":2,"column":93},"end":{"row":2,"column":94},"action":"insert","lines":["r"]}],[{"start":{"row":2,"column":94},"end":{"row":2,"column":95},"action":"insert","lines":["d"],"id":36}],[{"start":{"row":2,"column":94},"end":{"row":2,"column":95},"action":"remove","lines":["d"],"id":37},{"start":{"row":2,"column":93},"end":{"row":2,"column":94},"action":"remove","lines":["r"]},{"start":{"row":2,"column":92},"end":{"row":2,"column":93},"action":"remove","lines":["o"]},{"start":{"row":2,"column":91},"end":{"row":2,"column":92},"action":"remove","lines":["w"]},{"start":{"row":2,"column":90},"end":{"row":2,"column":91},"action":"remove","lines":["s"]},{"start":{"row":2,"column":89},"end":{"row":2,"column":90},"action":"remove","lines":["s"]},{"start":{"row":2,"column":88},"end":{"row":2,"column":89},"action":"remove","lines":["a"]},{"start":{"row":2,"column":87},"end":{"row":2,"column":88},"action":"remove","lines":["P"]},{"start":{"row":2,"column":86},"end":{"row":2,"column":87},"action":"remove","lines":["w"]}],[{"start":{"row":2,"column":85},"end":{"row":2,"column":86},"action":"remove","lines":["e"],"id":38},{"start":{"row":2,"column":84},"end":{"row":2,"column":85},"action":"remove","lines":["n"]}],[{"start":{"row":2,"column":84},"end":{"row":2,"column":85},"action":"remove","lines":[")"],"id":39},{"start":{"row":2,"column":83},"end":{"row":2,"column":84},"action":"remove","lines":["("]},{"start":{"row":2,"column":82},"end":{"row":2,"column":83},"action":"remove","lines":["s"]},{"start":{"row":2,"column":81},"end":{"row":2,"column":82},"action":"remove","lines":["l"]},{"start":{"row":2,"column":80},"end":{"row":2,"column":81},"action":"remove","lines":["a"]},{"start":{"row":2,"column":79},"end":{"row":2,"column":80},"action":"remove","lines":["u"]},{"start":{"row":2,"column":78},"end":{"row":2,"column":79},"action":"remove","lines":["q"]},{"start":{"row":2,"column":77},"end":{"row":2,"column":78},"action":"remove","lines":["e"]},{"start":{"row":2,"column":76},"end":{"row":2,"column":77},"action":"remove","lines":["."]}],[{"start":{"row":2,"column":76},"end":{"row":2,"column":77},"action":"insert","lines":["."],"id":40},{"start":{"row":2,"column":77},"end":{"row":2,"column":78},"action":"insert","lines":["e"]},{"start":{"row":2,"column":78},"end":{"row":2,"column":79},"action":"insert","lines":["q"]},{"start":{"row":2,"column":79},"end":{"row":2,"column":80},"action":"insert","lines":["u"]},{"start":{"row":2,"column":80},"end":{"row":2,"column":81},"action":"insert","lines":["a"]},{"start":{"row":2,"column":81},"end":{"row":2,"column":82},"action":"insert","lines":["l"]}],[{"start":{"row":2,"column":82},"end":{"row":2,"column":83},"action":"insert","lines":["s"],"id":41}],[{"start":{"row":2,"column":83},"end":{"row":2,"column":85},"action":"insert","lines":["()"],"id":42}],[{"start":{"row":2,"column":84},"end":{"row":2,"column":85},"action":"insert","lines":["c"],"id":43},{"start":{"row":2,"column":85},"end":{"row":2,"column":86},"action":"insert","lines":["h"]},{"start":{"row":2,"column":86},"end":{"row":2,"column":87},"action":"insert","lines":["e"]},{"start":{"row":2,"column":87},"end":{"row":2,"column":88},"action":"insert","lines":["c"]},{"start":{"row":2,"column":88},"end":{"row":2,"column":89},"action":"insert","lines":["k"]}],[{"start":{"row":2,"column":89},"end":{"row":2,"column":91},"action":"insert","lines":["()"],"id":44}],[{"start":{"row":2,"column":90},"end":{"row":2,"column":91},"action":"insert","lines":["c"],"id":45},{"start":{"row":2,"column":91},"end":{"row":2,"column":92},"action":"insert","lines":["o"]},{"start":{"row":2,"column":92},"end":{"row":2,"column":93},"action":"insert","lines":["n"]},{"start":{"row":2,"column":93},"end":{"row":2,"column":94},"action":"insert","lines":["f"]},{"start":{"row":2,"column":94},"end":{"row":2,"column":95},"action":"insert","lines":["i"]},{"start":{"row":2,"column":95},"end":{"row":2,"column":96},"action":"insert","lines":["r"]},{"start":{"row":2,"column":96},"end":{"row":2,"column":97},"action":"insert","lines":["m"]},{"start":{"row":2,"column":97},"end":{"row":2,"column":98},"action":"insert","lines":["P"]}],[{"start":{"row":2,"column":97},"end":{"row":2,"column":98},"action":"remove","lines":["P"],"id":46},{"start":{"row":2,"column":96},"end":{"row":2,"column":97},"action":"remove","lines":["m"]},{"start":{"row":2,"column":95},"end":{"row":2,"column":96},"action":"remove","lines":["r"]},{"start":{"row":2,"column":94},"end":{"row":2,"column":95},"action":"remove","lines":["i"]},{"start":{"row":2,"column":93},"end":{"row":2,"column":94},"action":"remove","lines":["f"]},{"start":{"row":2,"column":92},"end":{"row":2,"column":93},"action":"remove","lines":["n"]},{"start":{"row":2,"column":91},"end":{"row":2,"column":92},"action":"remove","lines":["o"]},{"start":{"row":2,"column":90},"end":{"row":2,"column":91},"action":"remove","lines":["c"]}],[{"start":{"row":2,"column":90},"end":{"row":2,"column":92},"action":"insert","lines":["''"],"id":47}],[{"start":{"row":2,"column":91},"end":{"row":2,"column":92},"action":"insert","lines":["c"],"id":48},{"start":{"row":2,"column":92},"end":{"row":2,"column":93},"action":"insert","lines":["o"]},{"start":{"row":2,"column":93},"end":{"row":2,"column":94},"action":"insert","lines":["n"]},{"start":{"row":2,"column":94},"end":{"row":2,"column":95},"action":"insert","lines":["f"]},{"start":{"row":2,"column":95},"end":{"row":2,"column":96},"action":"insert","lines":["i"]},{"start":{"row":2,"column":96},"end":{"row":2,"column":97},"action":"insert","lines":["r"]},{"start":{"row":2,"column":97},"end":{"row":2,"column":98},"action":"insert","lines":["m"]},{"start":{"row":2,"column":98},"end":{"row":2,"column":99},"action":"insert","lines":["P"]},{"start":{"row":2,"column":99},"end":{"row":2,"column":100},"action":"insert","lines":["a"]}],[{"start":{"row":2,"column":100},"end":{"row":2,"column":101},"action":"insert","lines":["s"],"id":49},{"start":{"row":2,"column":101},"end":{"row":2,"column":102},"action":"insert","lines":["s"]},{"start":{"row":2,"column":102},"end":{"row":2,"column":103},"action":"insert","lines":["w"]},{"start":{"row":2,"column":103},"end":{"row":2,"column":104},"action":"insert","lines":["o"]},{"start":{"row":2,"column":104},"end":{"row":2,"column":105},"action":"insert","lines":["r"]},{"start":{"row":2,"column":105},"end":{"row":2,"column":106},"action":"insert","lines":["d"]}],[{"start":{"row":2,"column":84},"end":{"row":2,"column":108},"action":"remove","lines":["check('confirmPassword')"],"id":50},{"start":{"row":2,"column":84},"end":{"row":2,"column":85},"action":"insert","lines":["'"]},{"start":{"row":2,"column":85},"end":{"row":2,"column":86},"action":"insert","lines":["'"]}],[{"start":{"row":2,"column":85},"end":{"row":2,"column":86},"action":"insert","lines":["h"],"id":51},{"start":{"row":2,"column":86},"end":{"row":2,"column":87},"action":"insert","lines":["e"]},{"start":{"row":2,"column":87},"end":{"row":2,"column":88},"action":"insert","lines":["l"]},{"start":{"row":2,"column":88},"end":{"row":2,"column":89},"action":"insert","lines":["l"]},{"start":{"row":2,"column":89},"end":{"row":2,"column":90},"action":"insert","lines":["o"]}],[{"start":{"row":2,"column":85},"end":{"row":2,"column":90},"action":"remove","lines":["hello"],"id":52},{"start":{"row":2,"column":84},"end":{"row":2,"column":86},"action":"remove","lines":["''"]}],[{"start":{"row":2,"column":46},"end":{"row":3,"column":0},"action":"insert","lines":["",""],"id":53}],[{"start":{"row":3,"column":0},"end":{"row":3,"column":4},"action":"insert","lines":["    "],"id":54},{"start":{"row":3,"column":43},"end":{"row":4,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":3,"column":35},"end":{"row":3,"column":43},"action":"remove","lines":["equals()"],"id":55},{"start":{"row":3,"column":34},"end":{"row":3,"column":35},"action":"remove","lines":["."]}],[{"start":{"row":3,"column":34},"end":{"row":4,"column":0},"action":"insert","lines":["",""],"id":56},{"start":{"row":4,"column":0},"end":{"row":4,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":4,"column":4},"end":{"row":4,"column":5},"action":"insert","lines":["."],"id":57},{"start":{"row":4,"column":5},"end":{"row":4,"column":6},"action":"insert","lines":["c"]},{"start":{"row":4,"column":6},"end":{"row":4,"column":7},"action":"insert","lines":["u"]},{"start":{"row":4,"column":7},"end":{"row":4,"column":8},"action":"insert","lines":["s"]},{"start":{"row":4,"column":8},"end":{"row":4,"column":9},"action":"insert","lines":["t"]},{"start":{"row":4,"column":9},"end":{"row":4,"column":10},"action":"insert","lines":["o"]},{"start":{"row":4,"column":10},"end":{"row":4,"column":11},"action":"insert","lines":["m"]}],[{"start":{"row":4,"column":11},"end":{"row":4,"column":13},"action":"insert","lines":["()"],"id":58}],[{"start":{"row":4,"column":12},"end":{"row":4,"column":14},"action":"insert","lines":["()"],"id":59}],[{"start":{"row":4,"column":4},"end":{"row":4,"column":15},"action":"remove","lines":[".custom(())"],"id":60},{"start":{"row":4,"column":4},"end":{"row":9,"column":17},"action":"insert","lines":[".custom((val, { req, loc, path }) => {","                if (val !== req.body.confirm_password) {","                    throw new Error(\"Passwords don't match\");","                } else {","                    return value;","                }"]}],[{"start":{"row":9,"column":17},"end":{"row":10,"column":0},"action":"insert","lines":["",""],"id":61},{"start":{"row":10,"column":0},"end":{"row":10,"column":16},"action":"insert","lines":["                "]},{"start":{"row":10,"column":16},"end":{"row":10,"column":17},"action":"insert","lines":["}"]},{"start":{"row":10,"column":0},"end":{"row":10,"column":16},"action":"remove","lines":["                "]},{"start":{"row":10,"column":0},"end":{"row":10,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":10,"column":5},"end":{"row":10,"column":6},"action":"insert","lines":[")"],"id":62},{"start":{"row":10,"column":6},"end":{"row":10,"column":7},"action":"insert","lines":[","]}],[{"start":{"row":8,"column":31},"end":{"row":8,"column":32},"action":"remove","lines":["e"],"id":63},{"start":{"row":8,"column":30},"end":{"row":8,"column":31},"action":"remove","lines":["u"]}],[{"start":{"row":5,"column":8},"end":{"row":5,"column":16},"action":"remove","lines":["        "],"id":64},{"start":{"row":6,"column":0},"end":{"row":6,"column":8},"action":"remove","lines":["        "]},{"start":{"row":7,"column":8},"end":{"row":7,"column":9},"action":"remove","lines":[" "]},{"start":{"row":7,"column":8},"end":{"row":8,"column":0},"action":"insert","lines":["}",""]},{"start":{"row":8,"column":7},"end":{"row":8,"column":8},"action":"remove","lines":["}"]},{"start":{"row":9,"column":0},"end":{"row":9,"column":7},"action":"remove","lines":["       "]},{"start":{"row":9,"column":12},"end":{"row":9,"column":13},"action":"remove","lines":[" "]},{"start":{"row":10,"column":0},"end":{"row":10,"column":8},"action":"remove","lines":["        "]}],[{"start":{"row":5,"column":29},"end":{"row":5,"column":45},"action":"remove","lines":["confirm_password"],"id":65},{"start":{"row":5,"column":29},"end":{"row":5,"column":44},"action":"insert","lines":["confirmPassword"]}],[{"start":{"row":5,"column":44},"end":{"row":5,"column":45},"action":"insert","lines":["."],"id":66},{"start":{"row":5,"column":45},"end":{"row":5,"column":46},"action":"insert","lines":["s"]},{"start":{"row":5,"column":46},"end":{"row":5,"column":47},"action":"insert","lines":["a"]}],[{"start":{"row":5,"column":46},"end":{"row":5,"column":47},"action":"remove","lines":["a"],"id":67},{"start":{"row":5,"column":45},"end":{"row":5,"column":46},"action":"remove","lines":["s"]},{"start":{"row":5,"column":44},"end":{"row":5,"column":45},"action":"remove","lines":["."]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":5,"column":44},"end":{"row":5,"column":44},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":114,"mode":"ace/mode/javascript"}},"timestamp":1608484903754,"hash":"54ae428789ef2121e5fcd25d33b39139e9051e4a"}