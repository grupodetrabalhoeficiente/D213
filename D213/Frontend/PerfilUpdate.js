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
//Upload screen
let profileImg = document.getElementById("shadowImg");
profileImg.onclick = openUploadScreenOpen;
let uploadAvatar = document.getElementById("uploadAvatarDiv");
let clickOut = document.getElementById("clickOutside");
clickOut.onclick = openUploadScreenClose;

function openUploadScreenOpen() {
    uploadAvatar.style.display = "block";
    frame.style.height = "736px";
}

function openUploadScreenClose() {
    uploadAvatar.style.display = "none";
    frame.style.height = "1650px";
}


function showNewPassword() {
    profileNewPassword.style.display = "inline";
    profileConfirmPassword.style.display = "inline";
    cPassword.style.display = "inline";
    pcPassword.style.display = "inline";
    pnPassword.style.display = "inline";
    viewPassword.style.display = "inline";
    /*frame.style.height = "1900px";*/
}

function open() {
    window.location.href = "PerfilOcorrencias.html";
}


//Rotation Animation
const watchMore = document.getElementById("watchMore");
const arrow = document.getElementById("arrow");
watchMore.onclick = rotate;
let rotated = 0;

function rotate() {
    if (rotated == 0) {
        arrow.style.transform = "rotate(180deg)";
        rotated = 1
        watchMore.href = "#watchMore";
    }
    else {
        arrow.style.transform = "rotate(0deg)";
        rotated = 0
        watchMore.href = "#profileImageDiv";
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
