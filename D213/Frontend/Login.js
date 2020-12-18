let login = document.getElementById("submitInput");
login.onclick = myLogin;

//"view" Button
let view = document.getElementById("viewTxt");
view.onclick = viewButton;

//Confirm Button
let confirm = document.getElementById("confirmarTxtId");
confirm.onclick = closeForm;


function myLogin() {
    if (document.getElementById("mailInput").value.length === 0 || document.getElementById("passInput").value.length === 0) {
        openForm();
    }
    else {
        /* let count;
         for (count = 0; count < basedadosAtributoMail.length; count++) {
             if (document.getElementById("mail").value === mailBaseDados) {
                 for (count = 0; count < basedadosAtributoPassword.length; count++) {
                     if (document.getElementById("password").value === mailPasswordCorrespondente) {
                         window.location.href = "MenuPrincipal.html";
                     }
                 }
             }
         }*/
        window.location.href = "MenuPrincipal.html";
    }
}


//Fuction of the "view" button
function viewButton() {
    let view = document.getElementById("passInput");
    if (view.type === "password") {
        view.type = "text";
    }
    else {
        view.type = "password";
    }
}


//Error Open Close Functions
function openForm() {
    if (document.getElementById("mailInput").value.length === 0 || document.getElementById("passInput").value.length === 0) {
        document.getElementById("textTxt1").className = "textTxtClass text-center";
        document.getElementById("textTxt").className = "hidden";
        document.getElementById("errorFrame").className = "errorFrame";
    }
    else {
        if (document.getElementById("mail").value.length === 0) { // condiça para testar no futuro nao +e final
            document.getElementById("textTxt1").className = "hidden";
            document.getElementById("textTxt").className = "textTxtClass text-center";
            document.getElementById("errorFrame").className = "errorFrame";
        }
    }
}

function closeForm() {
    document.getElementById("errorFrame").className = "hidden";
}
