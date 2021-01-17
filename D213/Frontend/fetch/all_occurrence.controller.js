function fillTable() {
    fetch('https://bdc5dcf6bca04b39ab10a706cdb79f29.vfs.cloud9.us-east-1.amazonaws.com/occurrences/')
        .then(res => res.json())
        .then((out) => {
            $('#table tbody').empty();
            $.each(out, function(index, value) {
                // obj.push({ "id_occurrence": value.id_occurrence });
                $('#table tbody').append('<tr class="fullRow"><th class ="id_occurrence"scope="row">' + value.id_occurrence + '</th><td>' + value.material_type + '</td> <td>  <label class="custom-checkbox" tab-index="0" aria-label="Checkbox Label"> <input class="confirmation"type="checkbox" checked> <span class="checkmark"></span> </label> </td> </tr>')
            });
            // console.log(obj);
            // rows = JSON.stringify(obj);
        }).catch(err => console.error(err));
}

$(document).ready(function() {
    fillTable();
})
