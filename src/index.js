// Angularjs require
var angular = require('angular');
require('angular-route');
require('ng-file-upload');
require('angular-sanitize');


// AngularJS module working
var app = angular.module('App', ['ngRoute', 'ngFileUpload', 'ngSanitize']);

app.config(function($interpolateProvider, $routeProvider) {
    // ____interpolate provider____
    $interpolateProvider.startSymbol('[{');
    $interpolateProvider.endSymbol('}]');
});