'use strict';

angular.module('TeleproApp')
	.controller('DashboardCtrl', ['$log', '$scope', function($log, $scope) {

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

		$scope.myInterval = 50000;
		$scope.mwidth = 705;
		$scope.slides = 
		[
			{image: '/app/images/Happy-Family.jpg', text: 'family'}
			,{image: '/app/images/smiling-child.jpg', text: 'child'}
			,{image: '/app/images/doctor-ipad.jpg', text: 'ipad'}
			,{image: '/app/images/doctor-background.jpg', text: 'bg'}
			,{image: '/app/images/lady-doctor.jpg', text: 'lady'}
		];


		$scope.compressorData = 
		{
			series: [
				{name: 'Compressor Availability', data: [95, 96, 92, 91, 85, 88, null, null, null, null, null, null]}
			]
		}
		// $scope.addSlide = function() {
		//   var newWidth = 600 + slides.length + 1;
		//   slides.push({
		//     image: ['/app/images/smiling-child.jpg', '/app/images/smiling-child.jpg'],
		//     text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
		//       ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
		//   });
		// };
		// for (var i=0; i<4; i++) {
		//   $scope.addSlide();
		// }	

	}]);