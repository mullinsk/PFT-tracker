(function(){
	'use strict';

	angular
	.module('app')
	.controller('DetailController', DetailController);

	function DetailController (pft, $routeParams) {
		var vm = this;

		pft.getPFTDetail($routeParams.restId)
		.then(function(data){
			vm.pft = data;
		});
	}
}());