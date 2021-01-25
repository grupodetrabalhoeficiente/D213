const submit = document.getElementById("submit1");
submit.onclick = getReason;
let confirm = document.getElementById("confirmarTxtId");
confirm.onclick = closeForm;

function getReason() {
    let reason = "";
    if (document.getElementById("areaIncendio").checked === true) {
        reason += document.getElementById("areaIncendio").value + "; "
    }
    if (document.getElementById("faltaAgua").checked === true) {
        reason += document.getElementById("faltaAgua").value + "; "
    }
    if (document.getElementById("faltaMaterial").checked === true) {
        reason += document.getElementById("faltaMaterial").value + "; "
    }
    if (document.getElementById("faltaOperacionais").checked === true) {
        reason += document.getElementById("faltaOperacionais").value + "; "
    }
    if (document.getElementById("feridosGraves").checked === true) {
        reason += document.getElementById("feridosGraves").value + "; "
    }
    if (reason.length === 0) {
 openForm();
    }
    else {
        localStorage.setItem("reason", reason);
        window.location.replace("PedidoDeAjuda2.html");
    }
}
//Error Open Close Functions
function openForm() {
    document.getElementById("textTxt1").className = "textTxtClass text-center";
    document.getElementById("textTxt").className = "hidden";
    document.getElementById("errorFrame").className = "errorFrame";
}

function closeForm() {
    document.getElementById("errorFrame").className = "hidden";
}