const express = require('express');
const router = express.Router();

const {
  registrar,
  login,
  getPerfil,
  actualizarPerfil,
  cambiarPassword,
  reclamarBono,
  solicitarRetiro
} = require('../controllers/usuario.controller');

const { protect } = require('../middleware/auth');

// Auth
router.post('/registro', registrar);
router.post('/login', login);

// Perfil
router.get('/perfil', protect, getPerfil);
router.put('/perfil', protect, actualizarPerfil);
router.put('/password', protect, cambiarPassword);

// Bonos
router.post('/bono', protect, reclamarBono);

// Retiro
router.post('/retiro', protect, solicitarRetiro);

module.exports = router;