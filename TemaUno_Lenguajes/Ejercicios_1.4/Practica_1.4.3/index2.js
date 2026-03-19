import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
/* import.meta.url proporciona la URL del modulo actual.
fileURLToPath(import.meta.url) convierte esa URL en una ruta de archivo.
dirname() recupera el nombre del directorio a partir de la ruta del archivo. */

const app = express();
var nombreEquipo = "";  
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));

function registrador(req, res, next) {
    console.log(req.body); // muestra los datos enviados por el usuario

    nombreEquipo = req.body["mascota"] + req.body["adjetivo"]; // concatena los datos

    next(); // pasa al siguiente middleware o ruta
}

app.use(registrador)

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
    res.send(`
        <h1>El nombre de tu equipo es:</h1>
        <h2>${nombreEquipo}</h2>
    `);
});

app.listen(port, () => {
    console.log(`Servidor ejecutandose en el puerto ${port}`);
});