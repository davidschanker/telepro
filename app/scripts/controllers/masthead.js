'use strict';
/**
*
* Default Controller Example
*
*/
angular.module('TeleproApp')
	.controller('MastheadCtrl', function($log, $scope, $rootScope) {

		$scope.navTemplateUrl = 'views/masthead.html';

		$scope.appName = 'Telepro';

		$scope.primaryNav = [
			{state: 'dashboard', label: 'Site Dashboard'}
			,{state: 'signup', label: 'Patient Signup'}
			,{state: 'provider', label: 'Provider Signup'}
			,{state: 'viewdoctors', label: 'View Doctors'}
			,{state: 'sample', label: 'Sample other page'}
		];

		$scope.user = {
			firstName: 'Artour',
			lastName: 'Babaevsky'
		};

		$scope.messages = [
			{id:2, title:'Forget it', text: 'I managed to fix the problem.', timestamp: '2014-04-23T00:10:31:00Z'},
			{id:1, title:'Help!', text: 'I need some help with this thing.', timestamp: '2014-04-23T00:10:30:00Z'}
		];

		$scope.alerts = [
			{id:1, severity:3, title: 'Oh no!', text: 'Something has gone wrong!', timestamp:'2014-04-23T00:10:30:00Z'},
			{id:2, severity:2, title: 'Hey', text: 'Something might go wrong', timestamp: '2014-04-23T00:10:31:00Z'}
		];

		// This function returns the string matching the highest severity level in $scope.alerts.
		$scope.maxStatusButtonClass = function(){
			//Start at the lowest value for statusId
			var severityId = 0;
			//Find the highest severity value in $scope.alerts
			angular.forEach($scope.alerts, function(alert){
				if(alert.severity > severityId) {
					severityId = alert.severity;
				}
			});
			switch(severityId){
				case 0:
					return 'btn-info';
				case 1:
					return 'btn-success';
				case 2:
					return 'btn-warning';
				case 3:
					return 'btn-danger';
			}
		};

		$scope.severityLabelString = function(severityId){
			switch(severityId){
				case 0:
					return 'Info';
				case 1:
					return 'OK';
				case 2:
					return 'Moderate';
				case 3:
					return 'Urgent';
			}
		};

		$scope.severityLabelString = function(severityId){
			switch(severityId){
				case 0:
					return 'label-info';
				case 1:
					return 'label-sucess';
				case 2:
					return 'label-warning';
				case 3:
					return 'label-important';
			}
		};

		$scope.recentlyClosedTabs = [
			{id:1, title: 'asset01'},
			{id:2, title: 'asset02'},
			{id:3, title: 'asset03'}
		];

		$scope.openTab = function(id){
			$log.info('opening tab', id);
		};

		$scope.closeAllTabs = function(){
			$log.info('closing all tabs');
		};

		// SEARCH - Here's an example of using the angular-ui bootstrap typeahead plugin
		// (http://angular-ui.github.io/bootstrap/#/typeahead).
		$scope.searchString = '';
		$scope.searchStrings = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California'];

		//RESPONSIVE LAYOUT
		$scope.navbarIsHidden = true;
		$scope.toggleNavbarVisibility = function() {
			$scope.navbarIsHidden = !$scope.navbarIsHidden;
		};


	});
