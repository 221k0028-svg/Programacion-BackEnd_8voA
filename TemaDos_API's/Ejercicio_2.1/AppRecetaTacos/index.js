import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs'; // 👈 AGREGAR

// Crear servidor
const app = express();

// Puerto
const PORT = 3000;

// a) Leer JSON
const recetaJSON = fs.readFileSync("recetaTacos.json", "utf-8");

// b) Convertir a objeto
const recetasTacos = JSON.parse(recetaJSON);

// c) Archivos estáticos
app.use(express.static("public"));

// d) Middleware
app.use(bodyParser.json());

// e) Endpoint
app.get("/receta/:type", (req, res) => {
    const elegirTaco = recetasTacos.find(
        r => r.ingredientes.proteina.nombre.toLowerCase() === req.params.type.toLowerCase()
    );

    res.json(elegirTaco || { error: "Receta no encontrada" });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`¡Servidor funcionando en http://localhost:${PORT}!`);
});