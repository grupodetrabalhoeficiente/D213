const id_occurrence = localStorage.getItem('id_occurrence_in_progress');
let arrivalOccurrence = document.getElementById("chegadaId");
arrivalOccurrence.onclick = arrivalOccurrenceFunction;
let occurrenceButton = document.getElementById('finalizarId');
occurrenceButton.onclick = advanceOccurrence;
let back = document.getElementById("goBack");
back.onclick = goBack;

function goBack() {
    window.history.back();
}
function occurrenceStage() {
    fetch('https://d213.herokuapp.com/occurrences/' + id_occurrence)
        .then(res => res.json())
        .then((out) => {
            $.each(out, function(index, value) {
                document.getElementById('titleOccurrence').innerHTML = 'Ocorrência #' + value.id_occurrence;
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
            alert("submitted with success");
        }
    }).then(function(result) {
        console.log(result);
    }).catch(function(err) {
        alert("Submission error");
        console.error(err);
    });
}

function finishOccurrenceFunction() {
    fetch('https://d213.herokuapp.com/status/' + id_occurrence, {
        headers: { 'Content-Type': 'application/json' },
        method: 'PUT',
    }).then(function(response) {
        if (!response.ok) {
            console.log(response.status); //=> number 100–599
            console.log(response.statusText); //=> String
            console.log(response.headers); //=> Headers
            console.log(response.url); //=> String
        }
        else {
            localStorage.setItem('stage', Number(localStorage.getItem('stage')) + 1);
            alert("submitted with success");
            window.location.replace('UtilizacaoMateriais.html')
        }
    }).then(function(result) {
        console.log(result);
    }).catch(function(err) {
        alert("Submission error");
        console.error(err);
    });
}

function advanceOccurrence() {
    if (Number(localStorage.getItem('stage')) === 2) {
        departureOccurrenceFunction();
    }
    if (Number(localStorage.getItem('stage')) === 4) {
        finishOccurrenceFunction();
    }
}

function arrivalOccurrenceFunction() {
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
            alert("submitted with success");
        }
    }).then(function(result) {
        console.log(result);
    }).catch(function(err) {
        alert("Submission error");
        console.error(err);
    });
}

$(document).ready(function() {
    occurrenceStage();
})
