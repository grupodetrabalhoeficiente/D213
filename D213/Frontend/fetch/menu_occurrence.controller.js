const id_occurrence = "2";

let arrivalOccurrence = document.getElementById("chegadaId");
arrivalOccurrence.onclick = arrivalOccurrenceFunction;

function arrivalOccurrenceFunction() {
    let data = {};

    let arrival = new Date().toISOString().slice(0, 10) + " " + new Date().toISOString().slice(11, 19);

    data.arrival = arrival;

    document.getElementById("hourId").value = arrival.slice(11, 13);
    document.getElementById("minuteId").value = arrival.slice(14, 16);

    fetch('https://bdc5dcf6bca04b39ab10a706cdb79f29.vfs.cloud9.us-east-1.amazonaws.com/occurrences/' + id_occurrence + '/evaluations/' + obj[id_operational].id_operational.toString(), {
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
            //data[c].getElementsByClassName("custom-select").item(0).disabled = true;
            alert("submitted with success");
        }
    }).then(function(result) {
        console.log(result);
    }).catch(function(err) {
        alert("Submission error");
        console.error(err);
    });
}
