const id_operational = localStorage.id_operational_logged;

function fillTable() {
    fetch('https://bdc5dcf6bca04b39ab10a706cdb79f29.vfs.cloud9.us-east-1.amazonaws.com/operationals/' + id_operational + '/occurrences')
        .then(res => res.json())
        .then((out) => {
            $('#table tbody').empty();
            $.each(out, function(index, value) {
                if (value.points != undefined) {
                    $('#table tbody').append('<tr id="'+value.id_occurrence +'" class="fullRow"><td>' + value.id_occurrence + '</td><td>' + value.arrival.slice(0, 10) + '</td><td>' + value.points + '</td></tr>')
                }
                else {
                    $('#table tbody').append('<tr id="'+value.id_occurrence +'" class="fullRow"><td>' + value.id_occurrence + '</td><td>' + value.arrival.slice(0, 10) + '</td><td>' + "0" + '</td></tr>')
                }
            });
            let panels = document.querySelectorAll(".fullRow");
            for (let i = 0; i < panels.length; i++) {
                panels[i].addEventListener("click", openPanelHandler);
            }
        }).catch(err => console.error(err));
}

$(document).ready(function() {
    fillTable();
})

function OpenPanel(elem) {
   localStorage.setItem("id_occurrence", elem.id);
   console.log(localStorage.getItem('id_occurrence'))
        window.location.replace("OcorrenciaDados.html");
    
    
}

function openPanelHandler(event) {
    OpenPanel(this);
}