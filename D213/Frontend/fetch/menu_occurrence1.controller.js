const id_occurrence = localStorage.getItem('id_occurrence_in_progress');
let arrivalOccurrence = document.getElementById("chegadaId");
arrivalOccurrence.onclick = arrivalOccurrenceFunction;
let occurrenceButton = document.getElementById('finalizarId');
occurrenceButton.onclick = advanceOccurrence;
let openP = document.getElementById("chamadaId");
openP.onclick = openPresence;
let openC = document.getElementById("materialId");
openC.onclick = openMateriais;
let openH = document.getElementById("ajudaId");
openH.onclick = openPedidos;
let openW = document.getElementById("testemunhaId");
openW.onclick = openWitness;
let openN = document.getElementById("notaId");
openN.onclick = openNotes;
let teamButton = document.getElementById("dadosId");
teamButton.onclick = opencloseForm;
let dadosForm = document.getElementById("dadosFormId");
let closed = 1;



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
        teamButton.style.top = "499px";
    }
    else {
        closed = 1;
        dadosForm.style.display = "none";
        teamButton.style.top = "0px";
    }
}

function goBack() {
    window.history.back();
}
function openPedidos() {
    if (localStorage.getItem('help') == undefined) {
        window.location.href = "PedidoDeAjuda1.html";
    }
}

function openPresence() {
    if (localStorage.getItem('presence') == undefined) {
        window.location.href = "OperationalsPresence.html";
    }
}

function openMateriais() {
    if (localStorage.getItem('materials') == undefined) {
        window.location.href = "ConfirmarMateriais.html"
    }
}

/*let x = document.getElementById('chevron-down')
x.onclick = expand();
function expand(){
    console.log("asdadsa")
    x.style.height="200px";
}*/
/*function criarDiv() {
    console.log('fds')
    fetch('https://d213.herokuapp.com/occurrences/'+id_occurrence+'/operationals')
        .then(res => res.json())
        .then((out) => {
            $('#dadosFormId form').empty();
            $.each(out, function(index, value) {
                p = value.id_operational;
            })
        }).catch(err => console.error(err));
}*/
function occurenceOperationals() {
    fetch('https://d213.herokuapp.com/occurrences/' + id_occurrence + '/operationals')
        .then(res => res.json())
        .then((out) => {
            let dadosDiv = document.getElementById("dadosFormId");
            let txt = "";
            $.each(out, function(index, value) {
                txt += "<div class='dadosFormDiv form-control' id='" + value.id_operational + "'>";
                if (value.avatar == null) {
                    txt += "<img id='dadosDivAvatar' src='Images/default-profile.png'></img>";
                }
                else {
                    txt += "<img id='dadosDivAvatar' src='" + value.avatar + "'></img>";
                }
                txt += "<span id='dadosDivName'>" + value.name + "</span>";
                txt += "<i class='fas fa-chevron-down chevron-down' id='chevron-down'></i>";
                txt += "</div>";
            });
            dadosDiv.innerHTML += txt;
            let panels = document.querySelectorAll(".dadosFormDiv");
            for (let i = 0; i < panels.length; i++) {
                panels[i].addEventListener("click", openPanelHandler);
            }
        }).catch(err => console.error(err));
}

function OpenPanel(elem) {
    if (document.getElementById(elem.id).style.height != "200px") {
        document.getElementById(elem.id).style.height = "200px";
    }
    else {
        document.getElementById(elem.id).style.height = "45px";
        console.log(123);
    }
}

function openPanelHandler(event) {
    OpenPanel(this);
}



