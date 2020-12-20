const idUser = "2378";

function fillRank() {
    fetch('https://bdc5dcf6bca04b39ab10a706cdb79f29.vfs.cloud9.us-east-1.amazonaws.com/operationals/' + idUser)
        .then(res => res.json())
        .then((out) => {
            let screen = document.getElementById("everybodyRank");
            let txt = "";
            $.each(out, function(index, value) {
                txt += "<div class='eachPersonRankBody'>";
                txt += "<span id='nameRank'>" + value.id_operational + "</span>";
                txt += "<span id='pointsRank'>" + value.id_operational + "</span>";
                txt += "</div>";
            });
            screen.innerHTML += txt;
        }).catch(err => console.error(err));
}
$(document).ready(function() {
    fillRank();
})





function myRank() {
    fetch('https://bdc5dcf6bca04b39ab10a706cdb79f29.vfs.cloud9.us-east-1.amazonaws.com/operationals/')
        .then(res => res.json())
        .then((out) => {
            let screen = document.getElementById("screen");
            let count = 1;
            let txt = "";
            $.each(out, function(index, value) {
                txt += "<div class='presenceDiv'>";
                txt += "<form> ";
                txt += "<span class='ptsClass'>" + "Operational " + value.id_operational + "</span>";
                txt += '<input type="radio" class="yesClass" name="presence" id="checkyes2" value="1" checked> ';
                txt += '<input type="radio" class="noClass" name="presence" id="checkno2" value="0">';
                txt += "</form>"
                txt += "</div";
            });
            screen.innerHTML += txt;
        }).catch(err => console.error(err));
}
