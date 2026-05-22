const jwt  = require('jsonwebtoken');
const Usuario = require('../models/usuario');

async function protect(req, res, next) {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.usuario = await Usuario.findById(decoded.id).select('-password');
            next();
        } catch (err) {
            next(err); // pasa al errorHandler
        }
    }

    if (!token) {
        return res.status(401).json({ ok: false, error: 'No autorizado, token requerido' });
    }
}

module.exports = { protect };