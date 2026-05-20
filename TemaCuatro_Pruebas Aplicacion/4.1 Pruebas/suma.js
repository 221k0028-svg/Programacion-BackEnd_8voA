
// =========================
// SECCIÓN 1.- Iniciar con Jest
// =========================

function suma(a, b) {
    return a + b;
}


// =========================
// SECCIÓN 2.- Comparadores (Matchers)
// INCISO A - toBe
// Igualdad exacta
// =========================

// Se reutiliza la función suma()

// =========================
// INCISO B - toEqual
// Comparacion de objetos
// =========================

function obtenerObjeto() {
    return {
        nombre: "Carlos",
        edad: 20
    };
}


// =========================
// INCISO C - Null y Undefined
// =========================

function esNull() {
    return null;
}

function esUndefined() {
    return undefined;
}


// =========================
// INCISO D - Comparaciones numericas
// =========================

function obtenerNumero() {
    return 10;
}


// =========================
// INCISO E - toMatch
// =========================

function obtenerTexto() {
    return "Hola Jest";
}


// =========================
// INCISO F - toContain
// =========================

function obtenerArray() {
    return ["manzana", "pera", "uva"];
}

// =========================
// INCISO G - Negacion de Matchers
// =========================

// Se reutiliza la funcion obtenerNumero()


// =========================
// INCISO H - Promesas
// =========================

function promesaCorrecta() {
    return Promise.resolve("Promesa resuelta");
}

function promesaIncorrecta() {
    return Promise.reject("Promesa rechazada");
}


// =========================
// EXPORTACION DE FUNCIONES
// =========================

module.exports = {
    suma,
    obtenerObjeto,
    esNull,
    esUndefined,
    obtenerNumero,
    obtenerTexto,
    obtenerArray,
    promesaCorrecta,
    promesaIncorrecta
};