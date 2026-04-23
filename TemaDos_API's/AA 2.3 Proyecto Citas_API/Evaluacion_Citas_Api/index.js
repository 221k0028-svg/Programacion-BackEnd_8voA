const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

// Configuración
app.use(express.static("public"));
app.set("view engine", "ejs");

// Ruta Principal
app.get('/', async (req, res) => {
    try {
        // Pedimos la imagen
        const response = await axios.get('https://api.thecatapi.com/v1/images/search?has_breeds=1');
        const data = response.data[0];

        // Verificamos si realmente trae información de raza
        if (data.breeds && data.breeds.length > 0) {
            const razaInfo = data.breeds[0];
            res.render('index', {
                imagen: data.url,
                nombre: razaInfo.name,
                temperamento: razaInfo.temperament,
                origen: razaInfo.origin
            });
        } else {
            // Si la API no mandó raza, mandamos datos "genéricos" pero bonitos
            res.render('index', {
                imagen: data.url,
                nombre: "Soy un Gatito Sorpresa",
                temperamento: "Juguetón, curioso y muy tierno",
                origen: "Soy otro gatito"
            });
        }

    } catch (error) {
        console.log('Error de conexcion con la API:', error.message);
        res.render('index', {
            imagen: "https://http.cat/404", 
            nombre: "Intenta en otro momento",
            temperamento: "Estamos teniendo problemas, intenta mas tarde.",
            origen: "Sorry"
        });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});