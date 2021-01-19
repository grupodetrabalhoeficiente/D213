const id_operational = "1";
let back = document.getElementById("goBack");
back.onclick = goBack;

function goBack() {
    window.history.back();
}
function fillTable() {
    fetch('https://d213.herokuapp.com/operationals/' + id_operational + '/occurrences')
        .then(res => res.json())
        .then((out) => {
            let count = 1;
            $('#table tbody').empty();
            $.each(out, function(index, value) {
                if (value.points != undefined) {
                    $('#table tbody').append('<tr><th scope="row">' + count + '</th><td>' + value.id_occurrence + '</td><td>' + value.arrival + '</td><td>' + value.points + '</td></tr>')
                    count++;
                }
                else {
                    $('#table tbody').append('<tr><th scope="row">' + count + '</th><td>' + value.id_occurrence + '</td><td>' + value.arrival + '</td><td>' + "0" + '</td></tr>')
                    count++;
                }
            });
        }).catch(err => console.error(err));
}

$(document).ready(function() {
    fillTable();
})
