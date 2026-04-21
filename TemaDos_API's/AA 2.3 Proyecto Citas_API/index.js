const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

// archivos estáticos
app.use(express.static("public"));


app.set("view engine", "ejs");

// ruta principal
app.get('/', async (req, res) => {
    try {
        const result = await axios.get('https://api.animechan.io/v1/quotes/random');

        const quote = result.data.data.content; 
        const character = result.data.data.character.name;

        res.render('index', {
            quote: quote,
            character: character,
        });

        console.log(result.data);

    } catch (error) {
        if (error.response) {
            console.log(error.response.data);
        } else {
            console.log('Error:', error.message);
        }

        // se muestra elmensaje en la página
        res.render('index', {
            quote: "No se pudo obtener la cita",
            character: "Intenta más tarde"
        });
    }
});

// se inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

