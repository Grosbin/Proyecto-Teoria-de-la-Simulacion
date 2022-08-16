
const { response } = require('express');
const Simulation = require('../models/Simulation');


const setSimulation = async (req, res = response) => {

	console.log(req.body);
	const simulation = new Simulation(req.body)

	try {

		const simulationSave = await simulation.save();
		res.status(200).json({
			ok: true,
			msj: 'Se creo la simulacion',
			simulation: simulationSave

		})
	} catch (err) {
		console.log(err);
		res.status(201).json({
			ok: false,
			msj: 'No se puedo crear la simulacion',

		})
	}

}

const getSimulation = async (req, res = response) => {

	const simulate = await Simulation.find();

	res.json({
		ok: true,
		msg: 'Se creo una simulacion',
		simulate
	})
}


module.exports = {
	setSimulation,
	getSimulation
}