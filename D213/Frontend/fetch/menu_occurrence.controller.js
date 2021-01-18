const id_occurrence = "2";
let stage = Number(localStorage.getItem('stage'));
let arrivalOccurrence = document.getElementById("chegadaId");
arrivalOccurrence.onclick = arrivalOccurrenceFunction;
let occurrenceButton = document.getElementById('finalizarId');
occurrenceButton.onclick=

function occurrenceStage() {
    console.log(stage);
    if (stage === 0 || stage ===1) {
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
        if (stage === 2) {
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
            if (stage === 3) {
                document.getElementById('ajudaId').className = 'hidden';
                document.getElementById('notaId').className = 'hidden';
                document.getElementById('testemunhaId').className = 'hidden';
                document.getElementById('barId').className = 'hidden';
                document.getElementById('finalizarId').className = 'hidden';
            }
            else {
                if (stage === 4) {
                    document.getElementById('finalizarId').innerHTML = 'FINALIZAR OPERAÇÃO';
                }
            }
        }
    }
}

function departureOccurrenceFunction(){
  let data = {};
    let departure = new Date().toISOString().slice(0, 10) + " " + new Date().toISOString().slice(11, 19);
    data.departure = departure;

    fetch('https://bdc5dcf6bca04b39ab10a706cdb79f29.vfs.cloud9.us-east-1.amazonaws.com/departures/' + id_occurrence, {
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
               /*document.getElementById("hourId").value = arrival.slice(11, 13);
                document.getElementById("minuteId").value = arrival.slice(14, 16);
                document.getElementById('ajudaId').className = 'ajudaClass form-control';
                document.getElementById('notaId').className = 'notaClass form-control';
                document.getElementById('testemunhaId').className = 'testemunhaClass form-control';
                document.getElementById('barId').className = '';
                document.getElementById('finalizarId').innerHTML = 'FINALIZAR OPERAÇÃO';
                document.getElementById('finalizarId').className = 'finalizarClass';*/
                stage++;
            alert("submitted with success");
        }
    }).then(function(result) {
        console.log(result);
    }).catch(function(err) {
        alert("Submission error");
        console.error(err);
    });
}
  function finishOccurrenceFunction(){
    fetch('https://bdc5dcf6bca04b39ab10a706cdb79f29.vfs.cloud9.us-east-1.amazonaws.com/status/' + id_occurrence, {
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
               /*document.getElementById("hourId").value = arrival.slice(11, 13);
                document.getElementById("minuteId").value = arrival.slice(14, 16);
                document.getElementById('ajudaId').className = 'ajudaClass form-control';
                document.getElementById('notaId').className = 'notaClass form-control';
                document.getElementById('testemunhaId').className = 'testemunhaClass form-control';
                document.getElementById('barId').className = '';
                document.getElementById('finalizarId').innerHTML = 'FINALIZAR OPERAÇÃO';
                document.getElementById('finalizarId').className = 'finalizarClass';*/
                stage++;
            alert("submitted with success");
        }
    }).then(function(result) {
        console.log(result);
    }).catch(function(err) {
        alert("Submission error");
        console.error(err);
    });
}
function advanceOccurrence(){
    
}

function arrivalOccurrenceFunction() {
    let data = {};
    let arrival = new Date().toISOString().slice(0, 10) + " " + new Date().toISOString().slice(11, 19);
    data.arrival = arrival;

    fetch('https://bdc5dcf6bca04b39ab10a706cdb79f29.vfs.cloud9.us-east-1.amazonaws.com/arrivals/' + id_occurrence, {
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
                stage++;
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
