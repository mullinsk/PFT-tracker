var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PftSchema = new Schema({
	date: Date,
	fev: Number,
	fevp: Number,
	fvc: Number,
	fvcp: Number,
	fef: Number,
	fefp: Number
});

var PFT = mongoose.model('PFT', PftSchema);

module.exports = {
	PFT: PFT
}