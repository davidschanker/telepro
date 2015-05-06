'use strict';

angular.module('TeleproApp')
	.controller('VideoCtrl', function($log, $scope) {

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

		$scope.hello = "video";

		$scope.takePicture = function() {
			$scope.pictureTaken = true;
		}

		$scope.exitPicture = function() {
			$scope.pictureTaken = false;
		}

		$scope.takeVideo = function() {
			$scope.takingVideo = true;
		}

		$scope.exitVideo = function() {
			$scope.takingVideo = false;
		}

		$scope.shareScreen = function() {
			$scope.sharingScreen = true;
		}

		$scope.exitScreen = function() {
			$scope.sharingScreen = false;
		}
	});