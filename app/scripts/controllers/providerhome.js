'use strict';

angular.module('TeleproApp')
	.controller('ProviderHomeCtrl', function($log, $scope, $state) {

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
	        route:   'providerhome.myhealth'
	      },
	      {
	        heading: 'My Providers',
	        route:   'providerhome.myproviders'
	      },
	      {
	      	heading: 'Calendar',
	      	route:   'providerhome.calendar'
	      }
		];

		$scope.gotoVideo = function() {
			$state.transitionTo('video')
		}


	});