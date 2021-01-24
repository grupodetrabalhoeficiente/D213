const id_occurrence = localStorage.getItem('id_occurrence_in_progress');
const submit = document.getElementById("submit");
submit.onclick = updatePoints;
let obj = [];
let back = document.getElementById("goBack");
back.onclick = goBack;

function goBack() {
    window.history.back();
}
function fillTable() {
    fetch('https://d213.herokuapp.com/occurrences/' + id_occurrence + '/evaluations')
        .then(res => res.json())
        .then((out) => {
            let count = 1;
            $('#table tbody').empty();
            $.each(out, function(index, value) {
                obj.push({ "id_operational": value.id_operational });
                $('#table tbody').append('<tr class="fullRow"><th class ="id_operational"scope="row">' + value.id_operational + '</th><td>' + value.name + '</td> <td> <select class="custom-select" id="inputGroupSelect' + count.toString() + '">   <option selected value="1">1</option> <option value="2">2</option> <option value="3">3</option> <option value="4">4</option>  <option value="5">5</option></select> </td>')
                count++;
            });
        }).catch(err => console.error(err));
}

function updatePoints() {
    let points = {};
    let data = {};
    data = document.getElementsByClassName("fullRow");
    for (let c = 0; c < data.length; c++) {
        for (let id_operational in obj) {
            if (obj[id_operational].id_operational == data[c].getElementsByClassName("id_operational").item(0).innerHTML) {
                if (data[c].getElementsByClassName("custom-select").item(0).disabled === false) {
                    points.points = data[c].getElementsByClassName("custom-select").item(0).value;
                    fetch('https://d213.herokuapp.com/occurrences/' + id_occurrence + '/evaluations/' + obj[id_operational].id_operational.toString(), {
                        headers: { 'Content-Type': 'application/json' },
                        method: 'PUT',
                        body: JSON.stringify(points)
                    }).then(function(response) {
                        if (!response.ok) {
                            console.log(response.status); //=> number 100–599
                            console.log(response.statusText); //=> String
                            console.log(response.headers); //=> Headers
                            console.log(response.url); //=> String
                            console.log(points)
                        }
                        else {
                            data[c].getElementsByClassName("custom-select").item(0).disabled = true;
                        }
                    }).then(function(result) {
                        console.log(result);
                    }).catch(function(err) {
                        data[c].getElementsByClassName("custom-select").item(0).disabled = true;
                        console.error(err);
                    });
                }
            }
        }
    }
    finishOccurrenceFunction();
}


function finishOccurrenceFunction() {
    fetch('https://d213.herokuapp.com/status/' + id_occurrence, {
        headers: { 'Content-Type': 'application/json' },
        method: 'PUT',
    }).then(function(response) {
        if (!response.ok) {
            console.log(response.status); //=> number 100–599
            console.log(response.statusText); //=> String
            console.log(response.headers); //=> Headers
            console.log(response.url); //=> String
        }
        else {
            localStorage.removeItem('id_occurrence_in_progress');
            localStorage.removeItem('stage');
            localStorage.removeItem('help');
            localStorage.removeItem('materials');
            localStorage.removeItem('presence');
            localStorage.removeItem('arrival');
            alert("Ocorrencia terminada com sucesso");
            window.location.replace('MenuPrincipal.html')
        }
    }).then(function(result) {
        console.log(result);
    }).catch(function(err) {
        localStorage.removeItem('id_occurrence_in_progress');
            localStorage.removeItem('stage');
            localStorage.removeItem('help');
            localStorage.removeItem('materials');
            localStorage.removeItem('presence');
            localStorage.removeItem('arrival');
            alert("Ocorrencia terminada com sucesso");
            window.location.replace('MenuPrincipal.html')
        console.error(err);
        
    });
}
$(document).ready(function() {
    fillTable();
})


