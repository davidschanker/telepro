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

		$scope.userOut = {
			firstname: "",
			lastname: "",
			email: "",
			email2: "",
			password: ""
		};

		$scope.signup = function() {
			$log.info('firstname: ' + $scope.user.firstname)
			$log.info('lastname: ' + $scope.user.lastname)
			$log.info('email: ' + $scope.user.email)
			$log.info('email2: ' + $scope.user.email2)
			$log.info('password: ' + $scope.user.password)

			$scope.userOut.firstname = 'Firstname = ' + $scope.user.firstname
			$scope.userOut.lastname = 'Lastname = ' + $scope.user.lastname
			$scope.userOut.email = 'email = ' + $scope.user.email
			$scope.userOut.email2 = 'email2 = ' + $scope.user.email2
			$scope.userOut.password = 'password = ' + $scope.user.password
		};

		$scope.openSigninModal = function (size) {

			// $scope.hello = 5;

		    var modalInstance = $modal.open({
		      templateUrl: 'views/signinModal.html',
		      controller: 'SigninModalCtrl',
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

	})

	.controller('SigninModalCtrl', function($scope, $modalInstance, $log) {
		$scope.signinOut = {
			username: "",
			password: ""
		};

		$scope.signin = function() {
			$scope.signinOut.username = 'Username = ' + $scope.signin.username
			$scope.signinOut.password = 'Password = ' + $scope.signin.password

			$log.info('userin: ' + $scope.signin.username)
			$log.info('userout: ' + $scope.signinOut.username)
		};

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