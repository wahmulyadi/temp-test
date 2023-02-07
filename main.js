var myApp = angular.module('App', []);
import "./http.js"
myApp.controller('HomeController', ['$scope', function($scope) {
    
    $scope.spice = 'very';

    $scope.chiliSpicy = function() {
        $scope.spice = 'chili';
    };

    $scope.jalapenoSpicy = function() {
        $scope.spice = 'jalapeño';
    };
}]);