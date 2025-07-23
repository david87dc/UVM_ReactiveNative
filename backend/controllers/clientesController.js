const Cliente = require('../models/clientes');

// Obtener todos los clientes
exports.getAll = async (req, res) => {
  try {
    const clientes = await Cliente.findAll({ where: { is_deleted: false } });
    res.json(clientes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtener todos los clientes
exports.getById = async (req, res) => {
  try {
    const { id } = req.params;
    const cliente = await Cliente.findOne({ where: { id, is_deleted: false } });
    res.json(cliente);
  } catch (err) {
    console.error("Error al obtener Cliente por Id: ",err.message);
    res.status(500).json({ error: err.message });
  }
};

// Crear un cliente
exports.create = async (req, res) => {
  try {
    // Validar que el cliente no exista
    const existingCliente = await Cliente.findOne({
      where: { correo: req.body.correo, is_deleted: false }
    });
    if (existingCliente) {
      return res.status(400).json({ error: 'El cliente ya existe' });
    }
    //Indicar la fecha de creación y actualizacion al cliente que se registra
    req.body.create_time = new Date();
    req.body.update_time = new Date();

    const cliente = await Cliente.create(req.body);
    res.status(201).json(cliente);
  } catch (err) {
    console.error("Error al crear el cliente: ",err.message);
    res.status(500).json({ error: err.message });
  }
};

// Actualizar un cliente
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    await Cliente.update(req.body, { where: { id, is_deleted: false } });
    const updated = await Cliente.findByPk(id);
    res.json(updated);
  } catch (err) {
    console.error("Error al crear al actualizar el cliente: ",err.message);

    res.status(500).json({ error: err.message });
  }
};

// Eliminar (soft delete) un cliente
exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    await Cliente.update({ is_deleted: true }, { where: { id } });
    res.json({ message: 'Cliente eliminado' });
  } catch (err) {
    console.error("Error al eliminar el cliente: ",err.message);
    res.status(500).json({ error: err.message });
  }
};