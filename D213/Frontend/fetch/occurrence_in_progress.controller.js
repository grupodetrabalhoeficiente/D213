let rows = {};
let obj = [];

let back = document.getElementById("goBack");
back.onclick = goBack;

function goBack() {
    window.history.back();
}

function fillTable() {
    fetch('https://bdc5dcf6bca04b39ab10a706cdb79f29.vfs.cloud9.us-east-1.amazonaws.com/unfinished_occurrences/')
        .then(res => res.json())
        .then((out) => {
            $('#table tbody').empty();
            $.each(out, function(index, value) {
                obj.push({ "id_occurrence": value.id_occurrence });
                $('#table tbody').append('<tr class="fullRow"><th class ="id_occurrence" scope="row">' + value.id_occurrence + '</th><td>' + value.occurrence_type + '</td> <td>'+value.local+'</td><td>  <div id="' + value.id_occurrence + '" class="VerMais ' + value.id_occurrence + '" > <i class="fas fa-plus"></i> </div></td>  </tr>')
            });
            rows = JSON.stringify(obj);
            let panels = document.querySelectorAll(".VerMais");
            for (let i = 0; i < panels.length; i++) {
                panels[i].addEventListener("click", openPanelHandler);
            }
        }).catch(err => console.error(err));
}

function OpenPanel(elem) {
    let data = {};
    data.id_operational = localStorage.id_operational_logged;
    if (localStorage.getItem('id_occurrence_in_progress') === elem.id) {
        fetch('https://bdc5dcf6bca04b39ab10a706cdb79f29.vfs.cloud9.us-east-1.amazonaws.com/occurrences/' + localStorage.getItem('id_occurrence_in_progress') + '/responsible', {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify(data)
        }).then(function(response) {
            if (!response.ok) {
                console.log(response.status); //=> number 100–599
                console.log(response.statusText); //=> String
                console.log(response.headers); //=> Headers
                console.log(response.url); //=> String
            }
            else {
                window.location.replace("MenuOcorrencia.html");
            }
        }).then(function(result) {
            console.log(result);
        }).catch(function(err) {
            alert("Submission error");
            console.error(err);
        });
    }
    else {
        fetch('https://bdc5dcf6bca04b39ab10a706cdb79f29.vfs.cloud9.us-east-1.amazonaws.com/occurrences/' + elem.id + '/responsible', {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify(data)
        }).then(function(response) {
            if (!response.ok) {
                console.log(response.status); //=> number 100–599
                console.log(response.statusText); //=> String
                console.log(response.headers); //=> Headers
                console.log(response.url); //=> String
            }
            else {
                localStorage.setItem("id_occurrence_in_progress", elem.id);
                localStorage.setItem("stage", 0); 
                window.location.replace("MenuOcorrencia.html");
            }
        }).then(function(result) {
            console.log(result);
        }).catch(function(err) {
            alert("Submission error");
            console.error(err);
        });
    }
}


function openPanelHandler(event) {
    OpenPanel(this);
}
$(document).ready(function() {
    fillTable();
})