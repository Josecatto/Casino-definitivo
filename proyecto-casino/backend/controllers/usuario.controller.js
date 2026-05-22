const Usuario = require('../models/usuario');
const Retiro = require('../models/retiro');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const generarToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

const registrar = async (req, res) => {
  const { nombre, email, password } = req.body;

  try {
    if (!nombre || !email || !password) {
      return res.status(400).json({ mensaje: 'Todos los campos son obligatorios' });
    }

    const usuarioExiste = await Usuario.findOne({ email });

    if (usuarioExiste) {
      return res.status(400).json({ mensaje: 'El email ya está registrado' });
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const usuario = await Usuario.create({
      nombre,
      email,
      password: passwordHash
    });

    res.status(201).json({
      _id: usuario._id,
      nombre: usuario.nombre,
      email: usuario.email,
      saldo: usuario.saldo,
      token: generarToken(usuario._id)
    });

  } catch (error) {
    console.error('Error registrar:', error);
    res.status(500).json({ mensaje: 'Error al registrar usuario' });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ mensaje: 'Email y contraseña son obligatorios' });
    }

    const usuario = await Usuario.findOne({ email });

    if (!usuario) {
      return res.status(401).json({ mensaje: 'Email o contraseña incorrectos' });
    }

    const passwordValido = await bcrypt.compare(password, usuario.password);

    if (!passwordValido) {
      return res.status(401).json({ mensaje: 'Email o contraseña incorrectos' });
    }

    res.json({
      _id: usuario._id,
      nombre: usuario.nombre,
      email: usuario.email,
      saldo: usuario.saldo,
      ciudad: usuario.ciudad || '',
      pais: usuario.pais || 'CO',
      moneda: usuario.moneda || 'USD',
      formatoCuotas: usuario.formatoCuotas || 'decimal',
      bonosReclamados: usuario.bonosReclamados || [],
      token: generarToken(usuario._id)
    });

  } catch (error) {
    console.error('Error login:', error);
    res.status(500).json({ mensaje: 'Error al iniciar sesión' });
  }
};

const getPerfil = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.usuario._id).select('-password');

    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    res.json(usuario);

  } catch (error) {
    console.error('Error getPerfil:', error);
    res.status(500).json({ mensaje: 'Error al obtener perfil' });
  }
};

const actualizarPerfil = async (req, res) => {
  const { nombre, ciudad, pais, moneda, formatoCuotas } = req.body;

  try {
    const usuario = await Usuario.findById(req.usuario._id);

    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    if (nombre) usuario.nombre = nombre;
    if (ciudad) usuario.ciudad = ciudad;
    if (pais) usuario.pais = pais;
    if (moneda) usuario.moneda = moneda;
    if (formatoCuotas) usuario.formatoCuotas = formatoCuotas;

    await usuario.save();

    res.json({
      _id: usuario._id,
      nombre: usuario.nombre,
      email: usuario.email,
      saldo: usuario.saldo,
      ciudad: usuario.ciudad,
      pais: usuario.pais,
      moneda: usuario.moneda,
      formatoCuotas: usuario.formatoCuotas,
      bonosReclamados: usuario.bonosReclamados || []
    });

  } catch (error) {
    console.error('Error actualizarPerfil:', error);
    res.status(500).json({ mensaje: 'Error al actualizar perfil' });
  }
};

const cambiarPassword = async (req, res) => {
  const { passwordActual, passwordNueva } = req.body;

  try {
    if (!passwordActual || !passwordNueva) {
      return res.status(400).json({ mensaje: 'Ambas contraseñas son obligatorias' });
    }

    if (passwordNueva.length < 8) {
      return res.status(400).json({
        mensaje: 'La nueva contraseña debe tener al menos 8 caracteres'
      });
    }

    const usuario = await Usuario.findById(req.usuario._id);

    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    const passwordValido = await bcrypt.compare(
      passwordActual,
      usuario.password
    );

    if (!passwordValido) {
      return res.status(401).json({
        mensaje: 'La contraseña actual es incorrecta'
      });
    }

    const salt = await bcrypt.genSalt(10);

    usuario.password = await bcrypt.hash(passwordNueva, salt);

    await usuario.save();

    res.json({
      mensaje: 'Contraseña actualizada correctamente'
    });

  } catch (error) {
    console.error('Error cambiarPassword:', error);
    res.status(500).json({ mensaje: 'Error al cambiar contraseña' });
  }
};

const reclamarBono = async (req, res) => {
  const { bono } = req.body;

  const bonosValidos = {
    bienvenida: 500,
    cashback: 150,
    vip: 200
  };

  try {
    if (!bonosValidos[bono]) {
      return res.status(400).json({ mensaje: 'Bono no válido' });
    }

    const usuario = await Usuario.findById(req.usuario._id);

    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    if (!usuario.bonosReclamados) {
      usuario.bonosReclamados = [];
    }

    if (usuario.bonosReclamados.includes(bono)) {
      return res.status(400).json({
        mensaje: 'Este bono ya fue reclamado'
      });
    }

    usuario.saldo += bonosValidos[bono];
    usuario.bonosReclamados.push(bono);

    await usuario.save();

    res.json({
      mensaje: 'Bono acreditado correctamente',
      saldoActual: usuario.saldo,
      bonosReclamados: usuario.bonosReclamados
    });

  } catch (error) {
    console.error('Error reclamarBono:', error);
    res.status(500).json({ mensaje: 'Error al reclamar bono' });
  }
};

const solicitarRetiro = async (req, res) => {
  const { monto, punto, direccion, banco } = req.body;

  try {
    if (!monto || !punto || !direccion || !banco) {
      return res.status(400).json({
        mensaje: 'Todos los campos son obligatorios'
      });
    }

    if (monto <= 0) {
      return res.status(400).json({
        mensaje: 'El monto debe ser mayor a 0'
      });
    }

    const usuario = await Usuario.findById(req.usuario._id);

    if (!usuario) {
      return res.status(404).json({
        mensaje: 'Usuario no encontrado'
      });
    }

    if (usuario.saldo < monto) {
      return res.status(400).json({
        mensaje: 'Saldo insuficiente para el retiro'
      });
    }

    // Descontar saldo
    usuario.saldo -= monto;
    await usuario.save();

    // Guardar retiro
    const retiro = await Retiro.create({
      usuario: usuario._id,
      monto,
      punto,
      direccion,
      banco,
      estado: 'pendiente'
    });

    res.status(201).json({
      mensaje: 'Retiro solicitado correctamente',
      retiro,
      saldoActual: usuario.saldo
    });

  } catch (error) {
    console.error('Error solicitarRetiro:', error);
    res.status(500).json({
      mensaje: 'Error al procesar el retiro'
    });
  }
};

module.exports = {
  registrar,
  login,
  getPerfil,
  actualizarPerfil,
  cambiarPassword,
  reclamarBono,
  solicitarRetiro
};