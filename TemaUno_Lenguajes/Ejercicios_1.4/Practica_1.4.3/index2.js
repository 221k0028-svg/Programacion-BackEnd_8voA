import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// Middleware para leer datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta principal (muestra el HTML)
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

// Middleware SOLO para esta ruta
function registrador(req, res, next) {
    console.log("BODY:", req.body);

    const nombreEquipo = req.body.mascota + " " + req.body.adjetivo;

    // guardamos en req para usarlo después
    req.nombreEquipo = nombreEquipo;

    next();
}

// Ruta POST (procesa el formulario)
app.post("/submit", registrador, (req, res) => {
    res.send(`
        <h1>El nombre de tu equipo es:</h1>
        <h2>${req.nombreEquipo}</h2>
    `);
});

// Servidor
app.listen(port, () => {
    console.log(`Servidor ejecutandose en el puerto ${port}`);
});