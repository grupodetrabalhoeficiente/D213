const id_occurrence = localStorage.getItem('id_occurrence_in_progress');
document.getElementById("submit2").onclick = saveHelpRequest;
let confirm = document.getElementById("confirmarTxtId");
confirm.onclick = closeForm;

function saveHelpRequest() {
    let data = {};
    let rows = {};
    let materials_type="";
    let num_materials=0;
    rows = document.getElementsByClassName('fullRow');
     for (let c = 0; c < rows.length; c++) {
         if(rows[c].getElementsByClassName('custom-select').item(0).value === '1' || rows[c].getElementsByClassName('custom-select').item(0).value === '2' || rows[c].getElementsByClassName('custom-select').item(0).value === '3' || rows[c].getElementsByClassName('custom-select').item(0).value === '4' || rows[c].getElementsByClassName('custom-select').item(0).value === '5') {
             materials_type += rows[c].getElementsByClassName('custom-select').item(0).value + " " +rows[c].getElementsByClassName('materialName').item(0).innerHTML + " "
             num_materials += Number(rows[c].getElementsByClassName('custom-select').item(0).value);
         }
     }
    data.reason = localStorage.reason;
    data.num_operationals = document.getElementById("operationalSelect").value;
    data.num_materials= String(num_materials);
    data.materials_type=materials_type;
    console.log(data); //debugging para ver os dados que foram enviados
    //chamada fetch para envio dos dados para o servior via POST
    if(data.materials_type.length ===0 &&  data.num_operationals==='0'){
         openForm();
    }else {
    fetch('https://bdc5dcf6bca04b39ab10a706cdb79f29.vfs.cloud9.us-east-1.amazonaws.com/occurrences/' + id_occurrence + '/helprequests', {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify(data)
    }).then(function(response) {
        if (!response.ok) {
            console.log(response.status); //=> number 100–599
            console.log(response.statusText); //=> String
            console.log(response.headers); //=> Headers
            console.log(response.url); //=> String
             openForm();
        }
    }).then(function(result) {
        console.log(result);
    }).catch(function(err) {
        console.error(err);
        
    });
    localStorage.setItem('help',"checked");
    localStorage.removeItem('reason');
    window.location.replace('MenuOcorrencia.html');
}
}


//Error Open Close Functions
function openForm() {
    document.getElementById("textTxt1").className = "textTxtClass text-center";
    document.getElementById("textTxt").className = "hidden";
    document.getElementById("errorFrame").className = "errorFrame2";
}

function closeForm() {
    document.getElementById("errorFrame").className = "hidden";
}