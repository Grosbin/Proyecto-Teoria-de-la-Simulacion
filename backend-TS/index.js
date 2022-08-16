const express = require('express');
const app = express();
const { dbConnection } = require('./database/data_base_config');
require('dotenv').config();
const cors = require('cors');

// app.get('/', (req, res) => {
// 	res.json({
// 		ok: true
// 	})
// });

dbConnection();

// Cors
app.use(cors())

// Lectura y parseo del body
app.use(express.json());

app.use(express.static('public'));

app.use('/api/simulation', require('./router/simulation_router'));



app.listen(process.env.PORT, () => {
	console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});


// segundos(0-59) opcional
// minutos(0-59)
// horas(0-23)
// día del mes(0-31)
// mes(0-12 o nombres)
// día de la semana (0-7, 7 es Domingo, o nombres)


// cron.schedule('0 0 * * 7', () => {
// 	console.log('Se ejecuta una vez todos los domingos');
// });