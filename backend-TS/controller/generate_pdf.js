const { generatePDF } = require("../helpers/generate_pdf")


const createPDF = (req, res) => {
	const professor = 'Luque';
	const description = 'Esta es una descripcion de prueba para mostrar el ejemplo';
	generatePDF(description, professor);
	res.json({
		ok: true,
		msg: 'El pdf se creo perfectamente'
	});
}

module.exports = {
	createPDF
}