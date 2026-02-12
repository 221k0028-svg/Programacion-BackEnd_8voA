// =============================================================================
// EJERCICIOS 1.2.1: SINTAXIS BÁSICA DE NODE.JS
// ALUMNO: Carlos Alberto Tec Mex - Ing. en Sistemas Computacionales
// =============================================================================

// -----------------------------------------------------------------------------
// EJERCICIO A: Integración de información en comentarios
// -----------------------------------------------------------------------------
/* 
   Se resuelven los incisos del 'b' al 'k' siguiendo
   la estructura de un solo archivo ejecutable en Node.js.
*/

console.log(">>> INICIANDO PRÁCTICA DE CARLOS <<<");

// -----------------------------------------------------------------------------
// EJERCICIO I: Módulo de funciones aritméticas (Simulación de archivo externo)
// -----------------------------------------------------------------------------
const miModuloCalculo = {
    sumar: (a, b) => a + b,
    restar: (a, b) => a - b,
    multiplicar: (a, b) => a * b,
    dividir: (a, b) => (b === 0 ? "Error: Div por 0" : a / b)
};

// -----------------------------------------------------------------------------
// EJERCICIO B: Diferentes tipos de datos
// -----------------------------------------------------------------------------
console.log("\n--- B. Valores de Variables (The GOAT) ---");

let jugadorFavorito = "Lionel Messi"; // String
let balonesOro = 8;                   // Number (Integer)
let estatura = 1.70;                  // Number (Float) <- Agrega este
let esElGoat = true;                  // Boolean
let mundialAntesDe2022 = null;        // Null
let proximoRetiro;                    // Undefined

console.log(`Nombre: ${jugadorFavorito}, Balones: ${balonesOro}, Altura: ${estatura}m, ¿Es el mejor?: ${esElGoat}`);
console.log("Tipo de nulo:", typeof mundialAntesDe2022);


// -----------------------------------------------------------------------------
// EJERCICIO C: Array con 5 elementos de diferentes tipos
// -----------------------------------------------------------------------------
console.log("\n--- C. Array con 5 tipos ---");

const miArrayMessi = [
    "Inter Miami",              // Elemento 1: String
    10,                         // Elemento 2: Number (Dorsal)
    true,                       // Elemento 3: Boolean (¿Es campeón del mundo?)
    { ciudad: "Rosario" },      // Elemento 4: Object (Lugar de nacimiento)
    ["Barça", "PSG", "Miami"]   // Elemento 5: Array (Lista de sus clubes)
];

console.log("Contenido del array:", miArrayMessi);


// -----------------------------------------------------------------------------
// EJERCICIO D: Función polinómica de segundo grado (3x^2 + 2y + 10)
// -----------------------------------------------------------------------------
console.log("\n--- D. Función Polinómica ---");

function calcularImpactoGOAT(x, y) {
    // Calculamos la puntuación de leyenda de Messi
    let resultado = (3 * x * x) + (2 * y) + 10;
    return resultado;
}

let resPolinomio = calcularImpactoGOAT(2, 1);
console.log(`Resultado del polinomio (2, 1): ${resPolinomio}`);


// -----------------------------------------------------------------------------
// EJERCICIO E: Función flecha y manipulación de cadenas
// -----------------------------------------------------------------------------
console.log("\n--- E. Función Flecha y Strings ---");

const manipularGoat = (texto) => {
    // .trim() quita los espacios de los lados y .toUpperCase() lo pasa a mayúsculas
    let procesado = texto.trim().toUpperCase();
    console.log(`Original: "${texto}" | Procesado: "${procesado}"`);
};

manipularGoat("   messi es el goat   ");


// -----------------------------------------------------------------------------
// EJERCICIO F: Bucle del 1 al 10 en orden descendente
// -----------------------------------------------------------------------------
console.log("\n--- F. Bucle Descendente (10 al 1) ---");

// Empezamos en 10, seguimos mientras i sea mayor o igual a 1, y restamos 1 en cada vuelta
for (let i = 10; i >= 1; i--) {
    console.log("Cuenta regresiva:", i);
}


// -----------------------------------------------------------------------------
// EJERCICIO G: Objeto Institución (ITSFCP)
// -----------------------------------------------------------------------------
console.log("\n--- G. Objeto Institución ---");

const institucion = {
    nombre: "Tecnológico Superior de Felipe Carrillo Puerto",
    carrera: "Ingeniería en Sistemas Computacionales",
    ubicacion: "Carrillo Puerto, Q. Roo",
    estudiantes: 900 
};

console.log("Datos de mi escuela:", institucion);


// -----------------------------------------------------------------------------
// EJERCICIO H: Agregar método al objeto e imprimir descripción
// -----------------------------------------------------------------------------
console.log("\n--- H. Método del Objeto ---");

// Le asignamos una función al objeto institucion
institucion.mostrarDescripcion = function() {
    // Usamos 'this' para acceder a las propiedades del mismo objeto
    return `Estudio ${this.carrera} en el ${this.nombre}, ubicado en ${this.ubicacion}.`;
};

// Llamamos al método e imprimimos el resultado
console.log(institucion.mostrarDescripcion());


// -----------------------------------------------------------------------------
// USO DEL EJERCICIO I: Utilizando el módulo definido arriba
// -----------------------------------------------------------------------------
console.log("\n--- I. Uso del Módulo Matemático ---");

// Usamos datos de goles de Messi para que sea único
let golesLiga = 20;
let golesCopa = 5;

let totalGoles = miModuloCalculo.sumar(golesLiga, golesCopa);

console.log(`Goles totales de Messi (Suma): ${totalGoles}`);
console.log(`Diferencia de goles (Resta): ${miModuloCalculo.restar(golesLiga, golesCopa)}`);

// -----------------------------------------------------------------------------
// EJERCICIO K: Conversión de Cadena a Número con manejo de errores (Try/Catch)
// -----------------------------------------------------------------------------
console.log("\n--- K. Manejo de Errores (Try/Catch) ---");

function convertirGoles(cadena) {
    try {
        console.log(`Intentando convertir el dato: "${cadena}"...`);
        let numero = Number(cadena);
        
        // Si no es un número, lanzamos un error manual
        if (isNaN(numero)) {
            throw new Error("El valor ingresado no es un número válido.");
        }
        
        console.log("Conversión exitosa. Goles: ", numero);
    } catch (error) {
        // Aquí atrapamos el error para que el programa no se detenga "feo"
        console.error("Error capturado:", error.message);
    }
}

// Probamos uno que sí funciona y uno que no
convertirGoles("850");
convertirGoles("OchoGoles");


// -----------------------------------------------------------------------------
// EJERCICIO J: Función asincrónica (setTimeout y Callback)
// -----------------------------------------------------------------------------
console.log("\n--- J. Asincronía (Esperando 2 segundos...) ---");

function obtenerDatosMessi(mensaje, callback) {
    setTimeout(() => {
        console.log("...Proceso de recuperación de datos finalizado.");
        callback(mensaje);
    }, 2000); 
}

// Esta es la última llamada de todo tu código
obtenerDatosMessi("¡Estadísticas de Messi cargadas correctamente!", (resultado) => {
    console.log("Respuesta del servidor:", resultado);
    console.log("\n=== FIN DEL PROGRAMA DE CARLOS ===");
});