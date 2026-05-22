const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true, trim: true },
  email:  { type: String, required: true, unique: true, trim: true, lowercase: true },
  password: { type: String, required: true },
  saldo: { type: Number, default: 1000 },
  rol: { type: String, enum: ['usuario', 'admin'], default: 'usuario' },
  ciudad: { type: String, default: '' },
  pais:   { type: String, default: 'CO' },
  moneda: { type: String, default: 'USD' },
  formatoCuotas: {
    type: String,
    enum: ['decimal', 'fraccional', 'americano'],
    default: 'decimal'
  },
  bonosReclamados: { type: [String], default: [] }
}, { timestamps: true });

module.exports = mongoose.model('Usuario', usuarioSchema);