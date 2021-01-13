const urlParams = new URLSearchParams(window.location.search);
const idUser = "1"; //Temporario depois alterar pra LocalHost
const confirm = document.getElementById("confirmPassword");
confirm.onclick = savePassword;
const submit = document.getElementById("uploadButton");
submit.onclick = saveAvatar;

function profileName() {
    async function fetchAsync() {
        console.log('Entrou na função profileName')
        /*fetch(`https://bdc5dcf6bca04b39ab10a706cdb79f29.vfs.cloud9.us-east-1.amazonaws.com/operationals/${urlParams.get('id_operational')}`)*/
        fetch('https://bdc5dcf6bca04b39ab10a706cdb79f29.vfs.cloud9.us-east-1.amazonaws.com/operationals/' + idUser)
            .then(res => res.json())
            .then((out) => {
                $('#rankPosition div').empty();
                $.each(out, function(index, value) {
                    document.getElementById('profileImage').src = value.avatar;
                    document.getElementById('name').innerHTML = value.name;
                    document.getElementById('profileSpeciality').value = value.speciality;
                    document.getElementById('profileTypeOfOperational').value = value.operational_type;
                    document.getElementById('profileEmail').value = value.email;
                    document.getElementById('profilePhoneNumber').value = value.phone_number;
                    document.getElementById('profileBirthDate').value = value.birth_date;
                    document.getElementById('profilePassword').value = value.password;
                    document.getElementById('position').innerHTML = value.points;
                })
            }).catch(err => console.error(err));
    }
    //chama a função fetchAsync()
    fetchAsync().then(data => console.log("ok")).catch(reason => console.log(reason.message));
}

/*   Save new password   */
function savePassword() {
    let data = {};
    data.newPassword = document.getElementById("profileNewPassword").value;
    data.confirmPassword = document.getElementById("profileConfirmPassword").value;
    console.log(data); //debugging para ver os dados que foram enviados
    //chamada fetch para envio dos dados para o servior via POST
    /*fetch(`https://bdc5dcf6bca04b39ab10a706cdb79f29.vfs.cloud9.us-east-1.amazonaws.com/operationals/${urlParams.get('id_operational')}`, {*/
    fetch("https://bdc5dcf6bca04b39ab10a706cdb79f29.vfs.cloud9.us-east-1.amazonaws.com/operationals/" + idUser, {
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
            profileName();
            alert("submitted with success");
        }
    }).then(function(result) {
        console.log(result);
    }).catch(function(err) {
        alert("Submission error");
        console.error(err);
    });
}
/*
function saveNotes() {
    var data = {};
    data.description = document.getElementById("NotaTexto").value;
    console.log(data); //debugging para ver os dados que foram enviados
    //chamada fetch para envio dos dados para o servior via POST
    fetch('https://bdc5dcf6bca04b39ab10a706cdb79f29.vfs.cloud9.us-east-1.amazonaws.com/occurrences/' + id_occurrence + '/notes', {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify(data)
    }).then(function(response) {
        if (!response.ok) {
            console.log(response.status); //=> number 100–599
            console.log(response.statusText); //=> String
            console.log(response.headers); //=> Headers
            console.log(response.url); //=> String
            if (response.status === 409) {
                alert("Duplicated Email");
            }
            else {
                throw Error(response.statusText);
            }
        }
        else {
            document.getElementById("form-notas").reset(); //limpeza dos dados do form
            alert("submitted with success");
        }
    }).then(function(result) {
        console.log(result);
    }).catch(function(err) {
        alert("Submission error");
        console.error(err);
    });
}
*/

function saveAvatar() {
    let data = {};
    data.localUploaded = window.localStorage.localUploadedFileName;
    console.log(window.localStorage.localUploadedFileName);
    console.log(data); //debugging para ver os dados que foram enviados
    //chamada fetch para envio dos dados para o servior via POST
    fetch("https://bdc5dcf6bca04b39ab10a706cdb79f29.vfs.cloud9.us-east-1.amazonaws.com/operationals/" + idUser + "/upload", {
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
            alert("submitted with success");
        }
    }).then(function(result) {
        console.log(result);
    }).catch(function(err) {
        alert("Submission error");
        console.error(err);
    });
}


/*                  */

$(document).ready(function() {
    profileName();
})


























/*function listUsers() {
    fetch('https://bdc5dcf6bca04b39ab10a706cdb79f29.vfs.cloud9.us-east-1.amazonaws.com/operational/:operational_id')
        .then(res => res.json())
        .then((out) => {
            $('#perfilForm form').empty();
            $.each(out, function(index, value) {
                $('#perfilForm form').append('<tr><td>' + value.username + '</td><td>' + value.name + '</td><td>' + value.email + '</td></tr>')
            });
        }).catch(err => console.error(err));
}

$(document).ready(function() {
    listUsers();
})*/

/*function profileName() {
    fetch('https://console.aws.amazon.com/cloud9/ide/bdc5dcf6bca04b39ab10a706cdb79f29/operationals/:id_operational')
        .then(function(response) {
            return response.json();
            console.log('Puta que pariu')
        });
}*/
/*
window.onload = ola;

function ola() {
    /*alert('asdasd');
    fetch('https://console.aws.amazon.com/cloud9/ide/bdc5dcf6bca04b39ab10a706cdb79f29/operationals/:id_operational')
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            console.log(json);
        });
};
*/
























/*function listUsers() {
    fetch('https://bdc5dcf6bca04b39ab10a706cdb79f29.vfs.cloud9.us-east-1.amazonaws.com/operational/:operational_id')
        .then(res => res.json())
        .then((out) => {
            $('#perfilForm form').empty();
            $.each(out, function(index, value) {
                $('#perfilForm form').append('<tr><td>' + value.username + '</td><td>' + value.name + '</td><td>' + value.email + '</td></tr>')
            });
        }).catch(err => console.error(err));
}

$(document).ready(function() {
    listUsers();
})*/

/*function profileName() {
    fetch('https://console.aws.amazon.com/cloud9/ide/bdc5dcf6bca04b39ab10a706cdb79f29/operationals/:id_operational')
        .then(function(response) {
            return response.json();
            console.log('Puta que pariu')
        });
}*/
/*
window.onload = ola;

function ola() {
    /*alert('asdasd');
    fetch('https://console.aws.amazon.com/cloud9/ide/bdc5dcf6bca04b39ab10a706cdb79f29/operationals/:id_operational')
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            console.log(json);
        });
};
*/
