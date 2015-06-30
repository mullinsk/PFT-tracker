var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var PFT = require('../models/pfts').PFT;

router.get('/', function(req, res, next) {
	PFT.find(function(err, pfts){
		if(err){ return next(err); }

		res.json(pfts);
	});
});



router.post('/', function(req, res, next){

	var pft = new PFT(req.body);

	pft.save(function(err, pft){
		if(err){ return next(err); }

		res.json(pft);
	});


});

router.param('pft', function(req, res, next, id) {
  var query = PFT.findById(id);

  query.exec(function (err, pft){
    if (err) { return next(err); }
    if (!pft) { return next(new Error('can\'t find pft')); }

    req.pft = pft;
    return next();
  });
});

router.get('/:pft', function(req, res) {
  res.json(req.pft);
});

module.exports = router;