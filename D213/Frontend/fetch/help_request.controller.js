const id_occurrence = "1";
document.getElementById("submit").onclick = saveHelpRequest;

function saveHelpRequest() {
    let data = {};
    let rows = {};
    let material_type="";
    let num_materials=0;
    rows = document.getElementsByClassName('fullRow');
     for (let c = 0; c < rows.length; c++) {
         if(rows[c].getElementsByClassName('custom-select').item(0).value === '1' || rows[c].getElementsByClassName('custom-select').item(0).value === '2' || rows[c].getElementsByClassName('custom-select').item(0).value === '3' || rows[c].getElementsByClassName('custom-select').item(0).value === '4' || rows[c].getElementsByClassName('custom-select').item(0).value === '5') {
             material_type += rows[c].getElementsByClassName('custom-select').item(0).value + " " +rows[c].getElementsByClassName('materialName').item(0).innerHTML + "; "
             num_materials += Number(rows[c].getElementsByClassName('custom-select').item(0).value);
         }
     }
     data.reason = localStorage.reason;
    data.num_operationals = document.getElementById("operationalSelect").value.toString();
    data.material_type=material_type;
    data.num_materials= num_materials.toString();
    console.log(data); //debugging para ver os dados que foram enviados
    //chamada fetch para envio dos dados para o servior via POST
    fetch('https://bdc5dcf6bca04b39ab10a706cdb79f29.vfs.cloud9.us-east-1.amazonaws.com/occurrences/' + id_occurrence + '/help_requests', {
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
            alert("submitted with success");
        }
    }).then(function(result) {
        console.log(result);
    }).catch(function(err) {
        alert("Submission error");
        console.error(err);
    });
}
