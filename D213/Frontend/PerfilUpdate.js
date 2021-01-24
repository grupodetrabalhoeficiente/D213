//Confirm Button
let ocorrencias = document.getElementById("ocurrenceBut");
ocorrencias.onclick = open;
//Show new password div
let changeButton = document.getElementById("labelChangePassword");
changeButton.onclick = showNewPassword;
let profileNewPassword = document.getElementById("labelProfileNewPassword");
let profileConfirmPassword = document.getElementById("labelProfileConfirmPassword");
let cPassword = document.getElementById("confirmPassword");
let pcPassword = document.getElementById("profileConfirmPassword");
let pnPassword = document.getElementById("profileNewPassword");
let frame = document.getElementById("frameId");
let viewPassword = document.getElementById("viewTxt");
viewPassword.onclick = showPassword;
//Upload screen
let profileImg = document.getElementById("shadowImg");
profileImg.onclick = openUploadScreenOpen;
let uploadAvatar = document.getElementById("uploadAvatarDiv");
let clickOut = document.getElementById("clickOutside");
clickOut.onclick = openUploadScreenClose;

let goBack = document.getElementById("goBack");
goBack.addEventListener("click",goBackFunction)


function goBackFunction(){
    if(localStorage.getItem('operationalSelected')==undefined){
        window.location.replace('MenuPrincipal.html')
    } else {
         window.location.replace('RanksUpdate.html')
    }
}
function openUploadScreenOpen() {
    uploadAvatar.style.display = "block";
    frame.style.height = "736px";
}

function openUploadScreenClose() {
    uploadAvatar.style.display = "none";
    frame.style.height = "1650px";
}

function showPassword(){
    if(pnPassword.type == "password")
        pnPassword.type ="text";
    else
        pnPassword.type ="password";
}

function showNewPassword() {
    profileNewPassword.style.display = "inline";
    profileConfirmPassword.style.display = "inline";
    cPassword.style.display = "inline";
    pcPassword.style.display = "inline";
    pnPassword.style.display = "inline";
    viewPassword.style.display = "inline";
    frame.style.height = "1125px";
    
}

function open() {
    window.location.href = "PerfilOcorrencias.html";
}

//Animation TopBar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 63 || document.documentElement.scrollTop > 63) {
    document.getElementById("navbar").style.maxWidth = "414px";
    document.getElementById("navbar").style.maxHeight = "60px";
    document.getElementById("navbar").style.background = "#FFFFFF";
    document.getElementById("navbar").style.width = "100%";
    document.getElementById("navbar").style.height = "100%";
    document.getElementById("navbar").style.boxShadow = "0px 2px 4px rgba(0, 0, 0, 0.25)";
    
    
    
  } else {
    document.getElementById("navbar").style.boxShadow = null;
    document.getElementById("navbar").style.background = null;
  }
}


function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            $('#avatarPrev').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]); // convert to base64 string
    }
}

$("#avatarPreview").change(function() {
    readURL(this);
});

$(document).ready(function() {
    $('.imagen[src=""]').hide();
    $('.imagen:not([src=""])').show();
});
