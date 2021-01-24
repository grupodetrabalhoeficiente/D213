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
    fetch('https://d213.herokuapp.com/finished_occurrences/')
        .then(res => res.json())
        .then((out) => {
            $('#table tbody').empty();
            $.each(out, function(index, value) {
                obj.push({ "id_occurrence": value.id_occurrence });
                $('#table tbody').append('<tr class="fullRow"><th class ="id_occurrence" scope="row">' + value.id_occurrence + '</th><td>' + value.arrival.slice(0, 10) + '</td> <td>  <div id="' + value.id_occurrence + '" class="VerMais"><i class="fas fa-plus"></i></div> </td> </tr>')
            });
            rows = JSON.stringify(obj);
            let panels = document.querySelectorAll(".VerMais");
            for (let i = 0; i < panels.length; i++) {
                panels[i].addEventListener("click", openPanelHandler);
            }
        }).catch(err => console.error(err));
}

function OpenPanel(elem) {
    localStorage.setItem("id_occurrence", elem.id);
    console.log(localStorage.id_occurrence);
    window.location.replace("OcorrenciaDados.html");
}

function openPanelHandler(event) {
    OpenPanel(this);
}
