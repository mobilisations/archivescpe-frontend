// Inject Restangular into your controller
angular.module('archivesCPEApp.documents', ['ngRoute', 'restangular'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/restTest', {
            templateUrl: 'restTest/restTest.html',
            controller: 'DocumentController'
        });
    }])

    .controller('DocumentController', function ($scope, Restangular) {
        Restangular.setBaseUrl('http://localhost:3000');

        // First way of creating a Restangular object. Just saying the base URL
        var baseDocuments = Restangular.all('documents');

        // This will query /documents and return a promise.
        baseDocuments.getList().then(function (documents) {
            $scope.allDocuments = documents;
        });

        // Does a GET to /documents
        // Returns an empty array by default. Once a value is returned from the server
        // that array is filled with those values. So you can use this in your template
        $scope.documents = Restangular.all('documents').getList().$object;

    });