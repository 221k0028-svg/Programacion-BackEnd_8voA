import express from 'express';
import dotenv from 'dotenv';
import { MongoClient, ObjectId } from 'mongodb'; 

dotenv.config();

const app = express();
const puerto = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const uri = process.env.URI;
const client = new MongoClient(uri);
let db;

async function connectDB() {
  try {
    await client.connect();
  
    db = client.db('test'); 
    console.log("Conexión exitosa de la base de datos (MongoClient)");

    app.listen(puerto, () => {
      console.log(`Servidor ejecutandose en http://localhost:${puerto}`);
    });
  } catch (error) {
    console.error("Error al conectar la base de datos:", error);
  }
}

connectDB();

// --- RUTAS DE LA API (CRUD SIN ORM) ---

// 1. OBTENER TODOS (GET)
app.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await db.collection('usuarios').find().toArray();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
});

// 2. CREAR USUARIO (POST)
app.post('/usuarios', async (req, res) => {
  try {
    const resultado = await db.collection('usuarios').insertOne(req.body);
    res.status(201).json({ 
      mensaje: 'Usuario creado exitosamente', 
      id: resultado.insertedId 
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el usuario' });
  }
});

// 3. OBTENER UNO POR ID (GET)
app.get('/usuario/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await db.collection('usuarios').findOne({ _id: new ObjectId(id) });
    
    if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el usuario' });
  }
});

// 4. ACTUALIZAR (PUT)
app.put('/usuario/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const resultado = await db.collection('usuarios').updateOne(
      { _id: new ObjectId(id) },
      { $set: req.body }
    );

    if (resultado.matchedCount === 0) return res.status(404).json({ error: 'No se encontró el usuario' });
    res.status(200).json({ mensaje: 'Usuario actualizado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el usuario' });
  }
});

// 5. ELIMINAR (DELETE)
app.delete('/usuario/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const resultado = await db.collection('usuarios').deleteOne({ _id: new ObjectId(id) });

    if (resultado.deletedCount === 0) return res.status(404).json({ error: 'No se encontró el usuario' });
    res.status(200).json({ mensaje: 'Usuario eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el usuario' });
  }
});