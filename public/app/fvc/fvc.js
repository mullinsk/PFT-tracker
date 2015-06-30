(function(){
	'use strict';
	angular
	.module('app')
	.controller('fvcController', fvcController);

	fvcController.$inject = ['$scope','pft'];
	function comp(a, b) {
		return new Date(a.date).getTime() - new Date(b.date).getTime();
	}


	function fvcController ($scope, pft){
		pft.getPFTS()
		.then(function (data) {
			data.sort(comp);
			$scope.data = [{
				"values": data,
				"key": "FEF"
			}];
		});
		$scope.options = {
			"chart": {
				"type": "lineChart",
				"height":450,
				"width":900,
				"margin": {
					"top":20,
					"bottom": 40,
					"left":55
				},
				"clipVoronoi": true,
				"tooltipContent": function(key, y, e, graph) {
                    return '<h3>' + key + '</h3><p>'+ y + '</p><p>'+ e + '</p>';
                },
                "transitionDuration": 350,
				"scatter": {
                    onlyCircles: false
                },
                "forceY": ([0,130]),
				"showDistX": true,
				"showDistY": true,

				"x": function(d){
					return new Date(d.date);
				},
				"y": function(d){
					return d.fvc / d.fvcp * 100;
				},
				"xAxis": {
					tickFormat: function (d) {
						return d3.time.format('%b %Y')(new Date(d));
					}, 
					"showMaxMin": false,
					"staggerLabels": true
				},
				"yAxis":{
					tickFormat: function (d) {
						return d3.format('0.1f')(d);
					}
				}

			}
		};
	}
}
)();
