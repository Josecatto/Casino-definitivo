const express = require('express');
const router = express.Router();
const { crearApuesta, getHistorial } = require('../controllers/apuesta.controller');
const { protect } = require('../middleware/auth');

router.post('/', protect, crearApuesta);
router.get('/historial', protect, getHistorial);

module.exports = router;