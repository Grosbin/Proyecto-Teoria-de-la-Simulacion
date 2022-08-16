const express = require('express');
const { setSimulation, getSimulation } = require('../controller/simulation');
const { check } = require('express-validator');
const router = express.Router();



router.post('/', setSimulation);


router.get(
	'/',
	getSimulation
);


module.exports = router;