const id_occurrence = "1";
const submit = document.getElementById("submit");
submit.onclick = updateConfirmation;
let rows = {};
let obj = [];

function fillTable() {
    fetch('https://bdc5dcf6bca04b39ab10a706cdb79f29.vfs.cloud9.us-east-1.amazonaws.com/occurrences/' + id_occurrence + '/materials')
        .then(res => res.json())
        .then((out) => {
            $('#table tbody').empty();
            $.each(out, function(index, value) {
                obj.push({ "id_vei_mat": value.id_vei_mat });
                $('#table tbody').append('<tr class="fullRow"><th class ="id_vei_mat"scope="row">' + value.id_vei_mat + '</th><td>' + value.material_type + '</td> <td>  <label class="custom-checkbox" tab-index="0" aria-label="Checkbox Label"> <input class="confirmation"type="checkbox" checked> <span class="checkmark"></span> </label> </td> </tr>')
            });
            console.log(obj);
            rows = JSON.stringify(obj);
        }).catch(err => console.error(err));
}

function updateConfirmation() {
    let confirmation = {};
    let data = {};
    data = document.getElementsByClassName("fullRow");
    for (let c = 0; c < data.length; c++) {
        for (let id_vei_mat in obj) {
            if (obj[id_vei_mat].id_vei_mat == data[c].getElementsByClassName("id_vei_mat").item(0).innerHTML) {
                if (data[c].getElementsByClassName("confirmation").item(0).disabled === false) {
                    if (data[c].getElementsByClassName("confirmation").item(0).checked === true) {
                        confirmation.confirmation = '1';
                    }
                    else {
                        confirmation.confirmation = '0';
                    }
                    console.log(confirmation);
                    fetch('https://bdc5dcf6bca04b39ab10a706cdb79f29.vfs.cloud9.us-east-1.amazonaws.com/occurrences/' + id_occurrence + '/materials/' + obj[id_vei_mat].id_vei_mat.toString(), {
                        headers: { 'Content-Type': 'application/json' },
                        method: 'PUT',
                        body: JSON.stringify(confirmation)
                    }).then(function(response) {
                        if (!response.ok) {
                            console.log(response.status); //=> number 100–599
                            console.log(response.statusText); //=> String
                            console.log(response.headers); //=> Headers
                            console.log(response.url); //=> String
                            console.log(confirmation);
                        }
                        else {
                            data[c].getElementsByClassName("confirmation").item(0).disabled = true;
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
}


$(document).ready(function() {
    fillTable();
})
