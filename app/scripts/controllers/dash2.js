'use strict';

angular.module('TeleproApp')
	.controller('Dash2Ctrl', function($log, $scope) {

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

		$scope.compressorData = 
		{
			series: [
				{name: 'Compressor Availability', data: [95, 96, 92, 91, 85, 88, null, null, null, null, null, null]}
			]
		}

	});