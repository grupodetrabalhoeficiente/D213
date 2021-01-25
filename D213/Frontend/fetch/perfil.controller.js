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
let viewPassword = document.getElementById("viewTxtProfileUpdate");
viewPassword.onclick = showPassword;
//Upload screen
let profileImg = document.getElementById("shadowImg");
profileImg.onclick = openUploadScreenOpen;
let uploadAvatar = document.getElementById("uploadAvatarDiv");
let clickOut = document.getElementById("clickOutside");
clickOut.onclick = openUploadScreenClose;
//Confirm Button
let confirmError = document.getElementById("confirmarTxtId");
confirmError.onclick = closeForm;

let goBack = document.getElementById("goBack");
goBack.addEventListener("click",goBackFunction)
const confirm = document.getElementById("confirmPassword");
confirm.onclick = savePassword;
let logout = document.getElementById('logout');
logout.onclick = logoutFunction;
let panels = document.querySelectorAll(".menu");
for (let i = 0; i < panels.length; i++) {
    panels[i].addEventListener("click", removeLocalStorage);
}

function removeLocalStorage() {
    localStorage.removeItem('operationalSelected');
    localStorage.removeItem('rankoperationalSelected')
};

function verification() {
    localStorage.operationalSelected;
    if (localStorage.operationalSelected == null) {
        ownProfile();

    }
    else {
        if (localStorage.id_operational_logged == localStorage.operationalSelected) {
            ownProfile();

        }
        else {
            otherProfile();

        }
    }
}

function ownProfile() {
    fetch('https://bdc5dcf6bca04b39ab10a706cdb79f29.vfs.cloud9.us-east-1.amazonaws.com/operationals/' + localStorage.id_operational_logged)
        .then(res => res.json())
        .then((out) => {
            $.each(out, function(index, value) {
                if (value.avatar == null) {
                    document.getElementById('profileImage').src = "Images/default-profile.png";
                }
                else {
                    document.getElementById('profileImage').src = value.avatar;
                }
                document.getElementById('name').innerHTML = value.name;
                document.getElementById('profileSpeciality').innerHTML = value.speciality;
                document.getElementById('profileTypeOfOperational').innerHTML = value.operational_type;
                document.getElementById('profileEmail').innerHTML = value.email;
                document.getElementById('profilePhoneNumber').href = "tel:"+value.phone_number;
                document.getElementById('profilePhoneNumber').innerHTML = value.phone_number;
                document.getElementById('profileBirthDate').innerHTML = value.birth_date.slice(0, 10);
                document.getElementById('position').innerHTML = localStorage.rankP + "º Lugar";
            })
        }).catch(err => console.error(err));
}

//Other operationals profile
function otherProfile() {
    fetch('https://bdc5dcf6bca04b39ab10a706cdb79f29.vfs.cloud9.us-east-1.amazonaws.com/operationals/' + localStorage.operationalSelected)
        .then(res => res.json())
        .then((out) => {
            $('#rankPosition div').empty();
            $.each(out, function(index, value) {
                if (value.avatar == null) {
                    document.getElementById('profileImage').src = "Images/default-profile.png";
                }
                else {
                    document.getElementById('profileImage').src = value.avatar;
                }
                document.getElementById('name').innerHTML = value.name;
                document.getElementById('profileSpeciality').innerHTML = value.speciality;
                document.getElementById('profileTypeOfOperational').innerHTML = value.operational_type;
                document.getElementById('profileEmail').innerHTML = value.email;
                document.getElementById('profilePhoneNumber').innerHTML = value.phone_number;
                document.getElementById('profileBirthDate').innerHTML = value.birth_date.slice(0, 10);
                document.getElementById("changePasswordId").remove();
                document.getElementById("newPasswordId").remove();
                document.getElementById("confirmPasswordId").remove();
                document.getElementById("logout").remove();
                document.getElementById('position').innerHTML = localStorage.rankoperationalSelected+"º Lugar";
            })
        }).catch(err => console.error(err));
}


