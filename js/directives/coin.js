/**
 * Created by bentonrobertson on 2017-05-09.
 */
app.directive('coin', function() {
    return {
        restrict: 'E',
        scope: {
            info: '='
        },
        templateUrl: 'js/directives/coin.html'
    };
});
