'use strict';

angular.module('TeleproApp')
	.controller('ViewDocsCtrl', function($log, $scope) {

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

		$scope.doctors = 
		{
			available: [
				{name: 'Reuel Gregory', desc: 'Family Physician', rating: 5, status: 'Available Now'}
				,{name: 'Lauralee Yalden', desc: 'Family Physician', rating: 5, status: 'Available Now'}
				,{name: 'Jill Weber', desc: 'Family Physician', rating: 5, status: 'Available Now'}
				,{name: 'Bridget Mahoney', desc: 'Nutritionist', rating: 5, status: 'Waiting Room'}
				,{name: 'LaRhonda Gough', desc: 'Therapist', rating: 0, status: 'None'}
				,{name: 'James Schiller', desc: 'Therapist', rating: 0, status: 'None'}
				,{name: 'Sherri DeHaas', desc: 'Family Physician', rating: 5, status: 'None'}
				,{name: 'Rasai Ernst', desc: 'Family Physician', rating: 4, status: 'None'}
			]
		};

		$scope.compressorData = 
		{
			series: [
				{name: 'Compressor Availability', data: [95, 96, 92, 91, 85, 88, null, null, null, null, null, null]}
			]
		}

	});