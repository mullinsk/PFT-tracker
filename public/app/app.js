'use strict';

angular
	.module('app', ['ngRoute', 'nvd3'])
	.config(['$routeProvider', function($routeProvider){
		$routeProvider.otherwise({redirectTo: '/home'})
	}]);