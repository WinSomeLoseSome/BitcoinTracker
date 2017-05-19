/**
 * Created by bentonrobertson on 2017-05-10.
 */
var graphIt = function(xCoords, yCoords, divName) {

    var trace = {
        x: xCoords,
        y: yCoords,
        mode: 'lines+markers'
    };

    var data = [trace];

    var layout = {
        title: 'USD rate per Bitcoin',
        height: 800,
        width: 960
    };

    Plotly.newPlot(divName, data, layout);
}