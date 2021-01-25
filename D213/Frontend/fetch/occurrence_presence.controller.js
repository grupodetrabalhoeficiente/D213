const id_occurrence = localStorage.getItem('id_occurrence_in_progress');
let obj = [];
const submit = document.getElementById("submit1");
submit.onclick = updatePresence;



function fillTable() {
    fetch('https://bdc5dcf6bca04b39ab10a706cdb79f29.vfs.cloud9.us-east-1.amazonaws.com/occurrences/' + id_occurrence + '/operationals')
        .then(res => res.json())
        .then((out) => {
            $('#table tbody').empty();
            $.each(out, function(index, value) {
                if (value.statute !== "chefe") {
                    obj.push({ "id_operational": value.id_operational });
                    $('#table tbody').append('<tr class="fullRow"><th class ="id_operational"scope="row">' + value.id_operational + '</th><td>' + value.statute + '</td> <td>  <label class="checkboxOperationals" tab-index="0" aria-label="Checkbox Label"> <input class="presence"type="checkbox" checked> <span class="checkmark"></span> </label> </td> </tr>')
                } else {
                    obj.push({ "id_operational": value.id_operational });
                    $('#table tbody').append('<tr class="fullRow"><th class ="id_operational"scope="row">' + value.id_operational + '</th><td>' + value.statute + '</td> <td>  <label class="checkboxOperationals" tab-index="0" aria-label="Checkbox Label"> <input class="presence"type="checkbox" disabled checked> <span class="checkmark"></span> </label> </td> </tr>')
                }

            });
        }).catch(err => console.error(err));
}

function updatePresence() {
    let flag=0;
    let presence = {};
    let data = {};
    data = document.getElementsByClassName("fullRow");
    for (let c = 0; c < data.length; c++) {
        for (let id_operational in obj) {
            if (obj[id_operational].id_operational == data[c].getElementsByClassName("id_operational").item(0).innerHTML) {
                    if (data[c].getElementsByClassName("presence").item(0).checked === true) {
                        presence.presence = '1';
                    }
                    else {
                        presence.presence = '0';
                    }
                    fetch('https://bdc5dcf6bca04b39ab10a706cdb79f29.vfs.cloud9.us-east-1.amazonaws.com/occurrences/' + id_occurrence + '/presences/' + obj[id_operational].id_operational.toString(), {
                        headers: { 'Content-Type': 'application/json' },
                        method: 'PUT',
                        body: JSON.stringify(presence)
                    }).then(function(response) {
                        if (!response.ok) {
                            console.log(response.status); //=> number 100–599
                            console.log(response.statusText); //=> String
                            console.log(response.headers); //=> Headers
                            console.log(response.url); //=> String
                        }
                        else {
                            data[c].getElementsByClassName("presence").item(0).disabled = true;
                        }
                    }).then(function(result) {
                        console.log(result);
                    }).catch(function(err) {
                data[c].getElementsByClassName("presence").item(0).disabled = true;
                        console.error(err);
                    });
            }
        }
    }
    localStorage.setItem('presence',"checked");
    localStorage.setItem('stage', Number(localStorage.getItem('stage')) +1);
    window.location.replace("MenuOcorrencia.html");
}
$(document).ready(function() {
    fillTable();
})
