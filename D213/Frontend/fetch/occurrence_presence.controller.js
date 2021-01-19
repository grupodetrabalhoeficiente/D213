const id_occurrence = localStorage.getItem('id_occurrence_in_progress');
let obj = [];
const submit = document.getElementById("submit");
submit.onclick = updatePresence;
let back = document.getElementById("goBack");
back.onclick = goBack;

function goBack() {
    window.history.back();
}
function fillTable() {
    fetch('https://d213.herokuapp.com/occurrences/' + id_occurrence + '/operationals')
        .then(res => res.json())
        .then((out) => {
            $('#table tbody').empty();
            $.each(out, function(index, value) {
                if (value.statute !== "chefe") {
                    obj.push({ "id_operational": value.id_operational });
                    $('#table tbody').append('<tr class="fullRow"><th class ="id_operational"scope="row">' + value.id_operational + '</th><td>' + value.statute + '</td> <td>  <label class="custom-checkbox checkboxOperationals" tab-index="0" aria-label="Checkbox Label"> <input class="presence"type="checkbox" checked> <span class="checkmark"></span> </label> </td> </tr>')
                }

            });
        }).catch(err => console.error(err));
}

function updatePresence() {
    let flag;
    let presence = {};
    let data = {};
    data = document.getElementsByClassName("fullRow");
    for (let c = 0; c < data.length; c++) {
        for (let id_operational in obj) {
            if (obj[id_operational].id_operational == data[c].getElementsByClassName("id_operational").item(0).innerHTML) {
                if (data[c].getElementsByClassName("presence").item(0).disabled === false) {
                    flag=true;
                    if (data[c].getElementsByClassName("presence").item(0).checked === true) {
                        presence.presence = '1';
                    }
                    else {
                        presence.presence = '0';
                    }
                    console.log(obj[id_operational].id_operational.toString());
                    fetch('https://d213.herokuapp.com/occurrences/' + id_occurrence + '/presences/' + obj[id_operational].id_operational.toString(), {
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
                            alert("submitted with success");
                            data[c].getElementsByClassName("presence").item(0).disabled = true;
                        }
                    }).then(function(result) {
                        console.log(result);
                    }).catch(function(err) {
                        alert("Submission error");
                        console.error(err);
                    });
                }
            }
        }
    }
    if(flag){
    localStorage.setItem('stage', Number(localStorage.getItem('stage')) +1);
    console.log(localStorage.getItem('stage'));
    window.location.replace("MenuOcorrencia.html");
    }
}
$(document).ready(function() {
    fillTable();
})
