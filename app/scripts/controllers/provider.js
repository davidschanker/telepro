'use strict';

angular.module('TeleproApp')
	.controller('ProviderCtrl', function($log, $scope, $modal) {

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
		$scope.openSigninModal = function(size) {
			var modalInstance = $modal.open({
				templateUrl: 'views/signinModal.html',
				controller: 'SigninModalCtrl',
				size:size,
				resolve: {
					items: function() {
						return $scope.items;
					}
				}
			});

			modalInstance.result.then(function (selectedItem) {
				$scope.selected = selectedItem;
			}, function () {
				$log.info('Modal dismissed at: ' + new Date());
			});
		};
		

	});