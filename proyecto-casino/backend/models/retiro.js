const mongoose = require('mongoose');

const retiroSchema = new mongoose.Schema({
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  },
  monto: {
    type: Number,
    required: true
  },
  punto: {
    type: String,
    required: true
  },
  direccion: {
    type: String,
    required: true
  },
  banco: {
    type: String,
    required: true
  },
  estado: {
    type: String,
    enum: ['pendiente', 'procesado', 'rechazado'],
    default: 'pendiente'
  }
}, { timestamps: true });

module.exports = mongoose.model('Retiro', retiroSchema);