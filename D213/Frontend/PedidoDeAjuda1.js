const submit = document.getElementById("submit");
submit.onclick = getReason;


function getReason() {
    let reason = "";
    if (document.getElementById("areaIncendio").checked === true) {
        reason += document.getElementById("areaIncendio").value + " "
    }
    if (document.getElementById("faltaAgua").checked === true) {
        reason += document.getElementById("faltaAgua").value + " "
    }
    if (document.getElementById("faltaMaterial").checked === true) {
        reason += document.getElementById("faltaMaterial").value + " "
    }
    if (document.getElementById("faltaOperacionais").checked === true) {
        reason += document.getElementById("faltaOperacionais").value + " "
    }
    if (document.getElementById("feridosGraves").checked === true) {
        reason += document.getElementById("feridosGraves").value + " "
    }
    if (reason.length === 0) {

    }
    else {
        localStorage.setItem("reason", reason);
        window.location.replace("PedidoDeAjuda2.html");
    }
}
