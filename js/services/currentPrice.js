/**
 * Created by bentonrobertson on 2017-05-09.
 */
app.factory('currentPrice', ['$http', function($http) {

    var getData = function() {
        return $http.get('http://api.coindesk.com/v1/bpi/currentprice.json')
            .then(function (data) {

                return data;

            });
    }
    return getData();
}]);

