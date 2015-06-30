(function(){
	'use strict';
	angular
	.module('app')
	.factory('pft', pftFactory);


	pftFactory.$inject = ['$http'];
	function pftFactory ($http) {
		return {
			getPFTS : getPFTS,
			getPFTDetail: getPFTDetail,
			newPFT: newPFT

		}

		function getPFTS (){
			return $http.get('/pfts')
			.then(function(response){
				return response.data;
			});
		};

		function getPFTDetail (restId){
			return $http.get('/pfts/' + restId)
			.then(function(response){
				return response.data;
			});
		};

		function newPFT (pft){
			return $http.post('/pfts', pft)
			.then(function(response){
				console.log('working');
				return response.data;
			});
		};


	}

}());