let rows = {};
let obj = [];

function fillTable() {
    fetch('https://bdc5dcf6bca04b39ab10a706cdb79f29.vfs.cloud9.us-east-1.amazonaws.com/occurrences/')
        .then(res => res.json())
        .then((out) => {
            $('#table tbody').empty();
            $.each(out, function(index, value) {
                obj.push({ "id_occurrence": value.id_occurrence });
                $('#table tbody').append('<tr class="fullRow"><th class ="id_occurrence" scope="row">' + value.id_occurrence + '</th><td>' + value.arrival + '</td> <td>  <input type="button" class="VerMais" value="Ver Mais"/> </td> </tr>')
            });
            console.log(obj);
            rows = JSON.stringify(obj);
        }).catch(err => console.error(err));
}

$(document).ready(function() {
    fillTable();
})
