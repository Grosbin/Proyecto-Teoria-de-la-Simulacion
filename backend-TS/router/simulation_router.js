const express = require('express');
const { setSimulation, getSimulation } = require('../controller/simulation');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validateFields');
const router = express.Router();



router.post(
	'/',
	[
		check('name', 'El nombre es requerido').not().isEmpty(),
		check('investment', 'La inversion es requerida').not().isEmpty(),
		check('own_resources', 'Los fondos propios es requeriodo').not().isEmpty(),
		check('financing', 'El financiamiento es requerido').not().isEmpty(),
		check('rate_own_resources', 'La tasa de los fondes propios es requerida').not().isEmpty(),
		check('rate_financing', 'La tasa de financiamiento es requerida').not().isEmpty(),
		check('resul_cpp', 'El CPP es requerido').not().isEmpty(),
		check('resul_vpf', 'El VFP es requerido').not().isEmpty(),
		check('resul_pr', 'El PR es requerido').not().isEmpty(),
		check('random_fne', 'Los FNE son requeridos').not().isEmpty(),
		validateFields
	],

	setSimulation

);


router.get(
	'/',
	getSimulation
);


module.exports = router;