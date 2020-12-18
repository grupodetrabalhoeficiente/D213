/*const dadosFormDiv = document.getElementById('dadosFormDiv');
const button = document.getElementById('dadosId');

function criarDiv() {
    console.log('fds')
    fetch('https://bdc5dcf6bca04b39ab10a706cdb79f29.vfs.cloud9.us-east-1.amazonaws.com/occurrences/:id_occurrence/operationals/')
        .then(res => res.json())
        .then((out) => {
            $('#dadosFormId form').empty();
            $.each(out, function(index, value) {
                dadosFormDiv.appendChild(document.createElement('div'));
            })
        }).catch(err => console.error(err));
}
$(document).ready(function() {
    criarDiv();
})
*/
