const id_occurrence = localStorage.getItem('id_occurrence_in_progress');
document.getElementById("submit").onclick = function(e) {
    //validação do formulário ao submeter
    saveWitness();
};
let back = document.getElementById("goBack");
back.onclick = goBack;

function goBack() {
    window.history.back();
}
function saveWitness() {
    let data = {};
    data.name = document.getElementById("nome_testemunha").value;
    data.email = document.getElementById("contacto_testemunha").value;
    data.place = document.getElementById("localidade_testemunha").value;
    data.profession = document.getElementById("morada_testemunha").value;
    data.testimony = document.getElementById("nota_testemunha").value;
    data.justification = document.getElementById("justification").value;
    console.log(data); //debugging para ver os dados que foram enviados
    //chamada fetch para envio dos dados para o servior via POST
    fetch('https://d213.herokuapp.com/occurrences/' + id_occurrence + '/witnesses', {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify(data)
    }).then(function(response) {
        if (!response.ok) {
            console.log(response.status); //=> number 100–599
            console.log(response.statusText); //=> String
            console.log(response.headers); //=> Headers
            console.log(response.url); //=> String
            if (response.status === 409) {
                alert("Duplicated Email");
            }
            else {
                throw Error(response.statusText);
            }
        }
        else {
            document.getElementById("form-testemunha").reset(); //limpeza dos dados do form
            alert("submitted with success");
        }
    }).then(function(result) {
        console.log(result);
    }).catch(function(err) {
        alert("Submission error");
        console.error(err);
    });
}
