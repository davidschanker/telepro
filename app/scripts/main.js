// global angular, reuire
'use strict';

// this is the main application module. this is where you define module dependencies, states, and initialization tasks.
// because we use require.js, we also need to bootstrap the app manually once all the dependencies defined in config.js 
// have finished loading. we do that in the require() block below

//DEFINE THE APPLICATION module
var TeleproApp = angular.module('TeleproApp', [
	//'ngResource',
	//'ngSanitize',
	'ui.bootstrap',
	//'datagridModule'
	'ui.router'
]);

//APPLICATION ENVIRONMENT VARS
TeleproApp.value('api', {
	url: 'http://localhost:9090/service/' //depends on where the services are going to be called from
});

//ROUTES
TeleproApp.config(function( $stateProvider, $urlRouterProvider){

	//Illegal routes rerouted here
	$urlRouterProvider.otherwise('/dashboard');

	//States
	$stateProvider
		.state('dashboard', {
			url: '/dashboard',
			views: {
				//Default view
				'content': {
					templateUrl: 'views/dashboard.html',
					controller: 'DashboardCtrl'
				}
			}
		})
		.state('signup', {
			url: '/signup',
			views: {
				'content': {
					templateUrl: 'views/amwellLanding.html',
					controller: 'SignupCtrl'
				}
			}
		})
		.state('provider', {
			url: '/provider',
			views: {
				'content': {
					templateUrl: 'views/provider.html',
					controller: 'ProviderCtrl'
				}
			}
		});
	}).run(function($log, $rootScope, $location) {
		
		//INITIALIZATION TASKS
		$rootScope.matchStatePartial = function(partial){
			//var match = $location.path().indexOf(partial) > -1 ? true; false;
			//return match;
		};
		$rootScope.alert = function(text) {
			alert(text);
		};
	});

//BOOTSTRAP THE APPLICATION - this is the equivalent of adding ng-app='ViperApp' to the document object, 
// but because IIDS uses AMD we have to do this 'after' everything has loaded
/*require([
	'scripts/config.js'
], function() {
	angular.bootstrap(document, ['TeleproApp']);
});*/