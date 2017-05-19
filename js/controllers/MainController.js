/**
 * Created by bentonrobertson on 2017-05-08.
*/

app.controller('MainController', ['$scope', 'currentPrice', 'priceHistory',
    function($scope, currentPrice, priceHistory) {


    // for the current price factory
    currentPrice.then(function(currentData) {

        var info = currentData.data;
        $scope.time = info.time;

        var prices = info.bpi;
        var USD = prices.USD;
        var rate = prices.rate;
        $scope.USrate = USD.rate;

    });

    // for the price history factory
    priceHistory.then(function(historyData) {

        var x = historyData.x;
        var y = historyData.y;

        graphIt(x, y, 'myDiv');


    });


}]);
