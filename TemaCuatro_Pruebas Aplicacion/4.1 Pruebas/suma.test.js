// =========================
// IMPORTACION DE FUNCIONES
// =========================

const {
    suma,
    obtenerObjeto,
    esNull,
    esUndefined,
    obtenerNumero,
    obtenerTexto,
    obtenerArray,
    promesaCorrecta,
    promesaIncorrecta
} = require('./suma');


// =========================
// SECCIÓN 1.- Iniciar con Jest
// =========================

test('suma 1 + 2 es igual a 3', () => {
    expect(suma(1, 2)).toBe(3);
});


// =========================
// SECCIÓN 2.- Comparadores (Matchers)
// =========================


// =========================
// INCISO A - toBe
// Igualdad exacta
// =========================

test('10 + 10 es igual a 20', () => {
    expect(suma(10,10)).toBe(20);
});


// =========================
// INCISO B - toEqual
// =========================

test('los objetos son iguales', () => {

    const obj1 = obtenerObjeto();

    const obj2 = {
        nombre: "Carlos",
        edad: 20
    };

    expect(obj1).toEqual(obj2);
});


// =========================
// INCISO C
// =========================

test('valor null', () => {
    expect(esNull()).toBeNull();
});

test('valor undefined', () => {
    expect(esUndefined()).toBeUndefined();
});

test('valor definido', () => {
    expect(obtenerNumero()).toBeDefined();
});


// =========================
// INCISO D
// =========================

test('numero mayor que 5', () => {
    expect(obtenerNumero()).toBeGreaterThan(5);
});

test('numero menor que 20', () => {
    expect(obtenerNumero()).toBeLessThan(20);
});

test('numero mayor o igual que 10', () => {
    expect(obtenerNumero()).toBeGreaterThanOrEqual(10);
});


// =========================
// INCISO E
// =========================

test('cadena contiene Hola', () => {
    expect(obtenerTexto()).toMatch(/Hola/);
});


// =========================
// INCISO F
// =========================

test('array contiene pera', () => {
    expect(obtenerArray()).toContain('pera');
});


// =========================
// INCISO G
// =========================

test('10 no es igual a 5', () => {
    expect(obtenerNumero()).not.toBe(5);
});


// =========================
// INCISO H
// =========================

test('promesa resuelta correctamente', async () => {

    await expect(promesaCorrecta())
        .resolves.toBe('Promesa resuelta');

});

test('promesa rechazada correctamente', async () => {

    await expect(promesaIncorrecta())
        .rejects.toBe('Promesa rechazada');

});