function occurrenceStage() {
    fetch('https://d213.herokuapp.com/occurrences/' + id_occurrence)
        .then(res => res.json())
        .then((out) => {
            $.each(out, function(index, value) {
                document.getElementById('title').innerHTML = 'Ocorrência #' + value.id_occurrence;
            })
        }).catch(err => console.error(err));

    if (Number(localStorage.getItem('stage')) === 0 || Number(localStorage.getItem('stage')) === 1) {
        document.getElementById('dadosId').className = 'hidden';
        document.getElementById('ajudaId').className = 'hidden';
        document.getElementById('notaId').className = 'hidden';
        document.getElementById('testemunhaId').className = 'hidden';
        document.getElementById('colonId').className = 'hidden';
        document.getElementById('minuteId').className = 'hidden';
        document.getElementById('hourId').className = 'hidden';
        document.getElementById('chegadaId').className = 'hidden';
        document.getElementById('barId').className = 'hidden';
        document.getElementById('finalizarId').className = 'hidden';
    }
    else {
        if (Number(localStorage.getItem('stage')) === 2) {
            document.getElementById('ajudaId').className = 'hidden';
            document.getElementById('notaId').className = 'hidden';
            document.getElementById('testemunhaId').className = 'hidden';
            document.getElementById('colonId').className = 'hidden';
            document.getElementById('minuteId').className = 'hidden';
            document.getElementById('hourId').className = 'hidden';
            document.getElementById('chegadaId').className = 'hidden';
            document.getElementById('barId').className = 'hidden';
        }
        else {
            if (Number(localStorage.getItem('stage')) === 3) {
                document.getElementById('ajudaId').className = 'hidden';
                document.getElementById('notaId').className = 'hidden';
                document.getElementById('testemunhaId').className = 'hidden';
                document.getElementById('finalizarId').className = 'hidden';
            }
            else {
                if (Number(localStorage.getItem('stage')) === 4) {
                    document.getElementById('finalizarId').innerHTML = 'FINALIZAR OPERAÇÃO';
                }
                else {
                    if (Number(localStorage.getItem('stage')) === 5) {
                        window.location.replace('UtilizacaoMateriais.html');
                    }
                    else {
                        if (Number(localStorage.getItem('stage')) === 6) {
                            window.location.replace('AvaliarOperacionais.html');
                        }
                    }
                }
            }
        }
    }
}

function departureOccurrenceFunction() {
    let data = {};
    let departure = new Date().toISOString().slice(0, 10) + " " + new Date().toISOString().slice(11, 19);
    data.departure = departure;
    fetch('https://d213.herokuapp.com/departures/' + id_occurrence, {
        headers: { 'Content-Type': 'application/json' },
        method: 'PUT',
        body: JSON.stringify(data)
    }).then(function(response) {
        if (!response.ok) {
            console.log(response.status); //=> number 100–599
            console.log(response.statusText); //=> String
            console.log(response.headers); //=> Headers
            console.log(response.url); //=> String
            console.log(data)
        }
        else {
            document.getElementById('colonId').className = '';
            document.getElementById('minuteId').className = 'minuteClass form-control';
            document.getElementById('hourId').className = 'hourClass form-control';
            document.getElementById('chegadaId').className = 'chegadaClass form-control';
            document.getElementById('barId').className = '';
            document.getElementById('finalizarId').className = 'hidden';
            localStorage.setItem('stage', Number(localStorage.getItem('stage')) + 1);
        }
    }).then(function(result) {
        console.log(result);
    }).catch(function(err) {
        alert("Submission error");
        console.error(err);
    });
}




function arrivalOccurrenceFunction() {
    if (localStorage.getItem('arrival') == undefined) {
        let data = {};
        let arrival = new Date().toISOString().slice(0, 10) + " " + new Date().toISOString().slice(11, 19);
        data.arrival = arrival;
        fetch('https://d213.herokuapp.com/arrivals/' + id_occurrence, {
            headers: { 'Content-Type': 'application/json' },
            method: 'PUT',
            body: JSON.stringify(data)
        }).then(function(response) {
            if (!response.ok) {
                console.log(response.status); //=> number 100–599
                console.log(response.statusText); //=> String
                console.log(response.headers); //=> Headers
                console.log(response.url); //=> String
                console.log(data)
            }
            else {
                document.getElementById("hourId").value = arrival.slice(11, 13);
                document.getElementById("minuteId").value = arrival.slice(14, 16);
                document.getElementById('ajudaId').className = 'ajudaClass form-control';
                document.getElementById('notaId').className = 'notaClass form-control';
                document.getElementById('testemunhaId').className = 'testemunhaClass form-control';
                document.getElementById('barId').className = '';
                document.getElementById('finalizarId').innerHTML = 'FINALIZAR OPERAÇÃO';
                document.getElementById('finalizarId').className = 'finalizarClass';
                localStorage.setItem('stage', Number(localStorage.getItem('stage')) + 1);
                localStorage.setItem('arrival',"checked");
            }
        }).then(function(result) {
            console.log(result);
        }).catch(function(err) {
            alert("Submission error");
            console.error(err);
        });
    }
}

function advanceOccurrence() {
    if (Number(localStorage.getItem('stage')) === 2) {
        departureOccurrenceFunction();
    }
    if (Number(localStorage.getItem('stage')) === 4) {
        localStorage.setItem('stage', Number(localStorage.getItem('stage')) + 1);
        window.location.replace('UtilizacaoMateriais.html')
    }
}

$(document).ready(function() {
    occurrenceStage();
    if (localStorage.getItem('stage') >= 2) {
        occurenceOperationals();
    }
})
