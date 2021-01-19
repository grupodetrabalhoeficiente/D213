const id_occurrence = localStorage.getItem('id_occurrence_in_progress');
const submit = document.getElementById("submit");
submit.onclick = updateUtilization;
let rows = {};
let obj = [];
let back = document.getElementById("goBack");
back.onclick = goBack;

function goBack() {
    window.history.back();
}
function fillTable() {
    fetch('https://d213.herokuapp.com/occurrences/' + id_occurrence + '/materials_utilizations')
        .then(res => res.json())
        .then((out) => {
            $('#table tbody').empty();
            $.each(out, function(index, value) {
                obj.push({ "id_vei_mat": value.id_vei_mat });
                $('#table tbody').append('<tr class="fullRow"><th class ="id_vei_mat" scope="row">' + value.id_vei_mat + '</th><td>' + value.material_type + '</td> <td>  <label class="custom-checkbox" tab-index="0" aria-label="Checkbox Label"> <input class="utilization"type="checkbox" checked> <span class="checkmark"></span> </label> </td> </tr>')
            });
            console.log(obj);
            rows = JSON.stringify(obj);
        }).catch(err => console.error(err));
}

function updateUtilization() {
    let utilization = {};
    let data = {};
    data = document.getElementsByClassName("fullRow");
    for (let c = 0; c < data.length; c++) {
        for (let id_vei_mat in obj) {
            if (obj[id_vei_mat].id_vei_mat == data[c].getElementsByClassName("id_vei_mat").item(0).innerHTML) {
                if (data[c].getElementsByClassName("utilization").item(0).disabled === false) {
                    if (data[c].getElementsByClassName("utilization").item(0).checked === true) {
                        utilization.utilization = '1';
                    }
                    else {
                        utilization.utilization = '0';
                    }
                    console.log(utilization);
                    fetch('https://d213.herokuapp.com/occurrences/' + id_occurrence + '/materials_utilizations/' + obj[id_vei_mat].id_vei_mat.toString(), {
                        headers: { 'Content-Type': 'application/json' },
                        method: 'PUT',
                        body: JSON.stringify(utilization)
                    }).then(function(response) {
                        if (!response.ok) {
                            console.log(response.status); //=> number 100–599
                            console.log(response.statusText); //=> String
                            console.log(response.headers); //=> Headers
                            console.log(response.url); //=> String
                            console.log(utilization);
                        }
                        else {
                            data[c].getElementsByClassName("utilization").item(0).disabled = true;
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
     localStorage.setItem('stage', Number(localStorage.getItem('stage')) +1);
    window.location.replace('AvaliarOperacionais.html');
}


$(document).ready(function() {
    fillTable();
})
