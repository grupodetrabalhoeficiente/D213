 function fillTable() {
     fetch('https://bdc5dcf6bca04b39ab10a706cdb79f29.vfs.cloud9.us-east-1.amazonaws.com/operationals')
         .then(res => res.json())
         .then((out) => {
             let count = 1;
             $('#table tbody').empty();
             $.each(out, function(index, value) {
                 if (value.points != undefined) {
                     console.log(value.points);
                     if (count == 1) {
                         document.getElementById("Nome1").innerHTML = value.name;
                         document.getElementById("Pontos1").innerHTML = value.points; // mudar isto para a funçae certa
                         count++;
                     }
                     else {
                         if (count == 2) {
                             document.getElementById("Nome2").innerHTML = value.name;
                             document.getElementById("Pontos2").innerHTML = value.points; // mudar isto para a funçae certa
                             count++;
                         }
                         else {
                             if (count == 3) {
                                 document.getElementById("Nome3").innerHTML = value.name;
                                 document.getElementById("Pontos3").innerHTML = value.points; // mudar isto para a funçae certa
                                 count++;
                             }
                             else {
                                 $('#table tbody').append('<tr><th scope="row">' + count + '</th><td>' + value.name + '</td><td>' + value.speciality + '</td><td>' + value.points + '</td></tr>')
                                 count++;
                             }
                         }
                     }
                 }
                 else {
                     if (count == 1) {
                         document.getElementById("Nome1").innerHTML = value.name;
                         document.getElementById("Pontos1").innerHTML = "0"; // mudar isto para a funçae certa
                         count++;
                     }
                     else {
                         if (count == 2) {
                             document.getElementById("Nome2").innerHTML = value.name;
                             document.getElementById("Pontos2").innerHTML = "0"; // mudar isto para a funçae certa
                             count++;
                         }
                         else {
                             if (count == 3) {
                                 document.getElementById("Nome3").innerHTML = value.name;
                                 document.getElementById("Pontos3").innerHTML = "0"; // mudar isto para a funçae certa
                                 count++;
                             }
                             else {
                                 $('#table tbody').append('<tr><th scope="row">' + count + '</th><td>' + value.name + '</td><td>' + value.speciality + '</td><td>' + "0" + '</td></tr>')
                                 count++;
                             }
                         }
                     }
                 }
             });
         }).catch(err => console.error(err));
 }

 $(document).ready(function() {
     fillTable();
 })
 