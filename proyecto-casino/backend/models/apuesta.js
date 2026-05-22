const mongoose = require('mongoose');

const apuestaSchema = new mongoose.Schema({
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  },
  juego: {
    type: String,
    required: true,
    enum: ['ruleta', 'blackjack', 'slots', 'crash', 'dados', 'baccarat', 'poker', 'deportes']
  },
  monto: {
    type: Number,
    required: true,
    min: 1
  },
  resultado: {
    type: String,
    enum: ['ganó', 'perdió', 'pendiente'],
    required: true
  },
  ganancia: {
    type: Number,
    default: 0
  },
  descripcion: {
    type: String,
    default: ''
  },
  saldoAntes: {
    type: Number,
    required: true
  },
  saldoDespues: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Apuesta', apuestaSchema);