'use strict';

// Declare app level module which depends on views, and components
angular.module('archivesCPEApp', [
    'ngRoute', 'restangular',
    'archivesCPEApp.version',
    'archivesCPEApp.view1',
    'archivesCPEApp.documents'
]).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/view1'});
}]);


