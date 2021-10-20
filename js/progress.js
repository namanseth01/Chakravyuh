function drawChart() {
    // Define the chart to be drawn.
    let data = google.visualization.arrayToDataTable([
        ['Game Number', 'Score'],
        ['1',  55],
        ['2',  68],
        ['3',  47],
        ['3',  85],
        ['4',  78]
    ]);

    let options = {title: 'Score in last 5 games'};

    // Instantiate and draw the chart.
    let chart = new google.visualization.BarChart(document.getElementsByClassName('container'));
    chart.draw(data, options);
}
google.charts.setOnLoadCallback(drawChart);