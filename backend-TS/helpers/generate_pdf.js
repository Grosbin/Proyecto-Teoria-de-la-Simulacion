const pdf = require('html-pdf');

const generatePDF = (description, professor) => {

	const content = `
	<img style="width: 100px; height: auto" src="${`http://localhost:4500//logo0.png`}" alt="">
	<h1 style="color: red;  text-align: center;">El Ing ${professor} es un Crack</h1>
	<p style="font-weight: 300; text-align: center;">${description}</p>
	`;

	pdf.create(content).toFile('./document/prueba.pdf', (err, res) => {
		if (err) {
			console.log(err);
		} else {
			console.log(res);
		}
	});

}

module.exports = {
	generatePDF
}