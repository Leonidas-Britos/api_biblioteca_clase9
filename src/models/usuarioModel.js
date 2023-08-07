const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  nombre: String,
  correo: String,
  // Otras características de usuario
}, { collection: 'usuarios' });

const Usuario = mongoose.model('Usuario', UsuarioSchema);

module.exports = Usuario;
