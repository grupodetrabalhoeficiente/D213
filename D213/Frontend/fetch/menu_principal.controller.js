 let occurrences = new Array(12).fill(0);
 let rows;
 let menuoccurrence = document.getElementById("ocorrenciasButton");
 menuoccurrence.onclick = menuOccurrence;

 function menuOccurrence() {
  window.location.replace('OcorrenciasEmCurso.html');
 }

 google.charts.load('current', { packages: ['corechart', 'bar'] });
 google.charts.setOnLoadCallback(drawBasic);

 async function drawBasic() {
  const response = await fetch('https://bdc5dcf6bca04b39ab10a706cdb79f29.vfs.cloud9.us-east-1.amazonaws.com/all_occurrences');
  const occurrencesobj = await response.json();
  var data = new google.visualization.DataTable();
  
  for (const occurrence of occurrencesobj) {
    if (occurrence.arrival !== null) {
     if (occurrence.arrival.slice(0, 4) === "2021") {
      if (occurrence.arrival.slice(5, 7) == "01") {
       occurrences[0]++;
      }
      else {
       if (occurrence.arrival.slice(5, 7) === "02") {
        occurrences[1] += 1;
       }
       else {
        if (occurrence.arrival.slice(5, 7) === "03") {
         occurrences[2] += 1;
        }
        else {
         if (occurrence.arrival.slice(5, 7) === "04") {
          occurrences[3] += 1;
         }
         else {
          if (occurrence.arrival.slice(5, 7) === "05") {
           occurrences[4] += 1;
          }
          else {
           if (occurrence.arrival.slice(5, 7) === "06") {
            occurrences[5] += 1;
           }

           else {
            if (occurrence.arrival.slice(5, 7) === "07") {
             occurrences[6] += 1;
            }

            else {
             if (occurrence.arrival.slice(5, 7) === "08") {
              occurrences[7] += 1;
             }

             else {
              if (occurrence.arrival.slice(5, 7) === "09") {
               occurrences[8] += 1;
              }
              else {
               if (occurrence.arrival.slice(5, 7) === "10") {
                occurrences[9] += 1;
               }
               else {
                if (occurrence.arrival.slice(5, 7) === "11") {
                 occurrences[10] += 1;
                }
                else {
                 if (occurrence.arrival.slice(5, 7) === "12") {
                  occurrences[11] += 1;
                 }
                }
               }
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  data.addColumn('string', 'Meses');
  data.addColumn('number', 'Ocorrencias');

  let options = {
   title: 'Ocorrências por mês 2021/2022',
   hAxis: {
    format: 'string',
    viewWindow: {
     min: [0],
     max: [12]
    }
   },
   chartArea: {
    left: 18,
    right: 10,
    top: 20,
    bottom: 25
   }
  };
  var data = google.visualization.arrayToDataTable([
   ['Mês', 'Ocorrencias', { role: 'style' }],
   ['Jan', occurrences[0], '#AB0404'],
   ['Fev', occurrences[1], '#AB0404'],
   ['Mar', occurrences[2], '#AB0404'],
   ['Abr', occurrences[3], '#AB0404'],
   ['Mai', occurrences[4], '#AB0404'],
   ['Jun', occurrences[5], '#AB0404'],
   ['Jul', occurrences[6], '#AB0404'],
   ['Ago', occurrences[7], '#AB0404'],
   ['Set', occurrences[8], '#AB0404'],
   ['Out', occurrences[9], '#AB0404'],
   ['Nov', occurrences[10], '#AB0404'],
   ['Dez', occurrences[11], '#AB0404'],
  ]);
  
  let chart = new google.visualization.ColumnChart(
   document.getElementById('chart_div'));

  chart.draw(data, options);
 }
 
 
