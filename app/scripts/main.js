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
	'ui.router',
	'ui.router.tabs'
	// 'ngAnimate'
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
					templateUrl: 'views/signup.html',
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
		})
		.state('viewdoctors', {
			url: '/viewdoctors',
			views: {
				'content': {
					templateUrl: 'views/viewdoctors.html',
					controller: 'ViewDocsCtrl'
				}
			}
		})
		.state('sample', {
			url: '/sample',
			views: {
				'content': {
					templateUrl: 'views/sample.html',
					controller: 'SampleCtrl'
				}
			}
		})
		.state('patienthome', {
			url: '/patienthome',
			views: {
				'content': {
					templateUrl: 'views/patient/patienthome.html',
					controller: 'PatientHomeCtrl'
				}
			}
		})
		.state('patienthome.myhealth', {
			url: '/myhealth',
			templateUrl: 'views/patient/myhealth.html'
			// template: '<span>myhealth!</span>'
		})
		.state('patienthome.myproviders', {
			url: '/myproviders',
			templateUrl: 'views/patient/myproviders.html'
			// template: '<span>myproviders!</span>'
		})
		.state('patienthome.calendar', {
			url: '/calendar',
			templateUrl: 'views/patient/calendar.html'
			// template: '<span>calendar!</span>'
		})
		.state('providerhome', {
			url: '/providerhome',
			views: {
				'content': {
					templateUrl: 'views/provider/providerhome.html',
					controller: 'ProviderHomeCtrl'
				}
			}
		})
		.state('providerhome.myhealth', {
			url: '/myhealth',
			templateUrl: 'views/provider/myhealth.html'
			// template: '<span>myhealth!</span>'
		})
		.state('providerhome.myproviders', {
			url: '/myproviders',
			templateUrl: 'views/provider/myproviders.html'
			// template: '<span>myproviders!</span>'
		})
		.state('providerhome.calendar', {
			url: '/calendar',
			templateUrl: 'views/provider/calendar.html'
			// template: '<span>calendar!</span>'
		})
		.state('video', {
			url: '/video',
			views: {
				'content': {
					templateUrl: 'views/video.html',
					controller: 'VideoCtrl'
				}
			}
		})
		.state('dash2', {
			url: '/dash2',
			views: 
			{
				'content': {
					templateUrl: 'views/dash2.html',
					controller: 'Dash2Ctrl'
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