let rows = {};
let obj = [];
$(document).ready(function() {
    fillTable();
})
let back = document.getElementById("goBack");
back.onclick = goBack;

function goBack() {
    window.history.back();
}

function fillTable() {
    fetch('https://d213.herokuapp.com/unfinished_occurrences/')
        .then(res => res.json())
        .then((out) => {
            $('#table tbody').empty();
            $.each(out, function(index, value) {
                obj.push({ "id_occurrence": value.id_occurrence });
                $('#table tbody').append('<tr class="fullRow"><th class ="id_occurrence" scope="row">' + value.id_occurrence + '</th><td>' + value.occurrence_type + '</td> <td>  <input id="' + value.id_occurrence + '"type="button" class="VerMais ' + value.id_occurrence + '" value="Ver Mais"/> </td> </tr>')
            });
            rows = JSON.stringify(obj);
            let panels = document.querySelectorAll(".VerMais");
            for (let i = 0; i < panels.length; i++) {
                panels[i].addEventListener("click", openPanelHandler);
            }
        }).catch(err => console.error(err));
}

function OpenPanel(elem) {
    if ( localStorage.getItem('id_occurrence_in_progress') === elem.id) {
        window.location.replace("MenuOcorrencia.html");
    }
    else {
        localStorage.setItem("id_occurrence_in_progress", elem.id);
        localStorage.setItem("stage", 0);
        window.location.replace("MenuOcorrencia.html");
    }
}

function openPanelHandler(event) {
    OpenPanel(this);
}
