let teamButton = document.getElementById("dadosId");
teamButton.onclick = opencloseForm;

let dadosForm = document.getElementById("dadosFormId");
let closed = 1;

let openP = document.getElementById("chamadaId");
openP.onclick = openPresence;

let openC = document.getElementById("materialId");
openC.onclick = openMateriais;

let openW = document.getElementById("testemunhaId");
openW.onclick = openWitness;

let openN = document.getElementById("notaId");
openN.onclick = openNotes;

function openPresence() {
    window.location.href = "OperationalsPresence.html";
}

function openMateriais() {
    window.location.href = "ConfirmarMateriais.html"
}

function openWitness() {
    window.location.href = "RegistarTestemunhas.html";
}

function openNotes() {
    window.location.href = "Notas.html";
}

function opencloseForm() {
    if (closed == 1) {
        closed = 0;
        dadosForm.style.display = "block";
        teamButton.style.top = "390px";
    }
    else {
        closed = 1;
        dadosForm.style.display = "none";
        teamButton.style.top = "0px";
    }
}

/*function myMove() {
    let elem = teamButton;
    let pos = 0;
    let id = setInterval(frame, 5);

    function frame() {
        if (pos == 384) {
            clearInterval(id);
        }
        else {
            pos++;
            elem.style.top = pos + "px";
        }
    }
}*/
