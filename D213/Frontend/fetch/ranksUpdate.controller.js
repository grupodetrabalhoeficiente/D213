const idUser = "1";

function ownRank() {
    async function fetchAsync() {
        /*fetch(`https://bdc5dcf6bca04b39ab10a706cdb79f29.vfs.cloud9.us-east-1.amazonaws.com/operationals/${urlParams.get('id_operational')}`)*/
        fetch('https://bdc5dcf6bca04b39ab10a706cdb79f29.vfs.cloud9.us-east-1.amazonaws.com/operationals/' + idUser)
            .then(res => res.json())
            .then((out) => {
                $('#myRank div').empty();
                $.each(out, function(index, value) {
                    document.getElementById('myNameRank').innerHTML = value.name;
                    if (value.points == null) {
                        document.getElementById('myPointsRank').innerHTML = "0Pontos";
                    }
                    else {
                        document.getElementById('myPointsRank').innerHTML = value.points + "Pontos";
                    }
                    document.getElementById('mySpotRank').innerHTML = localStorage.rankP + "º";
                    document.getElementById('myAvatarRank').src = value.avatar;
                })
            }).catch(err => console.error(err));
    }
    //chama a função fetchAsync()
    fetchAsync().then(data => console.log("ok")).catch(reason => console.log(reason.message));
}

function fillRank() {
    fetch('https://bdc5dcf6bca04b39ab10a706cdb79f29.vfs.cloud9.us-east-1.amazonaws.com/ranks')
        .then(res => res.json())
        .then((out) => {
            let screen = document.getElementById("everybodyRank");
            let txt = "";
            let countRank = 0;
            $.each(out, function(index, value) {
                txt += "<div class='eachPersonRankBody'>";
                countRank += 1;
                txt += "<span id='numberRank'>" + countRank + "º</span>";
                if (value.id_operational == idUser) {
                    localStorage.setItem("rankP", countRank);
                }
                if (value.avatar == null) {
                    txt += "<img id='avatarRank' src='Images/default-profile.png'></img>";
                }
                else {
                    txt += "<img id='avatarRank' src='" + value.avatar + "'></img>";
                }
                txt += "<span id='nameRank'>" + value.name + "</span>";
                if (value.points == null)
                    txt += "<span id='pointsRank'>0</span>";
                else
                    txt += "<span id='pointsRank'>" + value.points + "</span>";
                txt += "</div>";
            });
            screen.innerHTML += txt;
            let panels = document.querySelectorAll(".eachPersonRankBody");
            for (let i = 0; i < panels.length; i++) {
                panels[i].addEventListener("click", openPanelHandler);
            }
        }).catch(err => console.error(err));
}
$(document).ready(function() {
    fillRank();
    ownRank();
})

function OpenPanel(elem) {
    localStorage.setItem("operationalSelected", elem.id_operational);
    console.log(localStorage.operationalSelected);
    window.location.replace("OcorrenciaDados.html");
}

function openPanelHandler(event) {
    OpenPanel(this);
}
