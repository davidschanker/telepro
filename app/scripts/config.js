// global requirejs, definte
'use strict';

//This file sets up basic module libraries you'll need for your app

// first, identify any libraries and their paths
requirejs.config({
	baseUrl: 'bower_components/iids-dist/', //IIDS uses relative paths
	paths: {
		'lodash' : '../lodash/dist/lodash'
		//'declarative-visualizations': 'components/declarative-visualizations/js/declarative-visualizations'
	},
	shim: {}
});

// second, use require.js to pull in the apps you need
// NOTE: until angular has lazy-loading, you need to require everything here
define([

	'lodash',

	'ge-bootstrap',
	'datagrids',
	'highstock',
	'moment',



	], function() {

	});