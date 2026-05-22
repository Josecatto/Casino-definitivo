const Apuesta = require('../models/apuesta');
const Usuario = require('../models/usuario');

const crearApuesta = async (req, res) => {
  const { juego, monto, resultado, ganancia, descripcion } = req.body;

  try {
    const usuario = await Usuario.findById(req.usuario._id);

    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    if (usuario.saldo < monto) {
      return res.status(400).json({ mensaje: 'Saldo insuficiente' });
    }

    const saldoAntes = usuario.saldo;

    // Las apuestas deportivas quedan pendientes — solo se descuenta el monto
    if (resultado === 'ganó') {
      usuario.saldo += ganancia;
    } else if (resultado === 'perdió' || resultado === 'pendiente') {
      usuario.saldo -= monto;
    }

    // Evitar saldo negativo por seguridad
    if (usuario.saldo < 0) usuario.saldo = 0;

    await usuario.save();

    const apuesta = await Apuesta.create({
      usuario: usuario._id,
      juego,
      monto,
      resultado,
      ganancia: ganancia || 0,
      descripcion: descripcion || '',
      saldoAntes,
      saldoDespues: usuario.saldo
    });

    res.status(201).json({
      apuesta,
      saldoActual: usuario.saldo
    });

  } catch (error) {
    console.error('Error crearApuesta:', error);
    res.status(500).json({ mensaje: 'Error al registrar apuesta' });
  }
};

const getHistorial = async (req, res) => {
  try {
    const apuestas = await Apuesta.find({ usuario: req.usuario._id })
      .sort({ createdAt: -1 })
      .limit(50); // máximo 50 para no sobrecargar
    res.json(apuestas);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener historial' });
  }
};

module.exports = { crearApuesta, getHistorial };