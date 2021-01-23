function fillTeam() {
    fetch('https://bdc5dcf6bca04b39ab10a706cdb79f29.vfs.cloud9.us-east-1.amazonaws.com/occurrences/'+localStorage.id_occurrence+'/evaluations/')
        .then(res => res.json())
        .then((out) => {
            let screen = document.getElementById("divTeam");
            let txt = "";
            let count = 0;
            $.each(out, function(index, value) {
                if(value.statute==="chefe"){
                document.getElementById('tipo').innerHTML= value.occurrence_type;
                document.getElementById('local').innerHTML= value.local;
                txt += '<div class="accordion" id="accordionSection' + count + '">  <div class="accordion-item mb-3"> <h2><button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse' + count + '">' + value.name+"- " + '<strong>'+ " "+ ' Responsável</strong></button></h2>';
                txt += '<div class="accordion-collapse collapse" id="collapse' + count + '" data-bs-parent="#accordionSection' + count + '">';
                txt += '<div class="accordion-body"> <strong>ID:</strong>#' + value.id_operational + '<br> <strong>Especialidade:</strong>' + value.speciality + '<br>';
                txt += '<strong>Tipo de Operacional:</strong>' + value.operational_type + '<br>';
                txt += '<strong>Pontuação:</strong>' + value.points + '<br> </div>  </div>  </div> </div>'
                count++;
                }else {
                    document.getElementById('tipo').innerHTML= value.occurrence_type;
                document.getElementById('local').innerHTML= value.local;
                txt += '<div class="accordion" id="accordionSection' + count + '">  <div class="accordion-item mb-3"> <h2><button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse' + count + '">' + value.name + '</button></h2>';
                txt += '<div class="accordion-collapse collapse" id="collapse' + count + '" data-bs-parent="#accordionSection' + count + '">';
                txt += '<div class="accordion-body"> <strong>ID:</strong>#' + value.id_operational + '<br> <strong>Especialidade:</strong>' + value.speciality + '<br>';
                txt += '<strong>Tipo de Operacional:</strong>' + value.operational_type + '<br>';
                txt += '<strong>Pontuação:</strong>' + value.points + '<br> </div>  </div>  </div> </div>'
                count++;
                }
            });
            screen.innerHTML += txt;
        }).catch(err => console.error(err));
}

$(document).ready(function() {
    fillTeam();
})