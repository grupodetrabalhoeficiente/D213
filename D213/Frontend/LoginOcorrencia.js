let back = document.getElementById("goBack");
back.onclick = goBack;

let enter = document.getElementById("butttonOcorrencia");
enter.onclick = enterOcorrence;

function goBack() {
    window.history.back();
}

function enterOcorrence() {
    window.location.href = "MenuOcorrencia.html";
}
