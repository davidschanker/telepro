'use strict';

angular.module('TeleproApp')
	.controller('PatientHomeCtrl', function($log, $scope, $state) {

		// ===========================================================
		// PRIVATE METHODS AND VARS (not in $scope)

		// ===========================================================
		// PUBLIC METHODS AND VARS (in $scope)

		// var getDummyTurbineList = function() {
		// 	$dummy.getDummyTurbineList().then(
		// 		//success
		// 		function(response){
		// 			$scope.turbineList = response;
		// 		},
		// 		// error
		// 		function(error){
		// 			$log.error(error);
		// 		}
		// 	);
		// };

		// ======================================================
		// INITIALIZE

		//getDummyTurbineList();

		// ======================================================
		// EVENT LISTENERS

		$scope.tabData = [
	      {
	        heading: 'My Health',
	        route:   'patienthome.myhealth'
	      },
	      {
	        heading: 'My Providers',
	        route:   'patienthome.myproviders'
	      },
	      {
	      	heading: 'Calendar',
	      	route:   'patienthome.calendar'
	      }
		];

		$scope.gotoVideo = function() {
			$state.transitionTo('video')
		}


	});