const id_occurrence = localStorage.getItem('id_occurrence_in_progress');
document.getElementById("submit1").onclick = function(e) {
    //validação do formulário ao submeter
    saveNotes();
};
//Confirm Button
let confirm = document.getElementById("confirmarTxtId");
confirm.onclick = closeForm;
let back = document.getElementById("goBack");
back.onclick = goBack;

function goBack() {
    window.history.back();
}
function saveNotes() {
    let data = {};
    data.description = document.getElementById("NotaTexto").value;
    console.log(data); //debugging para ver os dados que foram enviados
    //chamada fetch para envio dos dados para o servior via POST
    fetch('https://bdc5dcf6bca04b39ab10a706cdb79f29.vfs.cloud9.us-east-1.amazonaws.com/occurrences/' + id_occurrence + '/notes', {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify(data)
    }).then(function(response) {
        if (!response.ok) {
             openForm();
            console.log(response.status); //=> number 100–599
            console.log(response.statusText); //=> String
            console.log(response.headers); //=> Headers
            console.log(response.url); //=> String
        }
        else {
            
            document.getElementById("form-notas").reset(); //limpeza dos dados do form
        }
    }).then(function(result) {
        console.log(result);
    }).catch(function(err) {
         openForm();
        console.error(err);
    });
}

//Error Open Close Functions
function openForm() {
    document.getElementById("textTxt1").className = "textTxtClass text-center";
    document.getElementById("textTxt").className = "hidden";
    document.getElementById("errorFrame").className = "errorFrame";
}

function closeForm() {
    document.getElementById("errorFrame").className = "hidden";
}