/*   Save new password   */
function savePassword() {
    let data = {};
    data.newPassword = document.getElementById("profileNewPassword").value;
    data.confirmPassword = document.getElementById("profileConfirmPassword").value;
    console.log(data); //debugging para ver os dados que foram enviados
    //chamada fetch para envio dos dados para o servior via POST
    fetch("https://bdc5dcf6bca04b39ab10a706cdb79f29.vfs.cloud9.us-east-1.amazonaws.com/operationals/" + localStorage.id_operational_logged, {
        headers: { 'Content-Type': 'application/json' },
        method: 'PUT',
        body: JSON.stringify(data)
    }).then(function(response) {
        if (!response.ok) {
            console.log(response.status); //=> number 100–599
            console.log(response.statusText); //=> String
            console.log(response.headers); //=> Headers
            console.log(response.url); //=> String
            openForm();
        }
        else {
            document.getElementById("profileNewPassword").value = ""; 
            document.getElementById("profileConfirmPassword").value = "";
            ownProfile();
            alert("submitted with success");
        }
    }).then(function(result) {
        console.log(result);
    }).catch(function(err) {
        openForm();
        alert("Submission error");
        console.error(err);
    });
}

function saveAvatar() {
    let data = {};
    data.avatar = localStorage.localUploadedFileName;
    //console.log(data); //debugging para ver os dados que foram enviados
    //chamada fetch para envio dos dados para o servior via POST
    fetch("https://bdc5dcf6bca04b39ab10a706cdb79f29.vfs.cloud9.us-east-1.amazonaws.com/operationals/" + localStorage.id_operational_logged + "/upload", {
        headers: { 'Content-Type': 'application/json' },
        method: 'PUT',
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
        alert("Submission error");
        console.error(err);
        openForm();
    });
}

function logoutFunction() {
    window.location.replace("Login.html");
    localStorage.removeItem('id_operational_logged');
    localStorage.removeItem('rankP');
    localStorage.removeItem('id_occurrence');
    localStorage.removeItem('operationalSelected');
    localStorage.removeItem('id_operational_logged');
    localStorage.removeItem('rankoperationalSelected');
    fetch('https://bdc5dcf6bca04b39ab10a706cdb79f29.vfs.cloud9.us-east-1.amazonaws.com/logout')
        .then(res => res.json())
        .then((out) => {}).catch(err => console.error(err));
}


function goBackFunction(){
    if(localStorage.getItem('operationalSelected')==undefined){
        window.location.replace('MenuPrincipal.html')
    } else {
         window.location.replace('RanksUpdate.html')
    }
}
function openUploadScreenOpen() {
     if(localStorage.getItem('operationalSelected')==undefined){
    uploadAvatar.style.display = "block";
    frame.style.height = "736px";
     }
}

function openUploadScreenClose() {
    uploadAvatar.style.display = "none";
    frame.style.height = "925px";
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
    document.getElementById("ocurrenceBut").style.top = "31.25%";
    document.getElementById("trophyIconProfile").style.top = "33.7%";
    document.getElementById("rankPosition").style.top = "35.35%";
}

function open() {
    window.location.href = "PerfilOcorrencias.html";
}

//Animation TopBar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 63 || document.documentElement.scrollTop > 63) {
    document.getElementById("navbar2").style.maxWidth = "100%";
    document.getElementById("navbar2").style.maxHeight = "8.15%";
    document.getElementById("navbar2").style.background = "#FFFFFF";
    document.getElementById("navbar2").style.width = "100%";
    document.getElementById("navbar2").style.height = "8.15%";
    document.getElementById("navbar2").style.boxShadow = "0px 2px 4px rgba(0, 0, 0, 0.25)";
    
    
    
  } else {
    document.getElementById("navbar2").style.boxShadow = null;
    document.getElementById("navbar2").style.background = null;
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
    verification();
    $('.imagen[src=""]').hide();
    $('.imagen:not([src=""])').show();
})

//Error Open Close Functions
function openForm() {
    document.getElementById("textTxt1").className = "textTxtClass text-center";
    document.getElementById("textTxt").className = "hidden";
    document.getElementById("errorFrame").className = "errorFrame";
}

function closeForm() {
    document.getElementById("errorFrame").className = "hidden";
}