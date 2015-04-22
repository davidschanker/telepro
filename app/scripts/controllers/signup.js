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

		$scope.user = {};
		  
		// necessary?
	    // $scope.allowValidation = function () {
	    //   $scope.$broadcast('kickOffValidations');
	    // }

		$scope.userOut = {
			firstname: "",
			lastname: "",
			email: "",
			email2: "",
			password: ""
		};

		$scope.signup = function() {

			//Check to see if an account with that email already exists. If so, throw error. If not, create a new account

			if ($scope.signup.email != $scope.signup.email) {
				$scope.validationFailed = true
				$log.info('validation failed!')
			} else {
				$scope.validationFailed = false
				$log.info('firstname: ' + $scope.signup.firstname)
				$log.info('lastname: ' + $scope.signup.lastname)
				$log.info('email: ' + $scope.signup.email)
				$log.info('email2: ' + $scope.signup.email2)
				$log.info('password: ' + $scope.signup.password)

				$scope.userOut.firstname = 'Firstname = ' + $scope.signup.firstname
				$scope.userOut.lastname = 'Lastname = ' + $scope.signup.lastname
				$scope.userOut.email = 'email = ' + $scope.signup.email
				$scope.userOut.email2 = 'email2 = ' + $scope.signup.email2
				$scope.userOut.password = 'password = ' + $scope.signup.password
			}
		};

		$scope.reset = function() {
		    $scope.validationFailed = false
		    $scope.signup = null
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

	.controller('SigninModalCtrl', function($scope, $modalInstance, $log, $state) {
		$scope.signinOut = {
			username: "",
			password: ""
		};

		$scope.signin = function() {
			//$scope.signinOut.username = 'Username = ' + $scope.signin.username
			//$scope.signinOut.password = 'Password = ' + $scope.signin.password

			// Do some kind of validation, then forward to new page
			$state.transitionTo('patienthome.myhealth')
			$modalInstance.dismiss('cancel')

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