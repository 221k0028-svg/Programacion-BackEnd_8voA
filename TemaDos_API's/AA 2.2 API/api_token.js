import axios from "axios";

/**
 * SECCIÓN 5: AUTENTICACIÓN MEDIANTE TOKENS (JWT)
 * Este script demuestra el flujo completo de autenticación:
 * 1. Login (POST) para obtener el Token.
 * 2. Acceso a ruta protegida (GET) usando Bearer Token.
 * 3. Prueba de seguridad con Token inválido.
 */

const demostrarFlujoTokens = async () => {
    try {
        console.log("--- 1. PETICIÓN POST: Iniciando Sesión ---");
        // Enviamos credenciales a la API de DummyJSON
        const login = await axios.post("https://dummyjson.com/auth/login", {
            username: "emilys",
            password: "emilyspass"
        });

        const miToken = login.data.accessToken;
        console.log("Token recibido con éxito:", miToken.substring(0, 30) + "...");

        console.log("\n--- 2. ACCESO A DATOS PROTEGIDOS (Bearer Token) ---");
        // Usamos el token en los encabezados (Headers) para identificarnos
        const respuestaPrivada = await axios.get("https://dummyjson.com/auth/me", {
            headers: {
                'Authorization': `Bearer ${miToken}`
            }
        });

        console.log(`¡Bienvenido de nuevo, ${respuestaPrivada.data.firstName}!`);
        console.log("Acceso concedido al recurso protegido.");

        console.log("\n--- 3. PRUEBA DE SEGURIDAD: Token Inválido ---");
        // Intentamos acceder con una llave falsa para probar la seguridad del servidor
        await axios.get("https://dummyjson.com/auth/me", {
            headers: {
                'Authorization': 'Bearer TOKEN_FALSO_12345'
            }
        });

    } catch (error) {
        // Manejo de errores para la prueba del token inválido
        if (error.response && error.response.status === 401) {
            console.log("Resultado esperado: Acceso Denegado (401 Unauthorized)");
            console.log("Mensaje del servidor:", error.response.data.message);
        } else {
            console.error("Error inesperado:", error.message);
        }
    }
};

demostrarFlujoTokens();