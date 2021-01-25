
let goBack = document.getElementById("goBack");
goBack.addEventListener("click",goBackFunction)
 
let panels = document.querySelectorAll(".menu");
for (let i = 0; i < panels.length; i++) {
    panels[i].addEventListener("click", removeLocalStorage);
}

function removeLocalStorage() {
    localStorage.removeItem('operationalSelected');
    localStorage.removeItem('rankoperationalSelected')
};

function goBackFunction(){
         window.location.replace('PerfilUpdate.html')
}

 function fillTable() {
     if (localStorage.operationalSelected == null || localStorage.id_operational_logged == localStorage.operationalSelected) {
         fetch('https://bdc5dcf6bca04b39ab10a706cdb79f29.vfs.cloud9.us-east-1.amazonaws.com/operationals/' + localStorage.id_operational_logged + '/occurrences')
             .then(res => res.json())
             .then((out) => {
                 $('#table tbody').empty();
                 $.each(out, function(index, value) {
                     if (value.points != undefined) {
                         $('#table tbody').append('<tr id="' + value.id_occurrence + '" class="fullRow"><td>' + value.id_occurrence + '</td><td>' + value.arrival.slice(0, 10) + '</td><td>' + value.points + '</td></tr>')
                     }
                     else {
                         $('#table tbody').append('<tr id="' + value.id_occurrence + '" class="fullRow"><td>' + value.id_occurrence + '</td><td>' + value.arrival.slice(0, 10) + '</td><td>' + "0" + '</td></tr>')
                     }
                 });
                 let panels = document.querySelectorAll(".fullRow");
                 for (let i = 0; i < panels.length; i++) {
                     panels[i].addEventListener("click", openPanelHandler);
                 }
             }).catch(err => console.error(err));
     }
     else {
         fetch('https://bdc5dcf6bca04b39ab10a706cdb79f29.vfs.cloud9.us-east-1.amazonaws.com/operationals/' + localStorage.operationalSelected + '/occurrences')
             .then(res => res.json())
             .then((out) => {
                 $('#table tbody').empty();
                 $.each(out, function(index, value) {
                     if (value.points != undefined) {
                         $('#table tbody').append('<tr id="' + value.id_occurrence + '" class="fullRow"><td>' + value.id_occurrence + '</td><td>' + value.arrival.slice(0, 10) + '</td><td>' + value.points + '</td></tr>')
                     }
                     else {
                         $('#table tbody').append('<tr id="' + value.id_occurrence + '" class="fullRow"><td>' + value.id_occurrence + '</td><td>' + value.arrival.slice(0, 10) + '</td><td>' + "0" + '</td></tr>')
                     }
                 });
                 let panels = document.querySelectorAll(".fullRow");
                 for (let i = 0; i < panels.length; i++) {
                     panels[i].addEventListener("click", openPanelHandler);
                 }
             }).catch(err => console.error(err));
     }
 }


 function OpenPanel(elem) {
     localStorage.setItem("id_occurrence", elem.id);
     console.log(localStorage.getItem('id_occurrence'))
     window.location.replace("OcorrenciaDados.html");

 }

 function openPanelHandler(event) {
     OpenPanel(this);
 }

 
 $(document).ready(function() {
     fillTable();
 })