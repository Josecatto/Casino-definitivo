const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const { errorHandler, notFound } = require('./middlewares/error.middleware');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/usuarios', require('./routes/usuario.routes'));
app.use('/api/apuestas', require('./routes/apuestas.routes'));

app.get('/', (req, res) => {
    res.json({ mensaje: 'API Casino Midnight Ingenium funcionando' });
});

// Manejo de errores — siempre al final
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});