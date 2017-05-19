/**
 * Created by bentonrobertson on 2017-05-09.
 */
app.factory('priceHistory',['$http', function($http){
    var getData = function() {
        return $http.get('http://api.coindesk.com/v1/bpi/historical/close.json')
            .then(function (data) {

                var history = data.data;
                var BPI = history.bpi;

                var x = [];
                var y = [];

                for (var key in BPI) {
                    y.push(BPI[key]);
                    x.push(key);
                }

                var obj = {
                    x:x,
                    y:y
                };

                return obj;

            });
    }
    return getData();
}]);
