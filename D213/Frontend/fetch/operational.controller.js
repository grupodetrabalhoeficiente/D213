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
                document.getElementById('profilePhoneNumber').innerHTML = value.phone_number;
                document.getElementById('profileBirthDate').innerHTML = value.birth_date.slice(0, 10);
                /*document.getElementById('profilePassword').innerHTML = value.password;*/
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
                document.getElementById("passwordId").remove();
                document.getElementById("changePasswordId").remove();
                document.getElementById("newPasswordId").remove();
                document.getElementById("confirmPasswordId").remove();
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
    /*fetch(`https://bdc5dcf6bca04b39ab10a706cdb79f29.vfs.cloud9.us-east-1.amazonaws.com/operationals/${urlParams.get('id_operational')}`, {*/
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
        }
        else {
            document.getElementById("profileNewPassword").value = ""; //limpeza dos dados do form
            document.getElementById("profileConfirmPassword").value = "";
            ownProfile();
            alert("submitted with success");
        }
    }).then(function(result) {
        console.log(result);
    }).catch(function(err) {
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
        }
    }).then(function(result) {
        console.log(result);
    }).catch(function(err) {
        alert("Submission error");
        console.error(err);
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
$(document).ready(function() {
    verification();
})
