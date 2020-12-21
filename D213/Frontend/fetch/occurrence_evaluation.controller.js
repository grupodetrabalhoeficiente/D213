const id_occurrence = "2222";

function fillTable() {
    fetch('https://bdc5dcf6bca04b39ab10a706cdb79f29.vfs.cloud9.us-east-1.amazonaws.com/occurrences/' + id_occurrence + '/evaluations')
        .then(res => res.json())
        .then((out) => {
            let count = 1;
            $('#table tbody').empty();
            $.each(out, function(index, value) {
                $('#table tbody').append('<tr><th scope="row">' + count + '</th><td>' + value.name + '<select class="custom-select" id="inputGroupSelect01"> <option selected>Avaliação</option>  <option value="1">1</option> <option value="2">2</option> <option value="3">3</option> <option value="4">4</option>  <option value="5">5</option></select>')
                count++;
            });
        }).catch(err => console.error(err));
}

$(document).ready(function() {
    fillTable();
})
