const id_occurrence = "2";
const submit = document.getElementById("submit");
submit.onclick = updatePoints;
let rows = {};
let obj = [];

function fillTable() {
    fetch('https://bdc5dcf6bca04b39ab10a706cdb79f29.vfs.cloud9.us-east-1.amazonaws.com/occurrences/' + id_occurrence + '/evaluations')
        .then(res => res.json())
        .then((out) => {
            let count = 1;
            $('#table tbody').empty();
            $.each(out, function(index, value) {
                obj.push({ "id_operational": value.id_operational });
                $('#table tbody').append('<tr class="fullRow"><th class ="id_operational"scope="row">' + value.id_operational + '</th><td>' + value.name + '</td> <td> <select class="custom-select" id="inputGroupSelect' + count.toString() + '"> <option selected>Avaliação</option>  <option value="1">1</option> <option value="2">2</option> <option value="3">3</option> <option value="4">4</option>  <option value="5">5</option></select> </td>')
                count++;
            });
            rows = JSON.stringify(obj);
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
                    fetch('https://bdc5dcf6bca04b39ab10a706cdb79f29.vfs.cloud9.us-east-1.amazonaws.com/occurrences/' + id_occurrence + '/evaluations/' + obj[id_operational].id_operational.toString(), {
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
                            alert("submitted with success");
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