
const { Schema, model } = require('mongoose');

const SimulationSchema = new Schema({
	name: {
		type: String,
		// required: true
	},
	description: {
		type: String,
		// required: true
	},
	investment: {
		type: String,
		// required: true
	},
	own_resources: {
		type: String,
		// required: true
	},
	rate_own_resources: {
		type: String,
		// required: true
	},
	rate_financing: {
		type: String,
		// required: true
	},
	resul_cpp: {
		type: String,
		// required: true
	},
	resul_vpf: {
		type: String,
		// required: true
	},
	resul_pr: {
		type: String,
		// required: true
	},
	rendom_fne: {
		type: Array,
		default: []

	}

});

// SimulationSchema.method('toJSON', function () {
// 	const { _v, _id, ...object } = this.toObject();
// 	object.id = _id;
// 	return object;
// });

module.exports = model('Simulation', SimulationSchema);

