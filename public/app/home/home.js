(function(){
	'use strict';
	angular
  .module('app')
  .controller('mainController', mainController);

  mainController.$inject = ['pft'];

  function mainController (pft){
    var vm = this;
    vm.data =[];
    pft.getPFTS()
    .then(function(data){
     vm.pfts = data;
   });
    vm.newP = {};

    vm.addPFT = function(){
      console.log(vm.newP);
      pft.newPFT(vm.newP);
      vm.newP = {};
    }
  }
}());
