'use strict';

angular.module('myApp.amwellLanding', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/amwellLanding', {
    templateUrl: 'views/amwellLanding.html',
    controller: 'AmwellLandingCtrl'
  });
}])

.controller('AmwellLandingCtrl', [function($scope, $modal, $log) {

}]);