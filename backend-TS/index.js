const express = require('express');
const app = express();
const cron = require('node-cron');
const { dbConnection } = require('./database/data_base_config');

require('dotenv').config();

// app.get('/', (req, res) => {
// 	res.json({
// 		ok: true
// 	})
// });


app.use(express.static('public'));

app.use('/api/pdf', require('./router/route_generate_pdf'));

app.listen(process.env.PORT, () => {
	console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});

dbConnection();

// segundos(0-59) opcional
// minutos(0-59)
// horas(0-23)
// día del mes(0-31)
// mes(0-12 o nombres)
// día de la semana (0-7, 7 es Domingo, o nombres)


cron.schedule('0 0 * * 7', () => {
	console.log('Se ejecuta una vez todos los domingos');
});