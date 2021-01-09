const idUser = "1";

function ownRank() {
    fetch('https://bdc5dcf6bca04b39ab10a706cdb79f29.vfs.cloud9.us-east-1.amazonaws.com/operationals/' + idUser)
        .then(res => res.json())
        .then((out) => {
            let screen = document.getElementById("everybodyRank");
            let txt = "";
            $.each(out, function(index, value) {
                txt += "<div class='eachPersonRankBody'>";
                txt += "<span id='nameRank'>" + value.name + "</span>";
                txt += "<span id='pointsRank'>" + value.name + "</span>";
                txt += "</div>";
            });
            screen.innerHTML += txt;
        }).catch(err => console.error(err));
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
                txt += "<span id='nameRank'>" + value.name + "</span>";
                if (value.points == null)
                    txt += "<span id='pointsRank'>0</span>";
                else
                    txt += "<span id='pointsRank'>" + value.points + "</span>";
                txt += "</div>";
            });
            screen.innerHTML += txt;
        }).catch(err => console.error(err));
}
$(document).ready(function() {
    fillRank();
})
