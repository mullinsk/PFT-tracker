(function(){
	'use strict';
	angular
	.module('app')
	.controller('fevController', fevController);

	fevController.$inject = ['$scope','pft'];
	function comp(a, b) {
		return new Date(a.date).getTime() - new Date(b.date).getTime();
	}


	function fevController ($scope, pft){
		pft.getPFTS()
		.then(function (data) {
			data.sort(comp);
			$scope.data = [{
				"values": data,
				"key": "FEV"
			}];
		});
		$scope.options = {
			"chart": {
				"type": "lineChart",
				"height":400,
				"margin": {
					"top":20,
					"bottom": 40,
					"left":55
				},
				"forceY": ([0,130]),
				"tooltipContent": function(key, y, e, graph) {
					return '<h4>' + key + '</h4><p>'+ y + '</p><p>'+ e + '</p>';
				},
				"transitionDuration": 350,
				"scatter": {
					onlyCircles: false
				},
				"showDistX": true,
				"showDistY": true,

				"x": function(d){
					return new Date(d.date);
				},
				"y": function(d){
					return d.fev / d.fevp * 100;
				},
				"xAxis": {
					tickFormat: function (d) {
						return d3.time.format('%b %Y')(new Date(d));
					},
					axisLabel: 'Date'
				},
				"yAxis":{
					tickFormat: function (d) {
						return d3.format('0.1f')(d);
					},
					axisLabel: 'FEV 1 (% pred)'
				}
			}
		};
	}
}
)();
