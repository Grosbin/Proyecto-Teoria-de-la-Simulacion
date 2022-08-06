const { Router } = require('express');
const router = Router();

const { createPDF } = require('../controller/generate_pdf');

router.get('/generate', createPDF);

module.exports = {
	router
};