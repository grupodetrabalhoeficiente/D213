{"filter":false,"title":"materialsConfirm.controller.js","tooltip":"/D213/Frontend/fetch/materialsConfirm.controller.js","undoManager":{"mark":73,"position":73,"stack":[[{"start":{"row":8,"column":130},"end":{"row":8,"column":143},"action":"remove","lines":["_utilizations"],"id":70}],[{"start":{"row":21,"column":0},"end":{"row":22,"column":0},"action":"insert","lines":["",""],"id":71},{"start":{"row":22,"column":0},"end":{"row":23,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":21,"column":0},"end":{"row":53,"column":1},"action":"insert","lines":["function updatePoints() {","    let points = {};","    let data = {};","    data = document.getElementsByClassName(\"fullRow\");","    for (let c = 0; c < data.length; c++) {","        for (let id_operational in obj) {","            if (obj[id_operational].id_operational == data[c].getElementsByClassName(\"id_operational\").item(0).innerHTML) {","                points.points = data[c].getElementsByClassName(\"custom-select\").item(0).value;","                fetch('https://bdc5dcf6bca04b39ab10a706cdb79f29.vfs.cloud9.us-east-1.amazonaws.com/occurrences/' + id_occurrence + '/evaluations/' + obj[id_operational].id_operational.toString(), {","                    headers: { 'Content-Type': 'application/json' },","                    method: 'PUT',","                    body: JSON.stringify(points)","                }).then(function(response) {","                    if (!response.ok) {","                        console.log(response.status); //=> number 100–599","                        console.log(response.statusText); //=> String","                        console.log(response.headers); //=> Headers","                        console.log(response.url); //=> String","                        console.log(points)","                    }","                    else {","                        alert(\"submitted with success\");","                    }","                }).then(function(result) {","                    console.log(result);","                }).catch(function(err) {","                    alert(\"Submission error\");","                    console.error(err);","                });","            }","        }","    }","}"],"id":72}],[{"start":{"row":20,"column":1},"end":{"row":21,"column":0},"action":"insert","lines":["",""],"id":73}],[{"start":{"row":22,"column":15},"end":{"row":22,"column":21},"action":"remove","lines":["Points"],"id":74},{"start":{"row":22,"column":15},"end":{"row":22,"column":16},"action":"insert","lines":["C"]},{"start":{"row":22,"column":16},"end":{"row":22,"column":17},"action":"insert","lines":["o"]},{"start":{"row":22,"column":17},"end":{"row":22,"column":18},"action":"insert","lines":["n"]},{"start":{"row":22,"column":18},"end":{"row":22,"column":19},"action":"insert","lines":["f"]},{"start":{"row":22,"column":19},"end":{"row":22,"column":20},"action":"insert","lines":["i"]},{"start":{"row":22,"column":20},"end":{"row":22,"column":21},"action":"insert","lines":["r"]},{"start":{"row":22,"column":21},"end":{"row":22,"column":22},"action":"insert","lines":["m"]},{"start":{"row":22,"column":22},"end":{"row":22,"column":23},"action":"insert","lines":["a"]},{"start":{"row":22,"column":23},"end":{"row":22,"column":24},"action":"insert","lines":["t"]},{"start":{"row":22,"column":24},"end":{"row":22,"column":25},"action":"insert","lines":["i"]},{"start":{"row":22,"column":25},"end":{"row":22,"column":26},"action":"insert","lines":["o"]}],[{"start":{"row":22,"column":26},"end":{"row":22,"column":27},"action":"insert","lines":["n"],"id":75}],[{"start":{"row":2,"column":1},"end":{"row":2,"column":2},"action":"remove","lines":["/"],"id":76},{"start":{"row":2,"column":0},"end":{"row":2,"column":1},"action":"remove","lines":["/"]}],[{"start":{"row":2,"column":23},"end":{"row":2,"column":29},"action":"remove","lines":["Points"],"id":77},{"start":{"row":2,"column":23},"end":{"row":2,"column":24},"action":"insert","lines":["C"]},{"start":{"row":2,"column":24},"end":{"row":2,"column":25},"action":"insert","lines":["o"]},{"start":{"row":2,"column":25},"end":{"row":2,"column":26},"action":"insert","lines":["n"]},{"start":{"row":2,"column":26},"end":{"row":2,"column":27},"action":"insert","lines":["f"]},{"start":{"row":2,"column":27},"end":{"row":2,"column":28},"action":"insert","lines":["i"]},{"start":{"row":2,"column":28},"end":{"row":2,"column":29},"action":"insert","lines":["r"]}],[{"start":{"row":2,"column":17},"end":{"row":2,"column":29},"action":"remove","lines":["updateConfir"],"id":78},{"start":{"row":2,"column":17},"end":{"row":2,"column":35},"action":"insert","lines":["updateConfirmation"]}],[{"start":{"row":27,"column":20},"end":{"row":27,"column":31},"action":"remove","lines":["operational"],"id":79},{"start":{"row":27,"column":20},"end":{"row":27,"column":21},"action":"insert","lines":["m"]},{"start":{"row":27,"column":21},"end":{"row":27,"column":22},"action":"insert","lines":["a"]},{"start":{"row":27,"column":22},"end":{"row":27,"column":23},"action":"insert","lines":["t"]},{"start":{"row":27,"column":23},"end":{"row":27,"column":24},"action":"insert","lines":["e"]},{"start":{"row":27,"column":24},"end":{"row":27,"column":25},"action":"insert","lines":["r"]},{"start":{"row":27,"column":25},"end":{"row":27,"column":26},"action":"insert","lines":["i"]},{"start":{"row":27,"column":26},"end":{"row":27,"column":27},"action":"insert","lines":["a"]},{"start":{"row":27,"column":27},"end":{"row":27,"column":28},"action":"insert","lines":["l"]}],[{"start":{"row":28,"column":20},"end":{"row":28,"column":34},"action":"remove","lines":["id_operational"],"id":80},{"start":{"row":28,"column":20},"end":{"row":28,"column":21},"action":"insert","lines":["i"]},{"start":{"row":28,"column":21},"end":{"row":28,"column":22},"action":"insert","lines":["d"]},{"start":{"row":28,"column":22},"end":{"row":28,"column":23},"action":"insert","lines":["_"]},{"start":{"row":28,"column":23},"end":{"row":28,"column":24},"action":"insert","lines":["m"]},{"start":{"row":28,"column":24},"end":{"row":28,"column":25},"action":"insert","lines":["a"]},{"start":{"row":28,"column":25},"end":{"row":28,"column":26},"action":"insert","lines":["t"]},{"start":{"row":28,"column":26},"end":{"row":28,"column":27},"action":"insert","lines":["e"]},{"start":{"row":28,"column":27},"end":{"row":28,"column":28},"action":"insert","lines":["r"]},{"start":{"row":28,"column":28},"end":{"row":28,"column":29},"action":"insert","lines":["i"]}],[{"start":{"row":28,"column":29},"end":{"row":28,"column":30},"action":"insert","lines":["a"],"id":81},{"start":{"row":28,"column":30},"end":{"row":28,"column":31},"action":"insert","lines":["l"]}],[{"start":{"row":28,"column":36},"end":{"row":28,"column":47},"action":"remove","lines":["operational"],"id":82},{"start":{"row":28,"column":36},"end":{"row":28,"column":37},"action":"insert","lines":["m"]},{"start":{"row":28,"column":37},"end":{"row":28,"column":38},"action":"insert","lines":["a"]},{"start":{"row":28,"column":38},"end":{"row":28,"column":39},"action":"insert","lines":["t"]},{"start":{"row":28,"column":39},"end":{"row":28,"column":40},"action":"insert","lines":["e"]},{"start":{"row":28,"column":40},"end":{"row":28,"column":41},"action":"insert","lines":["r"]},{"start":{"row":28,"column":41},"end":{"row":28,"column":42},"action":"insert","lines":["i"]},{"start":{"row":28,"column":42},"end":{"row":28,"column":43},"action":"insert","lines":["a"]},{"start":{"row":28,"column":43},"end":{"row":28,"column":44},"action":"insert","lines":["l"]}],[{"start":{"row":14,"column":77},"end":{"row":14,"column":84},"action":"remove","lines":["vei_mat"],"id":83},{"start":{"row":14,"column":77},"end":{"row":14,"column":78},"action":"insert","lines":["m"]},{"start":{"row":14,"column":78},"end":{"row":14,"column":79},"action":"insert","lines":["a"]},{"start":{"row":14,"column":79},"end":{"row":14,"column":80},"action":"insert","lines":["t"]},{"start":{"row":14,"column":80},"end":{"row":14,"column":81},"action":"insert","lines":["e"]},{"start":{"row":14,"column":81},"end":{"row":14,"column":82},"action":"insert","lines":["r"]},{"start":{"row":14,"column":82},"end":{"row":14,"column":83},"action":"insert","lines":["i"]},{"start":{"row":14,"column":83},"end":{"row":14,"column":84},"action":"insert","lines":["l"]}],[{"start":{"row":14,"column":83},"end":{"row":14,"column":84},"action":"remove","lines":["l"],"id":84}],[{"start":{"row":14,"column":83},"end":{"row":14,"column":84},"action":"insert","lines":["a"],"id":85},{"start":{"row":14,"column":84},"end":{"row":14,"column":85},"action":"insert","lines":["l"]}],[{"start":{"row":28,"column":83},"end":{"row":28,"column":94},"action":"remove","lines":["operational"],"id":86},{"start":{"row":28,"column":83},"end":{"row":28,"column":84},"action":"insert","lines":["m"]},{"start":{"row":28,"column":84},"end":{"row":28,"column":85},"action":"insert","lines":["a"]},{"start":{"row":28,"column":85},"end":{"row":28,"column":86},"action":"insert","lines":["t"]},{"start":{"row":28,"column":86},"end":{"row":28,"column":87},"action":"insert","lines":["e"]},{"start":{"row":28,"column":87},"end":{"row":28,"column":88},"action":"insert","lines":["r"]},{"start":{"row":28,"column":88},"end":{"row":28,"column":89},"action":"insert","lines":["i"]},{"start":{"row":28,"column":89},"end":{"row":28,"column":90},"action":"insert","lines":["a"]},{"start":{"row":28,"column":90},"end":{"row":28,"column":91},"action":"insert","lines":["l"]}],[{"start":{"row":14,"column":252},"end":{"row":14,"column":253},"action":"insert","lines":["c"],"id":87},{"start":{"row":14,"column":253},"end":{"row":14,"column":254},"action":"insert","lines":["l"]},{"start":{"row":14,"column":254},"end":{"row":14,"column":255},"action":"insert","lines":["a"]},{"start":{"row":14,"column":255},"end":{"row":14,"column":256},"action":"insert","lines":["s"]},{"start":{"row":14,"column":256},"end":{"row":14,"column":257},"action":"insert","lines":["s"]},{"start":{"row":14,"column":257},"end":{"row":14,"column":258},"action":"insert","lines":["="]}],[{"start":{"row":14,"column":258},"end":{"row":14,"column":259},"action":"insert","lines":["\""],"id":88},{"start":{"row":14,"column":259},"end":{"row":14,"column":260},"action":"insert","lines":["\""]}],[{"start":{"row":14,"column":259},"end":{"row":14,"column":260},"action":"insert","lines":["c"],"id":89},{"start":{"row":14,"column":260},"end":{"row":14,"column":261},"action":"insert","lines":["o"]},{"start":{"row":14,"column":261},"end":{"row":14,"column":262},"action":"insert","lines":["n"]},{"start":{"row":14,"column":262},"end":{"row":14,"column":263},"action":"insert","lines":["f"]},{"start":{"row":14,"column":263},"end":{"row":14,"column":264},"action":"insert","lines":["i"]},{"start":{"row":14,"column":264},"end":{"row":14,"column":265},"action":"insert","lines":["r"]},{"start":{"row":14,"column":265},"end":{"row":14,"column":266},"action":"insert","lines":["m"]},{"start":{"row":14,"column":266},"end":{"row":14,"column":267},"action":"insert","lines":["a"]},{"start":{"row":14,"column":267},"end":{"row":14,"column":268},"action":"insert","lines":["t"]},{"start":{"row":14,"column":268},"end":{"row":14,"column":269},"action":"insert","lines":["i"]},{"start":{"row":14,"column":269},"end":{"row":14,"column":270},"action":"insert","lines":["o"]},{"start":{"row":14,"column":270},"end":{"row":14,"column":271},"action":"insert","lines":["n"]}],[{"start":{"row":29,"column":64},"end":{"row":29,"column":77},"action":"remove","lines":["custom-select"],"id":90},{"start":{"row":29,"column":64},"end":{"row":29,"column":76},"action":"insert","lines":["confirmation"]}],[{"start":{"row":30,"column":156},"end":{"row":30,"column":167},"action":"remove","lines":["operational"],"id":91},{"start":{"row":30,"column":156},"end":{"row":30,"column":157},"action":"insert","lines":["m"]},{"start":{"row":30,"column":157},"end":{"row":30,"column":158},"action":"insert","lines":["a"]},{"start":{"row":30,"column":158},"end":{"row":30,"column":159},"action":"insert","lines":["t"]},{"start":{"row":30,"column":159},"end":{"row":30,"column":160},"action":"insert","lines":["e"]},{"start":{"row":30,"column":160},"end":{"row":30,"column":161},"action":"insert","lines":["r"]},{"start":{"row":30,"column":161},"end":{"row":30,"column":162},"action":"insert","lines":["i"]},{"start":{"row":30,"column":162},"end":{"row":30,"column":163},"action":"insert","lines":["a"]},{"start":{"row":30,"column":163},"end":{"row":30,"column":164},"action":"insert","lines":["l"]}],[{"start":{"row":30,"column":133},"end":{"row":30,"column":144},"action":"remove","lines":["evaluations"],"id":92},{"start":{"row":30,"column":133},"end":{"row":30,"column":134},"action":"insert","lines":["m"]},{"start":{"row":30,"column":134},"end":{"row":30,"column":135},"action":"insert","lines":["a"]},{"start":{"row":30,"column":135},"end":{"row":30,"column":136},"action":"insert","lines":["t"]},{"start":{"row":30,"column":136},"end":{"row":30,"column":137},"action":"insert","lines":["e"]},{"start":{"row":30,"column":137},"end":{"row":30,"column":138},"action":"insert","lines":["r"]},{"start":{"row":30,"column":138},"end":{"row":30,"column":139},"action":"insert","lines":["i"]},{"start":{"row":30,"column":139},"end":{"row":30,"column":140},"action":"insert","lines":["a"]},{"start":{"row":30,"column":140},"end":{"row":30,"column":141},"action":"insert","lines":["l"]}],[{"start":{"row":30,"column":141},"end":{"row":30,"column":142},"action":"insert","lines":["s"],"id":93}],[{"start":{"row":30,"column":167},"end":{"row":30,"column":178},"action":"remove","lines":["operational"],"id":94},{"start":{"row":30,"column":167},"end":{"row":30,"column":168},"action":"insert","lines":["m"]},{"start":{"row":30,"column":168},"end":{"row":30,"column":169},"action":"insert","lines":["a"]},{"start":{"row":30,"column":169},"end":{"row":30,"column":170},"action":"insert","lines":["t"]},{"start":{"row":30,"column":170},"end":{"row":30,"column":171},"action":"insert","lines":["e"]},{"start":{"row":30,"column":171},"end":{"row":30,"column":172},"action":"insert","lines":["r"]},{"start":{"row":30,"column":172},"end":{"row":30,"column":173},"action":"insert","lines":["a"]}],[{"start":{"row":30,"column":172},"end":{"row":30,"column":173},"action":"remove","lines":["a"],"id":95}],[{"start":{"row":30,"column":172},"end":{"row":30,"column":173},"action":"insert","lines":["i"],"id":96},{"start":{"row":30,"column":173},"end":{"row":30,"column":174},"action":"insert","lines":["a"]},{"start":{"row":30,"column":174},"end":{"row":30,"column":175},"action":"insert","lines":["l"]}],[{"start":{"row":23,"column":8},"end":{"row":23,"column":14},"action":"remove","lines":["points"],"id":97},{"start":{"row":23,"column":8},"end":{"row":23,"column":9},"action":"insert","lines":["c"]},{"start":{"row":23,"column":9},"end":{"row":23,"column":10},"action":"insert","lines":["o"]},{"start":{"row":23,"column":10},"end":{"row":23,"column":11},"action":"insert","lines":["n"]},{"start":{"row":23,"column":11},"end":{"row":23,"column":12},"action":"insert","lines":["f"]},{"start":{"row":23,"column":12},"end":{"row":23,"column":13},"action":"insert","lines":["i"]},{"start":{"row":23,"column":13},"end":{"row":23,"column":14},"action":"insert","lines":["r"]},{"start":{"row":23,"column":14},"end":{"row":23,"column":15},"action":"insert","lines":["m"]},{"start":{"row":23,"column":15},"end":{"row":23,"column":16},"action":"insert","lines":["a"]},{"start":{"row":23,"column":16},"end":{"row":23,"column":17},"action":"insert","lines":["t"]},{"start":{"row":23,"column":17},"end":{"row":23,"column":18},"action":"insert","lines":["i"]},{"start":{"row":23,"column":18},"end":{"row":23,"column":19},"action":"insert","lines":["o"]}],[{"start":{"row":23,"column":19},"end":{"row":23,"column":20},"action":"insert","lines":["n"],"id":98}],[{"start":{"row":29,"column":16},"end":{"row":29,"column":22},"action":"remove","lines":["points"],"id":99},{"start":{"row":29,"column":16},"end":{"row":29,"column":17},"action":"insert","lines":["c"]},{"start":{"row":29,"column":17},"end":{"row":29,"column":18},"action":"insert","lines":["o"]},{"start":{"row":29,"column":18},"end":{"row":29,"column":19},"action":"insert","lines":["n"]},{"start":{"row":29,"column":19},"end":{"row":29,"column":20},"action":"insert","lines":["f"]},{"start":{"row":29,"column":20},"end":{"row":29,"column":21},"action":"insert","lines":["i"]},{"start":{"row":29,"column":21},"end":{"row":29,"column":22},"action":"insert","lines":["r"]},{"start":{"row":29,"column":22},"end":{"row":29,"column":23},"action":"insert","lines":["m"]},{"start":{"row":29,"column":23},"end":{"row":29,"column":24},"action":"insert","lines":["a"]},{"start":{"row":29,"column":24},"end":{"row":29,"column":25},"action":"insert","lines":["t"]},{"start":{"row":29,"column":25},"end":{"row":29,"column":26},"action":"insert","lines":["i"]},{"start":{"row":29,"column":26},"end":{"row":29,"column":27},"action":"insert","lines":["o"]},{"start":{"row":29,"column":27},"end":{"row":29,"column":28},"action":"insert","lines":["n"]}],[{"start":{"row":29,"column":29},"end":{"row":29,"column":35},"action":"remove","lines":["points"],"id":100},{"start":{"row":29,"column":29},"end":{"row":29,"column":30},"action":"insert","lines":["o"]}],[{"start":{"row":29,"column":29},"end":{"row":29,"column":30},"action":"remove","lines":["o"],"id":101}],[{"start":{"row":29,"column":29},"end":{"row":29,"column":30},"action":"insert","lines":["c"],"id":102},{"start":{"row":29,"column":30},"end":{"row":29,"column":31},"action":"insert","lines":["o"]},{"start":{"row":29,"column":31},"end":{"row":29,"column":32},"action":"insert","lines":["n"]},{"start":{"row":29,"column":32},"end":{"row":29,"column":33},"action":"insert","lines":["f"]},{"start":{"row":29,"column":33},"end":{"row":29,"column":34},"action":"insert","lines":["i"]},{"start":{"row":29,"column":34},"end":{"row":29,"column":35},"action":"insert","lines":["r"]},{"start":{"row":29,"column":35},"end":{"row":29,"column":36},"action":"insert","lines":["m"]},{"start":{"row":29,"column":36},"end":{"row":29,"column":37},"action":"insert","lines":["a"]},{"start":{"row":29,"column":37},"end":{"row":29,"column":38},"action":"insert","lines":["t"]},{"start":{"row":29,"column":38},"end":{"row":29,"column":39},"action":"insert","lines":["i"]},{"start":{"row":29,"column":39},"end":{"row":29,"column":40},"action":"insert","lines":["o"]},{"start":{"row":29,"column":40},"end":{"row":29,"column":41},"action":"insert","lines":["n"]}],[{"start":{"row":33,"column":41},"end":{"row":33,"column":47},"action":"remove","lines":["points"],"id":103},{"start":{"row":33,"column":41},"end":{"row":33,"column":42},"action":"insert","lines":["c"]},{"start":{"row":33,"column":42},"end":{"row":33,"column":43},"action":"insert","lines":["o"]},{"start":{"row":33,"column":43},"end":{"row":33,"column":44},"action":"insert","lines":["n"]},{"start":{"row":33,"column":44},"end":{"row":33,"column":45},"action":"insert","lines":["f"]},{"start":{"row":33,"column":45},"end":{"row":33,"column":46},"action":"insert","lines":["i"]},{"start":{"row":33,"column":46},"end":{"row":33,"column":47},"action":"insert","lines":["r"]},{"start":{"row":33,"column":47},"end":{"row":33,"column":48},"action":"insert","lines":["m"]},{"start":{"row":33,"column":48},"end":{"row":33,"column":49},"action":"insert","lines":["a"]},{"start":{"row":33,"column":49},"end":{"row":33,"column":50},"action":"insert","lines":["t"]},{"start":{"row":33,"column":50},"end":{"row":33,"column":51},"action":"insert","lines":["i"]},{"start":{"row":33,"column":51},"end":{"row":33,"column":52},"action":"insert","lines":["o"]}],[{"start":{"row":33,"column":52},"end":{"row":33,"column":53},"action":"insert","lines":["n"],"id":104}],[{"start":{"row":40,"column":36},"end":{"row":40,"column":42},"action":"remove","lines":["points"],"id":105},{"start":{"row":40,"column":36},"end":{"row":40,"column":37},"action":"insert","lines":["c"]},{"start":{"row":40,"column":37},"end":{"row":40,"column":38},"action":"insert","lines":["o"]},{"start":{"row":40,"column":38},"end":{"row":40,"column":39},"action":"insert","lines":["n"]},{"start":{"row":40,"column":39},"end":{"row":40,"column":40},"action":"insert","lines":["f"]},{"start":{"row":40,"column":40},"end":{"row":40,"column":41},"action":"insert","lines":["i"]},{"start":{"row":40,"column":41},"end":{"row":40,"column":42},"action":"insert","lines":["r"]},{"start":{"row":40,"column":42},"end":{"row":40,"column":43},"action":"insert","lines":["m"]},{"start":{"row":40,"column":43},"end":{"row":40,"column":44},"action":"insert","lines":["a"]},{"start":{"row":40,"column":44},"end":{"row":40,"column":45},"action":"insert","lines":["t"]},{"start":{"row":40,"column":45},"end":{"row":40,"column":46},"action":"insert","lines":["i"]},{"start":{"row":40,"column":46},"end":{"row":40,"column":47},"action":"insert","lines":["o"]}],[{"start":{"row":40,"column":47},"end":{"row":40,"column":48},"action":"insert","lines":["n"],"id":106}],[{"start":{"row":29,"column":105},"end":{"row":30,"column":0},"action":"insert","lines":["",""],"id":107},{"start":{"row":30,"column":0},"end":{"row":30,"column":16},"action":"insert","lines":["                "]},{"start":{"row":30,"column":16},"end":{"row":30,"column":17},"action":"insert","lines":["c"]},{"start":{"row":30,"column":17},"end":{"row":30,"column":18},"action":"insert","lines":["o"]},{"start":{"row":30,"column":18},"end":{"row":30,"column":19},"action":"insert","lines":["n"]},{"start":{"row":30,"column":19},"end":{"row":30,"column":20},"action":"insert","lines":["s"]}],[{"start":{"row":30,"column":20},"end":{"row":30,"column":21},"action":"insert","lines":["o"],"id":108},{"start":{"row":30,"column":21},"end":{"row":30,"column":22},"action":"insert","lines":["l"]},{"start":{"row":30,"column":22},"end":{"row":30,"column":23},"action":"insert","lines":["e"]},{"start":{"row":30,"column":23},"end":{"row":30,"column":24},"action":"insert","lines":["."]},{"start":{"row":30,"column":24},"end":{"row":30,"column":25},"action":"insert","lines":["l"]},{"start":{"row":30,"column":25},"end":{"row":30,"column":26},"action":"insert","lines":["o"]},{"start":{"row":30,"column":26},"end":{"row":30,"column":27},"action":"insert","lines":["g"]}],[{"start":{"row":30,"column":27},"end":{"row":30,"column":29},"action":"insert","lines":["()"],"id":109}],[{"start":{"row":30,"column":28},"end":{"row":30,"column":29},"action":"insert","lines":["c"],"id":110},{"start":{"row":30,"column":29},"end":{"row":30,"column":30},"action":"insert","lines":["o"]},{"start":{"row":30,"column":30},"end":{"row":30,"column":31},"action":"insert","lines":["n"]},{"start":{"row":30,"column":31},"end":{"row":30,"column":32},"action":"insert","lines":["f"]},{"start":{"row":30,"column":32},"end":{"row":30,"column":33},"action":"insert","lines":["i"]},{"start":{"row":30,"column":33},"end":{"row":30,"column":34},"action":"insert","lines":["r"]},{"start":{"row":30,"column":34},"end":{"row":30,"column":35},"action":"insert","lines":["m"]},{"start":{"row":30,"column":35},"end":{"row":30,"column":36},"action":"insert","lines":["a"]},{"start":{"row":30,"column":36},"end":{"row":30,"column":37},"action":"insert","lines":["t"]},{"start":{"row":30,"column":37},"end":{"row":30,"column":38},"action":"insert","lines":["i"]},{"start":{"row":30,"column":38},"end":{"row":30,"column":39},"action":"insert","lines":["o"]},{"start":{"row":30,"column":39},"end":{"row":30,"column":40},"action":"insert","lines":["n"]}],[{"start":{"row":30,"column":41},"end":{"row":30,"column":42},"action":"insert","lines":[";"],"id":111}],[{"start":{"row":29,"column":99},"end":{"row":29,"column":104},"action":"remove","lines":["value"],"id":113},{"start":{"row":29,"column":98},"end":{"row":29,"column":99},"action":"remove","lines":["."]}],[{"start":{"row":29,"column":16},"end":{"row":30,"column":0},"action":"insert","lines":["",""],"id":114},{"start":{"row":30,"column":0},"end":{"row":30,"column":16},"action":"insert","lines":["                "]}],[{"start":{"row":29,"column":16},"end":{"row":29,"column":17},"action":"insert","lines":["i"],"id":115},{"start":{"row":29,"column":17},"end":{"row":29,"column":18},"action":"insert","lines":["f"]}],[{"start":{"row":29,"column":18},"end":{"row":29,"column":20},"action":"insert","lines":["()"],"id":116}],[{"start":{"row":29,"column":19},"end":{"row":29,"column":65},"action":"insert","lines":["data[c].getElementsByClassName(\"confirmation\")"],"id":117}],[{"start":{"row":29,"column":65},"end":{"row":29,"column":66},"action":"insert","lines":["."],"id":118}],[{"start":{"row":29,"column":66},"end":{"row":29,"column":72},"action":"insert","lines":["item()"],"id":119}],[{"start":{"row":29,"column":71},"end":{"row":29,"column":72},"action":"insert","lines":["0"],"id":120}],[{"start":{"row":29,"column":74},"end":{"row":29,"column":75},"action":"insert","lines":["{"],"id":121}],[{"start":{"row":54,"column":9},"end":{"row":55,"column":0},"action":"insert","lines":["",""],"id":122},{"start":{"row":55,"column":0},"end":{"row":55,"column":8},"action":"insert","lines":["        "]},{"start":{"row":55,"column":8},"end":{"row":55,"column":9},"action":"insert","lines":["}"]}],[{"start":{"row":29,"column":73},"end":{"row":29,"column":74},"action":"insert","lines":["."],"id":123}],[{"start":{"row":29,"column":74},"end":{"row":29,"column":75},"action":"insert","lines":["c"],"id":124},{"start":{"row":29,"column":75},"end":{"row":29,"column":76},"action":"insert","lines":["h"]},{"start":{"row":29,"column":76},"end":{"row":29,"column":77},"action":"insert","lines":["e"]},{"start":{"row":29,"column":77},"end":{"row":29,"column":78},"action":"insert","lines":["c"]},{"start":{"row":29,"column":78},"end":{"row":29,"column":79},"action":"insert","lines":["k"]}],[{"start":{"row":29,"column":79},"end":{"row":29,"column":80},"action":"insert","lines":["e"],"id":125},{"start":{"row":29,"column":80},"end":{"row":29,"column":81},"action":"insert","lines":["d"]},{"start":{"row":29,"column":81},"end":{"row":29,"column":82},"action":"insert","lines":["="]},{"start":{"row":29,"column":82},"end":{"row":29,"column":83},"action":"insert","lines":["="]},{"start":{"row":29,"column":83},"end":{"row":29,"column":84},"action":"insert","lines":["="]}],[{"start":{"row":29,"column":84},"end":{"row":29,"column":85},"action":"insert","lines":["t"],"id":126},{"start":{"row":29,"column":85},"end":{"row":29,"column":86},"action":"insert","lines":["r"]},{"start":{"row":29,"column":86},"end":{"row":29,"column":87},"action":"insert","lines":["u"]},{"start":{"row":29,"column":87},"end":{"row":29,"column":88},"action":"insert","lines":["e"]}],[{"start":{"row":30,"column":44},"end":{"row":30,"column":99},"action":"remove","lines":["data[c].getElementsByClassName(\"confirmation\").item(0);"],"id":127},{"start":{"row":30,"column":44},"end":{"row":30,"column":45},"action":"insert","lines":["1"]},{"start":{"row":30,"column":45},"end":{"row":30,"column":46},"action":"insert","lines":[";"]}],[{"start":{"row":30,"column":46},"end":{"row":31,"column":0},"action":"insert","lines":["",""],"id":128},{"start":{"row":31,"column":0},"end":{"row":31,"column":16},"action":"insert","lines":["                "]},{"start":{"row":31,"column":16},"end":{"row":31,"column":17},"action":"insert","lines":["e"]},{"start":{"row":31,"column":17},"end":{"row":31,"column":18},"action":"insert","lines":["l"]},{"start":{"row":31,"column":18},"end":{"row":31,"column":19},"action":"insert","lines":["s"]},{"start":{"row":31,"column":19},"end":{"row":31,"column":20},"action":"insert","lines":["e"]}],[{"start":{"row":31,"column":20},"end":{"row":31,"column":21},"action":"insert","lines":["{"],"id":129}],[{"start":{"row":31,"column":21},"end":{"row":33,"column":17},"action":"insert","lines":["","                    ","                }"],"id":130}],[{"start":{"row":58,"column":8},"end":{"row":58,"column":9},"action":"remove","lines":["}"],"id":131}],[{"start":{"row":30,"column":46},"end":{"row":31,"column":0},"action":"insert","lines":["",""],"id":132},{"start":{"row":31,"column":0},"end":{"row":31,"column":16},"action":"insert","lines":["                "]},{"start":{"row":31,"column":16},"end":{"row":31,"column":17},"action":"insert","lines":["}"]}],[{"start":{"row":33,"column":20},"end":{"row":33,"column":50},"action":"insert","lines":["confirmation.confirmation = 1;"],"id":133}],[{"start":{"row":33,"column":48},"end":{"row":33,"column":49},"action":"remove","lines":["1"],"id":134}],[{"start":{"row":33,"column":48},"end":{"row":33,"column":49},"action":"insert","lines":["0"],"id":135}],[{"start":{"row":29,"column":18},"end":{"row":29,"column":19},"action":"insert","lines":[" "],"id":136},{"start":{"row":29,"column":82},"end":{"row":29,"column":83},"action":"insert","lines":[" "]},{"start":{"row":29,"column":86},"end":{"row":29,"column":87},"action":"insert","lines":[" "]},{"start":{"row":29,"column":92},"end":{"row":29,"column":93},"action":"insert","lines":[" "]},{"start":{"row":30,"column":0},"end":{"row":30,"column":4},"action":"insert","lines":["    "]},{"start":{"row":32,"column":20},"end":{"row":32,"column":21},"action":"insert","lines":[" "]},{"start":{"row":59,"column":0},"end":{"row":59,"column":8},"action":"remove","lines":["        "]}],[{"start":{"row":13,"column":31},"end":{"row":13,"column":39},"action":"remove","lines":["material"],"id":137},{"start":{"row":13,"column":31},"end":{"row":13,"column":32},"action":"insert","lines":["v"]},{"start":{"row":13,"column":32},"end":{"row":13,"column":33},"action":"insert","lines":["e"]},{"start":{"row":13,"column":33},"end":{"row":13,"column":34},"action":"insert","lines":["i"]},{"start":{"row":13,"column":34},"end":{"row":13,"column":35},"action":"insert","lines":["_"]},{"start":{"row":13,"column":35},"end":{"row":13,"column":36},"action":"insert","lines":["m"]},{"start":{"row":13,"column":36},"end":{"row":13,"column":37},"action":"insert","lines":["a"]},{"start":{"row":13,"column":37},"end":{"row":13,"column":38},"action":"insert","lines":["t"]}],[{"start":{"row":13,"column":50},"end":{"row":13,"column":58},"action":"remove","lines":["material"],"id":138},{"start":{"row":13,"column":50},"end":{"row":13,"column":51},"action":"insert","lines":["v"]},{"start":{"row":13,"column":51},"end":{"row":13,"column":52},"action":"insert","lines":["e"]},{"start":{"row":13,"column":52},"end":{"row":13,"column":53},"action":"insert","lines":["i"]},{"start":{"row":13,"column":53},"end":{"row":13,"column":54},"action":"insert","lines":["_"]},{"start":{"row":13,"column":54},"end":{"row":13,"column":55},"action":"insert","lines":["m"]},{"start":{"row":13,"column":55},"end":{"row":13,"column":56},"action":"insert","lines":["a"]},{"start":{"row":13,"column":56},"end":{"row":13,"column":57},"action":"insert","lines":["t"]}],[{"start":{"row":27,"column":20},"end":{"row":27,"column":28},"action":"remove","lines":["material"],"id":139},{"start":{"row":27,"column":20},"end":{"row":27,"column":21},"action":"insert","lines":["v"]},{"start":{"row":27,"column":21},"end":{"row":27,"column":22},"action":"insert","lines":["e"]},{"start":{"row":27,"column":22},"end":{"row":27,"column":23},"action":"insert","lines":["i"]},{"start":{"row":27,"column":23},"end":{"row":27,"column":24},"action":"insert","lines":["_"]},{"start":{"row":27,"column":24},"end":{"row":27,"column":25},"action":"insert","lines":["m"]},{"start":{"row":27,"column":25},"end":{"row":27,"column":26},"action":"insert","lines":["a"]},{"start":{"row":27,"column":26},"end":{"row":27,"column":27},"action":"insert","lines":["t"]}],[{"start":{"row":28,"column":23},"end":{"row":28,"column":31},"action":"remove","lines":["material"],"id":140},{"start":{"row":28,"column":23},"end":{"row":28,"column":24},"action":"insert","lines":["v"]},{"start":{"row":28,"column":24},"end":{"row":28,"column":25},"action":"insert","lines":["e"]},{"start":{"row":28,"column":25},"end":{"row":28,"column":26},"action":"insert","lines":["i"]},{"start":{"row":28,"column":26},"end":{"row":28,"column":27},"action":"insert","lines":["_"]},{"start":{"row":28,"column":27},"end":{"row":28,"column":28},"action":"insert","lines":["m"]},{"start":{"row":28,"column":28},"end":{"row":28,"column":29},"action":"insert","lines":["a"]},{"start":{"row":28,"column":29},"end":{"row":28,"column":30},"action":"insert","lines":["t"]}],[{"start":{"row":28,"column":35},"end":{"row":28,"column":43},"action":"remove","lines":["material"],"id":141},{"start":{"row":28,"column":35},"end":{"row":28,"column":36},"action":"insert","lines":["v"]},{"start":{"row":28,"column":36},"end":{"row":28,"column":37},"action":"insert","lines":["e"]},{"start":{"row":28,"column":37},"end":{"row":28,"column":38},"action":"insert","lines":["i"]},{"start":{"row":28,"column":38},"end":{"row":28,"column":39},"action":"insert","lines":["_"]},{"start":{"row":28,"column":39},"end":{"row":28,"column":40},"action":"insert","lines":["m"]},{"start":{"row":28,"column":40},"end":{"row":28,"column":41},"action":"insert","lines":["a"]},{"start":{"row":28,"column":41},"end":{"row":28,"column":42},"action":"insert","lines":["t"]}],[{"start":{"row":14,"column":111},"end":{"row":14,"column":119},"action":"remove","lines":["material"],"id":142},{"start":{"row":14,"column":111},"end":{"row":14,"column":112},"action":"insert","lines":["v"]},{"start":{"row":14,"column":112},"end":{"row":14,"column":113},"action":"insert","lines":["e"]},{"start":{"row":14,"column":113},"end":{"row":14,"column":114},"action":"insert","lines":["i"]},{"start":{"row":14,"column":114},"end":{"row":14,"column":115},"action":"insert","lines":["_"]},{"start":{"row":14,"column":115},"end":{"row":14,"column":116},"action":"insert","lines":["m"]},{"start":{"row":14,"column":116},"end":{"row":14,"column":117},"action":"insert","lines":["a"]},{"start":{"row":14,"column":117},"end":{"row":14,"column":118},"action":"insert","lines":["t"]}],[{"start":{"row":36,"column":154},"end":{"row":36,"column":162},"action":"remove","lines":["material"],"id":143},{"start":{"row":36,"column":154},"end":{"row":36,"column":155},"action":"insert","lines":["v"]},{"start":{"row":36,"column":155},"end":{"row":36,"column":156},"action":"insert","lines":["e"]},{"start":{"row":36,"column":156},"end":{"row":36,"column":157},"action":"insert","lines":["i"]},{"start":{"row":36,"column":157},"end":{"row":36,"column":158},"action":"insert","lines":["_"]},{"start":{"row":36,"column":158},"end":{"row":36,"column":159},"action":"insert","lines":["m"]},{"start":{"row":36,"column":159},"end":{"row":36,"column":160},"action":"insert","lines":["a"]},{"start":{"row":36,"column":160},"end":{"row":36,"column":161},"action":"insert","lines":["t"]}],[{"start":{"row":36,"column":166},"end":{"row":36,"column":174},"action":"remove","lines":["material"],"id":144},{"start":{"row":36,"column":166},"end":{"row":36,"column":167},"action":"insert","lines":["v"]},{"start":{"row":36,"column":167},"end":{"row":36,"column":168},"action":"insert","lines":["e"]},{"start":{"row":36,"column":168},"end":{"row":36,"column":169},"action":"insert","lines":["i"]},{"start":{"row":36,"column":169},"end":{"row":36,"column":170},"action":"insert","lines":["_"]},{"start":{"row":36,"column":170},"end":{"row":36,"column":171},"action":"insert","lines":["m"]},{"start":{"row":36,"column":171},"end":{"row":36,"column":172},"action":"insert","lines":["a"]},{"start":{"row":36,"column":172},"end":{"row":36,"column":173},"action":"insert","lines":["t"]}]]},"ace":{"folds":[],"scrolltop":554,"scrollleft":0,"selection":{"start":{"row":36,"column":173},"end":{"row":36,"column":173},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1610552419691,"hash":"6dba94d03645b3001fba5f260919eb15317ff638"}