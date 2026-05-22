const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuario');

const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.usuario = await Usuario.findById(decoded.id).select('-password');
      next();
    } catch (error) {
      res.status(401).json({ mensaje: 'Token inválido' });
    }
  }

  if (!token) {
    res.status(401).json({ mensaje: 'No autorizado, no hay token' });
  }
};

module.exports = { protect };