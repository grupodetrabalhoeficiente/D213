{"filter":false,"title":"ranksUpdate.controller.js","tooltip":"/D213/Frontend/fetch/ranksUpdate.controller.js","undoManager":{"mark":33,"position":33,"stack":[[{"start":{"row":0,"column":0},"end":{"row":18,"column":1},"action":"insert","lines":["function fillTable() {","    fetch('https://bdc5dcf6bca04b39ab10a706cdb79f29.vfs.cloud9.us-east-1.amazonaws.com/occurrences/' + id_occurrence + '/operationals')","        .then(res => res.json())","        .then((out) => {","            let screen = document.getElementById(\"screen\");","            let count = 1;","            let txt = \"\";","            $.each(out, function(index, value) {","                txt += \"<div class='presenceDiv'>\";","                txt += \"<form> \";","                txt += \"<span class='ptsClass'>\" + \"Operational \" + value.id_operational + \"</span>\";","                txt += '<input type=\"radio\" class=\"yesClass\" name=\"presence\" id=\"checkyes2\" value=\"1\" checked> ';","                txt += '<input type=\"radio\" class=\"noClass\" name=\"presence\" id=\"checkno2\" value=\"0\">';","                txt += \"</form>\"","                txt += \"</div\";","            });","            screen.innerHTML += txt;","        }).catch(err => console.error(err));","}"],"id":1}],[{"start":{"row":1,"column":87},"end":{"row":1,"column":100},"action":"remove","lines":["occurrences/'"],"id":2},{"start":{"row":1,"column":87},"end":{"row":1,"column":101},"action":"insert","lines":["/operationals/"]}],[{"start":{"row":1,"column":87},"end":{"row":1,"column":88},"action":"remove","lines":["/"],"id":3}],[{"start":{"row":1,"column":100},"end":{"row":1,"column":101},"action":"insert","lines":["'"],"id":4}],[{"start":{"row":1,"column":117},"end":{"row":1,"column":135},"action":"remove","lines":[" + '/operationals'"],"id":5}],[{"start":{"row":18,"column":1},"end":{"row":19,"column":0},"action":"insert","lines":["",""],"id":7},{"start":{"row":19,"column":0},"end":{"row":20,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":20,"column":0},"end":{"row":38,"column":1},"action":"insert","lines":["function fillTable() {","    fetch('https://bdc5dcf6bca04b39ab10a706cdb79f29.vfs.cloud9.us-east-1.amazonaws.com/operationals/' + id_occurrence)","        .then(res => res.json())","        .then((out) => {","            let screen = document.getElementById(\"screen\");","            let count = 1;","            let txt = \"\";","            $.each(out, function(index, value) {","                txt += \"<div class='presenceDiv'>\";","                txt += \"<form> \";","                txt += \"<span class='ptsClass'>\" + \"Operational \" + value.id_operational + \"</span>\";","                txt += '<input type=\"radio\" class=\"yesClass\" name=\"presence\" id=\"checkyes2\" value=\"1\" checked> ';","                txt += '<input type=\"radio\" class=\"noClass\" name=\"presence\" id=\"checkno2\" value=\"0\">';","                txt += \"</form>\"","                txt += \"</div\";","            });","            screen.innerHTML += txt;","        }).catch(err => console.error(err));","}"],"id":8}],[{"start":{"row":20,"column":9},"end":{"row":20,"column":18},"action":"remove","lines":["fillTable"],"id":9},{"start":{"row":20,"column":9},"end":{"row":20,"column":10},"action":"insert","lines":["n"]},{"start":{"row":20,"column":10},"end":{"row":20,"column":11},"action":"insert","lines":["a"]},{"start":{"row":20,"column":11},"end":{"row":20,"column":12},"action":"insert","lines":["m"]},{"start":{"row":20,"column":12},"end":{"row":20,"column":13},"action":"insert","lines":["e"]}],[{"start":{"row":20,"column":12},"end":{"row":20,"column":13},"action":"remove","lines":["e"],"id":10},{"start":{"row":20,"column":11},"end":{"row":20,"column":12},"action":"remove","lines":["m"]},{"start":{"row":20,"column":10},"end":{"row":20,"column":11},"action":"remove","lines":["a"]},{"start":{"row":20,"column":9},"end":{"row":20,"column":10},"action":"remove","lines":["n"]}],[{"start":{"row":20,"column":9},"end":{"row":20,"column":10},"action":"insert","lines":["M"],"id":11}],[{"start":{"row":20,"column":9},"end":{"row":20,"column":10},"action":"remove","lines":["M"],"id":12}],[{"start":{"row":20,"column":9},"end":{"row":20,"column":10},"action":"insert","lines":["m"],"id":13},{"start":{"row":20,"column":10},"end":{"row":20,"column":11},"action":"insert","lines":["y"]},{"start":{"row":20,"column":11},"end":{"row":20,"column":12},"action":"insert","lines":["R"]},{"start":{"row":20,"column":12},"end":{"row":20,"column":13},"action":"insert","lines":["a"]},{"start":{"row":20,"column":13},"end":{"row":20,"column":14},"action":"insert","lines":["n"]},{"start":{"row":20,"column":14},"end":{"row":20,"column":15},"action":"insert","lines":["k"]}],[{"start":{"row":0,"column":13},"end":{"row":0,"column":14},"action":"insert","lines":["R"],"id":14},{"start":{"row":0,"column":14},"end":{"row":0,"column":15},"action":"insert","lines":["a"]},{"start":{"row":0,"column":15},"end":{"row":0,"column":16},"action":"insert","lines":["n"]},{"start":{"row":0,"column":16},"end":{"row":0,"column":17},"action":"insert","lines":["k"]}],[{"start":{"row":0,"column":18},"end":{"row":0,"column":22},"action":"remove","lines":["able"],"id":15},{"start":{"row":0,"column":17},"end":{"row":0,"column":18},"action":"remove","lines":["T"]}],[{"start":{"row":21,"column":101},"end":{"row":21,"column":117},"action":"remove","lines":[" + id_occurrence"],"id":16}],[{"start":{"row":1,"column":107},"end":{"row":1,"column":117},"action":"remove","lines":["occurrence"],"id":17},{"start":{"row":1,"column":107},"end":{"row":1,"column":108},"action":"insert","lines":["o"]},{"start":{"row":1,"column":108},"end":{"row":1,"column":109},"action":"insert","lines":["p"]},{"start":{"row":1,"column":109},"end":{"row":1,"column":110},"action":"insert","lines":["e"]},{"start":{"row":1,"column":110},"end":{"row":1,"column":111},"action":"insert","lines":["r"]}],[{"start":{"row":1,"column":104},"end":{"row":1,"column":111},"action":"remove","lines":["id_oper"],"id":18},{"start":{"row":1,"column":104},"end":{"row":1,"column":118},"action":"insert","lines":["id_operational"]}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":20},{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":22},"action":"insert","lines":["const idUser = \"2378\";"],"id":21}],[{"start":{"row":3,"column":107},"end":{"row":3,"column":118},"action":"remove","lines":["operational"],"id":22},{"start":{"row":3,"column":107},"end":{"row":3,"column":108},"action":"insert","lines":["U"]},{"start":{"row":3,"column":108},"end":{"row":3,"column":109},"action":"insert","lines":["s"]},{"start":{"row":3,"column":109},"end":{"row":3,"column":110},"action":"insert","lines":["e"]},{"start":{"row":3,"column":110},"end":{"row":3,"column":111},"action":"insert","lines":["r"]}],[{"start":{"row":3,"column":106},"end":{"row":3,"column":107},"action":"remove","lines":["_"],"id":23}],[{"start":{"row":40,"column":1},"end":{"row":41,"column":0},"action":"insert","lines":["",""],"id":24}],[{"start":{"row":10,"column":24},"end":{"row":10,"column":49},"action":"remove","lines":["<div class='presenceDiv'>"],"id":26},{"start":{"row":10,"column":24},"end":{"row":10,"column":56},"action":"insert","lines":["<div class=\"eachPersonRankBody\">"]}],[{"start":{"row":10,"column":35},"end":{"row":10,"column":36},"action":"remove","lines":["\""],"id":27}],[{"start":{"row":10,"column":35},"end":{"row":10,"column":36},"action":"insert","lines":["'"],"id":28}],[{"start":{"row":10,"column":54},"end":{"row":10,"column":55},"action":"remove","lines":["\""],"id":29}],[{"start":{"row":10,"column":54},"end":{"row":10,"column":55},"action":"insert","lines":["'"],"id":30}],[{"start":{"row":6,"column":50},"end":{"row":6,"column":56},"action":"remove","lines":["screen"],"id":31},{"start":{"row":6,"column":50},"end":{"row":6,"column":63},"action":"insert","lines":["everybodyRank"]}],[{"start":{"row":10,"column":58},"end":{"row":11,"column":33},"action":"remove","lines":["","                txt += \"<form> \";"],"id":32}],[{"start":{"row":11,"column":24},"end":{"row":11,"column":47},"action":"remove","lines":["<span class='ptsClass'>"],"id":33},{"start":{"row":11,"column":24},"end":{"row":11,"column":51},"action":"insert","lines":["<span id=\"nameRank\"></span>"]}],[{"start":{"row":11,"column":42},"end":{"row":11,"column":43},"action":"remove","lines":["\""],"id":34}],[{"start":{"row":11,"column":42},"end":{"row":11,"column":43},"action":"insert","lines":["'"],"id":35}],[{"start":{"row":11,"column":33},"end":{"row":11,"column":34},"action":"remove","lines":["\""],"id":36}],[{"start":{"row":11,"column":33},"end":{"row":11,"column":34},"action":"insert","lines":["'"],"id":37}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":11,"column":34},"end":{"row":11,"column":34},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1608395598816,"hash":"dd2c89fdebdf19b7f7ba15c78243a2f73d4fca43"}