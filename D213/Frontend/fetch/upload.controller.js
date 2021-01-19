const urlParams = new URLSearchParams(window.location.search);
const idUser = "1"; //Temporario depois alterar pra LocalHost


function saveAvatar() {
    let data = {};
    data.avatar = localStorage.localUploadedFileName;
    console.log(localStorage.localUploadedFileName);
    //console.log(data); //debugging para ver os dados que foram enviados
    //chamada fetch para envio dos dados para o servior via POST
    fetch("https://d213.herokuapp.com/operationals/" + idUser + "/upload", {
        headers: { 'Content-Type': 'application/json' },
        method: 'PUT',
        body: JSON.stringify(data)
    }).then(function(response) {
        if (!response.ok) {
            console.log(response.status); //=> number 100–599
            console.log(response.statusText); //=> String
            console.log(response.headers); //=> Headers
            console.log(response.url); //=> String
        }
    }).then(function(result) {
        console.log(result);
    }).catch(function(err) {
        alert("Submission error");
        console.error(err);
    });
}

$(document).ready(function() {
    saveAvatar();
})
