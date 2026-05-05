import express from 'express';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import Usuario from './models/usuario.model.js';

dotenv.config();

const app = express();
const puerto = 3000;

// Configuración de Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Conexión a la base de datos MongoDB
const uri = process.env.URI;


app.get('/', (req, res) => {
  res.send("API con MongoDB funcionando");
});

app.post('/usuarios', async (req, res) => {
    try {
        const usuario = await Usuario.create(req.body); 
        res.status(201).json(usuario);
    } catch (error) {
        console.error("Error al crear el usuario:", error);
        res.status(500).json({ error: 'Error al crear el usuario' });
    }
});

// Sección 5: Handler para obtener todos los usuarios
app.get('/usuarios', async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        
        res.status(200).json(usuarios);
    } catch (error) {
        console.error("Error al obtener los usuarios:", error);
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
});
app.get('/usuario/:id', async (req, res) => {
    try {
      const {id} = req.params; // Extrae el ID de los parámetros de la solicitud
      const usuario = await Usuario.findById(id); 
      res.status(200).json(usuario);

    } catch (error) {
        console.error("Error al obtener el usuario:", error);
        res.status(500).json({ error: 'Error al obtener el usuario' });
    }
});

// SECCIÓN 7: Actualizar un usuario
app.put('/usuario/:id', async (req, res) => {
    try {

      const { id } = req.params;
      const usuario = await Usuario.findByIdAndUpdate(id, req.body);
      if(!usuario) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
        }
      const usuarioActualizado = await Usuario.findById(id);
      res.status(200).json(usuarioActualizado);
      console.log(usuarioActualizado);
    } catch (error) {
      console.error("Error al actualizar el usuario:", error);
      res.status(500).json({ error: 'Error al actualizar el usuario' });
    }
});

// SECCIÓN 8: Borrar un usuario
app.delete('/usuario/:id', async (req, res) => {
    try {
      const { id } = req.params; // Extrae el parámetro id de la URL
      const usuario = await Usuario.findByIdAndDelete(id);
      if (!usuario) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
      res.status(200).json({ mensaje: 'Usuario eliminado correctamente', usuario });
    } catch (error) {
        // Impresión en caso de error
        console.error("Error al eliminar el usuario:", error);
        res.status(500).json({ error: 'Error al eliminar el usuario' });
    }
});

async function startServer() {
  try {
    await mongoose.connect(uri);
    console.log("Conexion exitosa a la base de datos");

    app.listen(puerto, () => {
      console.log(`Servidor en http://localhost:${puerto}`);
    });

  } catch (error) {
    console.log("Error al conectar:", error);
  }
}

startServer();