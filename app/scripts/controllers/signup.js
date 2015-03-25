'use strict';

angular.module('TeleproApp')
	.controller('SignupCtrl', function($log, $scope, $modal) {

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

		$scope.open = function (size) {

		    var modalInstance = $modal.open({
		      templateUrl: 'views/signupModal.html',
		      controller: 'SignupModalCtrl',
		      size: size,
		      resolve: {
		        items: function () {
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

		$scope.open2 = function() {
			$scope.item = 2;
		}

		$scope.item = 3;

	})

	.controller('SignupModalCtrl', function($scope, $modalInstance) {

		$scope.items = ['item1', 'item2', 'item3'];
		$scope.selected = {
		  item: $scope.items[0]
		};

		$scope.ok = function () {
		  $modalInstance.close($scope.selected.item);
		};

		$scope.cancel = function () {
		  $modalInstance.dismiss('cancel');
		};

	});