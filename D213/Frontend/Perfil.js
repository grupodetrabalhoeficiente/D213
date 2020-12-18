let confirmar = document.getElementById("confirmPassword");
confirmar.onclick = confirmPassword;
//"view" Button
let view = document.getElementById("viewTxt");
view.onclick = viewButton;



let confirm = document.getElementById("confirmarTxtId");
confirm.onclick = closeForm;

let back = document.getElementById("goBack");
back.onclick = goBack;

let changeButton = document.getElementById("labelChangePassword");
changeButton.onclick = showNewPassword;
let profileNewPassword = document.getElementById("labelperfilNewPassword");
let profileConfirmPassword = document.getElementById("labelperfilConfirmPassword");
let cPassword = document.getElementById("confirmPassword");
let pcPassword = document.getElementById("perfilConfirmPassword");
let pnPassword = document.getElementById("perfilNewPassword");
let frame = document.getElementById("frameId");
let viewPassword = document.getElementById("viewTxt");

function showNewPassword() {
    profileNewPassword.style.display = "inline";
    profileConfirmPassword.style.display = "inline";
    cPassword.style.display = "inline";
    pcPassword.style.display = "inline";
    pnPassword.style.display = "inline";
    viewPassword.style.display = "inline";
    frame.style.height = "1000px";
}



function goBack() {
    window.history.back();
}

function confirmPassword() {
    openForm();

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
    // window.location.href = "MenuPrincipal.html";
}

//Fuction of the "view" button
function viewButton() {
    let view = document.getElementById("perfilNewPassword");
    if (view.type === "password") {
        view.type = "text";
    }
    else {
        view.type = "password";
    }
}

function openForm() {
    if (document.getElementById("perfilNewPassword").value.length === 0 || document.getElementById("perfilConfirmPassword").value.length === 0) {
        document.getElementById("textTxt1").className = "textTxtClass text-center";
        document.getElementById("textTxt").className = "hidden";
        document.getElementById("errorFrame").className = "errorFrame";
    }
    else {
        if (!(document.getElementById("perfilNewPassword").value == document.getElementById("perfilConfirmPassword").value)) { // condiça para testar no futuro nao +e final
            document.getElementById("textTxt1").className = "hidden";
            document.getElementById("textTxt").className = "textTxtClass text-center";
            document.getElementById("errorFrame").className = "errorFrame";
        }
    }
}

function closeForm() {
    document.getElementById("errorFrame").className = "hidden";
}
