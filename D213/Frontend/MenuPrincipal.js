function openRegistoOcorrencia() {
    window.location.href = "LoginOcorrencia.html"; // mudar isto quando tiver a pagina-- botao para abrir login da ocorrencia
}

/*  ChartDiv   */
google.charts.load('current', { packages: ['corechart', 'bar'] });
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Meses');
    data.addColumn('number', 'Ocorrencias');

    var options = {
        /*title: 'Número de ocorrencias nos ultimos meses',*/
        hAxis: {
            format: 'string',
            viewWindow: {
                min: [0],
                max: [12]
            }
        },
        chartArea: {
            left: 10,
            right: 10,
            top: 20,
            bottom: 25
        },
        legend: { position: 'none' }
    };
    var data = google.visualization.arrayToDataTable([
        ['Mês', 'Ocorrencias', { role: 'style' }],
        ['Jan', 9, '#AB0404'],
        ['Fev', 10., '#AB0404'],
        ['Mar', 19, '#AB0404'],
        ['Abr', 20, '#AB0404'],
        ['Mai', 15, '#AB0404'],
        ['Jun', 16, '#AB0404'],
        ['Jul', 13, '#AB0404'],
        ['Ago', 17, '#AB0404'],
        ['Set', 5, '#AB0404'],
        ['Out', 6, '#AB0404'],
        ['Nov', 2, '#AB0404'],
        ['Dez', 7, '#AB0404'],
    ]);
    var chart = new google.visualization.ColumnChart(
        document.getElementById('chart_div'));

    chart.draw(data, options);


}
