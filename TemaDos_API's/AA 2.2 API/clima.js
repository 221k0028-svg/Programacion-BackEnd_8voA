import axios from "axios";

const obtenerClima = async () => {
    try {
        const apiKey = "d8793c5c85a95926a508376649e39a86";

        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=Merida&appid=${apiKey}&units=metric`
        );

        console.log("Datos completos:", response.data);
        console.log("Temperatura:", response.data.main.temp);
        console.log("Clima:", response.data.weather[0].description);

    } catch (error) {
        console.error("Error:", error.response.data);
    }
};

obtenerClima();