{"filter":false,"title":"occurrence_evaluation.controller.js","tooltip":"/D213/Frontend/fetch/occurrence_evaluation.controller.js","undoManager":{"mark":38,"position":38,"stack":[[{"start":{"row":23,"column":44},"end":{"row":23,"column":45},"action":"insert","lines":["s"],"id":6}],[{"start":{"row":23,"column":44},"end":{"row":23,"column":45},"action":"remove","lines":["s"],"id":7}],[{"start":{"row":19,"column":244},"end":{"row":19,"column":279},"action":"remove","lines":["<option selected>Avaliação</option>"],"id":8}],[{"start":{"row":19,"column":254},"end":{"row":19,"column":255},"action":"insert","lines":["s"],"id":9},{"start":{"row":19,"column":255},"end":{"row":19,"column":256},"action":"insert","lines":["e"]},{"start":{"row":19,"column":256},"end":{"row":19,"column":257},"action":"insert","lines":["l"]},{"start":{"row":19,"column":257},"end":{"row":19,"column":258},"action":"insert","lines":["e"]},{"start":{"row":19,"column":258},"end":{"row":19,"column":259},"action":"insert","lines":["c"]},{"start":{"row":19,"column":259},"end":{"row":19,"column":260},"action":"insert","lines":["t"]},{"start":{"row":19,"column":260},"end":{"row":19,"column":261},"action":"insert","lines":["e"]},{"start":{"row":19,"column":261},"end":{"row":19,"column":262},"action":"insert","lines":["d"]}],[{"start":{"row":19,"column":262},"end":{"row":19,"column":263},"action":"insert","lines":[" "],"id":10}],[{"start":{"row":68,"column":0},"end":{"row":69,"column":0},"action":"insert","lines":["",""],"id":11},{"start":{"row":69,"column":0},"end":{"row":70,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":64,"column":0},"end":{"row":65,"column":0},"action":"insert","lines":["",""],"id":12},{"start":{"row":65,"column":0},"end":{"row":66,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":66,"column":0},"end":{"row":88,"column":1},"action":"insert","lines":["function finishOccurrenceFunction() {","    fetch('https://bdc5dcf6bca04b39ab10a706cdb79f29.vfs.cloud9.us-east-1.amazonaws.com/status/' + id_occurrence, {","        headers: { 'Content-Type': 'application/json' },","        method: 'PUT',","    }).then(function(response) {","        if (!response.ok) {","            console.log(response.status); //=> number 100–599","            console.log(response.statusText); //=> String","            console.log(response.headers); //=> Headers","            console.log(response.url); //=> String","        }","        else {","            localStorage.setItem('stage', Number(localStorage.getItem('stage')) + 1);","            alert(\"submitted with success\");","            window.location.replace('UtilizacaoMateriais.html')","        }","    }).then(function(result) {","        console.log(result);","    }).catch(function(err) {","        alert(\"Submission error\");","        console.error(err);","    });","}"],"id":13}],[{"start":{"row":60,"column":5},"end":{"row":61,"column":0},"action":"insert","lines":["",""],"id":14},{"start":{"row":61,"column":0},"end":{"row":61,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":61,"column":4},"end":{"row":61,"column":30},"action":"insert","lines":["finishOccurrenceFunction()"],"id":15}],[{"start":{"row":61,"column":30},"end":{"row":61,"column":31},"action":"insert","lines":[";"],"id":16}],[{"start":{"row":78,"column":14},"end":{"row":79,"column":0},"action":"insert","lines":["",""],"id":17},{"start":{"row":79,"column":0},"end":{"row":79,"column":12},"action":"insert","lines":["            "]}],[{"start":{"row":79,"column":12},"end":{"row":79,"column":65},"action":"insert","lines":["localStorage.removeItem('id_occurrence_in_progress');"],"id":18}],[{"start":{"row":80,"column":12},"end":{"row":80,"column":85},"action":"remove","lines":["localStorage.setItem('stage', Number(localStorage.getItem('stage')) + 1);"],"id":19},{"start":{"row":80,"column":12},"end":{"row":80,"column":65},"action":"insert","lines":["localStorage.removeItem('id_occurrence_in_progress');"]}],[{"start":{"row":80,"column":37},"end":{"row":80,"column":62},"action":"remove","lines":["id_occurrence_in_progress"],"id":20},{"start":{"row":80,"column":37},"end":{"row":80,"column":38},"action":"insert","lines":["s"]},{"start":{"row":80,"column":38},"end":{"row":80,"column":39},"action":"insert","lines":["t"]},{"start":{"row":80,"column":39},"end":{"row":80,"column":40},"action":"insert","lines":["a"]},{"start":{"row":80,"column":40},"end":{"row":80,"column":41},"action":"insert","lines":["g"]},{"start":{"row":80,"column":41},"end":{"row":80,"column":42},"action":"insert","lines":["e"]}],[{"start":{"row":81,"column":19},"end":{"row":81,"column":41},"action":"remove","lines":["submitted with success"],"id":21},{"start":{"row":81,"column":19},"end":{"row":81,"column":20},"action":"insert","lines":["O"]},{"start":{"row":81,"column":20},"end":{"row":81,"column":21},"action":"insert","lines":["c"]},{"start":{"row":81,"column":21},"end":{"row":81,"column":22},"action":"insert","lines":["o"]},{"start":{"row":81,"column":22},"end":{"row":81,"column":23},"action":"insert","lines":["r"]},{"start":{"row":81,"column":23},"end":{"row":81,"column":24},"action":"insert","lines":["r"]},{"start":{"row":81,"column":24},"end":{"row":81,"column":25},"action":"insert","lines":["e"]},{"start":{"row":81,"column":25},"end":{"row":81,"column":26},"action":"insert","lines":["n"]},{"start":{"row":81,"column":26},"end":{"row":81,"column":27},"action":"insert","lines":["c"]},{"start":{"row":81,"column":27},"end":{"row":81,"column":28},"action":"insert","lines":["i"]},{"start":{"row":81,"column":28},"end":{"row":81,"column":29},"action":"insert","lines":["a"]}],[{"start":{"row":81,"column":29},"end":{"row":81,"column":30},"action":"insert","lines":[" "],"id":22},{"start":{"row":81,"column":30},"end":{"row":81,"column":31},"action":"insert","lines":["t"]},{"start":{"row":81,"column":31},"end":{"row":81,"column":32},"action":"insert","lines":["e"]},{"start":{"row":81,"column":32},"end":{"row":81,"column":33},"action":"insert","lines":["r"]},{"start":{"row":81,"column":33},"end":{"row":81,"column":34},"action":"insert","lines":["m"]},{"start":{"row":81,"column":34},"end":{"row":81,"column":35},"action":"insert","lines":["i"]},{"start":{"row":81,"column":35},"end":{"row":81,"column":36},"action":"insert","lines":["a"]}],[{"start":{"row":81,"column":35},"end":{"row":81,"column":36},"action":"remove","lines":["a"],"id":23}],[{"start":{"row":81,"column":35},"end":{"row":81,"column":36},"action":"insert","lines":["n"],"id":24},{"start":{"row":81,"column":36},"end":{"row":81,"column":37},"action":"insert","lines":["a"]},{"start":{"row":81,"column":37},"end":{"row":81,"column":38},"action":"insert","lines":["d"]},{"start":{"row":81,"column":38},"end":{"row":81,"column":39},"action":"insert","lines":["a"]}],[{"start":{"row":81,"column":39},"end":{"row":81,"column":40},"action":"insert","lines":[" "],"id":25},{"start":{"row":81,"column":40},"end":{"row":81,"column":41},"action":"insert","lines":["c"]},{"start":{"row":81,"column":41},"end":{"row":81,"column":42},"action":"insert","lines":["o"]},{"start":{"row":81,"column":42},"end":{"row":81,"column":43},"action":"insert","lines":["m"]}],[{"start":{"row":81,"column":43},"end":{"row":81,"column":44},"action":"insert","lines":[" "],"id":26},{"start":{"row":81,"column":44},"end":{"row":81,"column":45},"action":"insert","lines":["s"]},{"start":{"row":81,"column":45},"end":{"row":81,"column":46},"action":"insert","lines":["u"]},{"start":{"row":81,"column":46},"end":{"row":81,"column":47},"action":"insert","lines":["c"]},{"start":{"row":81,"column":47},"end":{"row":81,"column":48},"action":"insert","lines":["e"]},{"start":{"row":81,"column":48},"end":{"row":81,"column":49},"action":"insert","lines":["s"]},{"start":{"row":81,"column":49},"end":{"row":81,"column":50},"action":"insert","lines":["s"]},{"start":{"row":81,"column":50},"end":{"row":81,"column":51},"action":"insert","lines":["o"]}],[{"start":{"row":82,"column":37},"end":{"row":82,"column":61},"action":"remove","lines":["UtilizacaoMateriais.html"],"id":27},{"start":{"row":82,"column":37},"end":{"row":82,"column":38},"action":"insert","lines":["M"]},{"start":{"row":82,"column":38},"end":{"row":82,"column":39},"action":"insert","lines":["e"]},{"start":{"row":82,"column":39},"end":{"row":82,"column":40},"action":"insert","lines":["n"]},{"start":{"row":82,"column":40},"end":{"row":82,"column":41},"action":"insert","lines":["u"]}],[{"start":{"row":82,"column":37},"end":{"row":82,"column":41},"action":"remove","lines":["Menu"],"id":28},{"start":{"row":82,"column":37},"end":{"row":82,"column":50},"action":"insert","lines":["MenuPrincipal"]}],[{"start":{"row":82,"column":50},"end":{"row":82,"column":51},"action":"insert","lines":["."],"id":29},{"start":{"row":82,"column":51},"end":{"row":82,"column":52},"action":"insert","lines":["h"]},{"start":{"row":82,"column":52},"end":{"row":82,"column":53},"action":"insert","lines":["t"]},{"start":{"row":82,"column":53},"end":{"row":82,"column":54},"action":"insert","lines":["m"]},{"start":{"row":82,"column":54},"end":{"row":82,"column":55},"action":"insert","lines":["l"]}],[{"start":{"row":80,"column":45},"end":{"row":81,"column":0},"action":"insert","lines":["",""],"id":30},{"start":{"row":81,"column":0},"end":{"row":81,"column":12},"action":"insert","lines":["            "]}],[{"start":{"row":81,"column":12},"end":{"row":81,"column":65},"action":"insert","lines":["localStorage.removeItem('id_occurrence_in_progress');"],"id":31}],[{"start":{"row":81,"column":37},"end":{"row":81,"column":62},"action":"remove","lines":["id_occurrence_in_progress"],"id":32},{"start":{"row":81,"column":37},"end":{"row":81,"column":38},"action":"insert","lines":["m"]},{"start":{"row":81,"column":38},"end":{"row":81,"column":39},"action":"insert","lines":["a"]},{"start":{"row":81,"column":39},"end":{"row":81,"column":40},"action":"insert","lines":["t"]},{"start":{"row":81,"column":40},"end":{"row":81,"column":41},"action":"insert","lines":["e"]},{"start":{"row":81,"column":41},"end":{"row":81,"column":42},"action":"insert","lines":["r"]},{"start":{"row":81,"column":42},"end":{"row":81,"column":43},"action":"insert","lines":["i"]},{"start":{"row":81,"column":43},"end":{"row":81,"column":44},"action":"insert","lines":["a"]},{"start":{"row":81,"column":44},"end":{"row":81,"column":45},"action":"insert","lines":["l"]},{"start":{"row":81,"column":45},"end":{"row":81,"column":46},"action":"insert","lines":["s"]}],[{"start":{"row":81,"column":49},"end":{"row":82,"column":0},"action":"insert","lines":["",""],"id":33},{"start":{"row":82,"column":0},"end":{"row":82,"column":12},"action":"insert","lines":["            "]}],[{"start":{"row":82,"column":12},"end":{"row":82,"column":65},"action":"insert","lines":["localStorage.removeItem('id_occurrence_in_progress');"],"id":34}],[{"start":{"row":82,"column":37},"end":{"row":82,"column":62},"action":"remove","lines":["id_occurrence_in_progress"],"id":35},{"start":{"row":82,"column":37},"end":{"row":82,"column":38},"action":"insert","lines":["p"]},{"start":{"row":82,"column":38},"end":{"row":82,"column":39},"action":"insert","lines":["r"]},{"start":{"row":82,"column":39},"end":{"row":82,"column":40},"action":"insert","lines":["e"]},{"start":{"row":82,"column":40},"end":{"row":82,"column":41},"action":"insert","lines":["s"]},{"start":{"row":82,"column":41},"end":{"row":82,"column":42},"action":"insert","lines":["e"]},{"start":{"row":82,"column":42},"end":{"row":82,"column":43},"action":"insert","lines":["n"]},{"start":{"row":82,"column":43},"end":{"row":82,"column":44},"action":"insert","lines":["c"]},{"start":{"row":82,"column":44},"end":{"row":82,"column":45},"action":"insert","lines":["e"]}],[{"start":{"row":62,"column":0},"end":{"row":63,"column":57},"action":"remove","lines":["    window.location.replace('MenuPrincipal.html');","    localStorage.removeItem('id_occurrence_in_progress');"],"id":36},{"start":{"row":61,"column":31},"end":{"row":62,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":78,"column":45},"end":{"row":79,"column":0},"action":"insert","lines":["",""],"id":37},{"start":{"row":79,"column":0},"end":{"row":79,"column":12},"action":"insert","lines":["            "]}],[{"start":{"row":79,"column":12},"end":{"row":79,"column":65},"action":"insert","lines":["localStorage.removeItem('id_occurrence_in_progress');"],"id":38}],[{"start":{"row":79,"column":37},"end":{"row":79,"column":62},"action":"remove","lines":["id_occurrence_in_progress"],"id":39},{"start":{"row":79,"column":37},"end":{"row":79,"column":38},"action":"insert","lines":["h"]},{"start":{"row":79,"column":38},"end":{"row":79,"column":39},"action":"insert","lines":["e"]},{"start":{"row":79,"column":39},"end":{"row":79,"column":40},"action":"insert","lines":["l"]},{"start":{"row":79,"column":40},"end":{"row":79,"column":41},"action":"insert","lines":["p"]}],[{"start":{"row":81,"column":48},"end":{"row":82,"column":0},"action":"insert","lines":["",""],"id":40},{"start":{"row":82,"column":0},"end":{"row":82,"column":12},"action":"insert","lines":["            "]}],[{"start":{"row":82,"column":12},"end":{"row":82,"column":48},"action":"insert","lines":["localStorage.removeItem('presence');"],"id":41}],[{"start":{"row":82,"column":37},"end":{"row":82,"column":45},"action":"remove","lines":["presence"],"id":42},{"start":{"row":82,"column":37},"end":{"row":82,"column":38},"action":"insert","lines":["a"]},{"start":{"row":82,"column":38},"end":{"row":82,"column":39},"action":"insert","lines":["r"]},{"start":{"row":82,"column":39},"end":{"row":82,"column":40},"action":"insert","lines":["r"]},{"start":{"row":82,"column":40},"end":{"row":82,"column":41},"action":"insert","lines":["i"]},{"start":{"row":82,"column":41},"end":{"row":82,"column":42},"action":"insert","lines":["v"]},{"start":{"row":82,"column":42},"end":{"row":82,"column":43},"action":"insert","lines":["a"]},{"start":{"row":82,"column":43},"end":{"row":82,"column":44},"action":"insert","lines":["l"]}],[{"start":{"row":82,"column":43},"end":{"row":82,"column":44},"action":"remove","lines":["l"],"id":43}],[{"start":{"row":82,"column":43},"end":{"row":82,"column":44},"action":"insert","lines":["l"],"id":44}]]},"ace":{"folds":[],"scrolltop":1037,"scrollleft":0,"selection":{"start":{"row":82,"column":44},"end":{"row":82,"column":44},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":60,"state":"no_regex","mode":"ace/mode/javascript"}},"timestamp":1611419402556,"hash":"d04288b76b82612bd9877a69edb2d01ddd9c3764"}