(function(){
	'use strict';
	angular 
	.module('app')
	.config(config);

	config.$inject = ['$routeProvider'];

	function config ($routeProvider) {
		$routeProvider
		.when('/home', {
			templateUrl: 'app/home/home.html',
			controller: 'mainController',
			controllerAs: 'vm'
		})
		.when('/detail/:restId', {
			templateUrl: 'app/detail/detail.html',
			controller: 'DetailController',
			controllerAs: 'vm'
		})
		.when('/fev', {
			templateUrl: 'app/fev/fev.html',
			controller: 'fevController'
		})
		.when('/fef', {
			templateUrl: 'app/fef/fef.html',
			controller: 'fefController'
		})
		.when('/fvc', {
			templateUrl: 'app/fvc/fvc.html',
			controller: 'fvcController'
		})
	}
}());