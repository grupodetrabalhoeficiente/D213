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
        let data = {};
        data.email = document.getElementById("mailInput").value;
        data.password = document.getElementById("passInput").value;
        console.log(data); //debugging para ver os dados que foram enviados
        //chamada fetch para envio dos dados para o servior via POST
        fetch('https://bdc5dcf6bca04b39ab10a706cdb79f29.vfs.cloud9.us-east-1.amazonaws.com/login', {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify(data)
        }).then(function(response) {
            if (!response.ok) {
                console.log(response.status); //=> number 100–599
                console.log(response.statusText); //=> String
                console.log(response.headers); //=> Headers
                console.log(response.url); //=> String
                openForm();
                document.getElementById("passInput").value = "";
                document.getElementById("mailInput").value = "";
            }
            else {
                let userData = getCookie('userData');
                let user = JSON.parse(JSON.stringify(userData));
                if (user.length === 23) {
                    localStorage.setItem('id_operational_logged', user.slice(20, 22))
                }
                else {
                    localStorage.setItem('id_operational_logged', user.slice(20, 21))
                }
                alert("submitted with success");
                window.location.href = "MenuPrincipal.html";
            }
        }).then(function(result) {
            console.log(result);
        }).catch(function(err) {
            openForm();
            document.getElementById("passInput").value = "";
            document.getElementById("mailInput").value = "";
            console.error(err);
        });
    }
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
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
    document.getElementById("textTxt1").className = "textTxtClass text-center";
    document.getElementById("textTxt").className = "hidden";
    document.getElementById("errorFrame").className = "errorFrame";
}

function closeForm() {
    document.getElementById("errorFrame").className = "hidden";
}
