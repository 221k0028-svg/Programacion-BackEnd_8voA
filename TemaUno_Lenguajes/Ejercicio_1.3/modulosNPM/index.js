
// Importamos los dos paquetes en la parte de arriba
import generateName from 'sillyname';
import { randomSuperhero } from 'superheroes'; // <-- Importación del Desafío 2

// Lo que ya tenías de tu nombre loco
var sillyName = generateName();
console.log(`El nombre generado es: ${sillyName}`);

// DESAFÍO 2: Generar y mostrar el superhéroe
const miSuperheroe = randomSuperhero();
console.log(`¡Mi superhéroe aleatorio es: ${miSuperheroe}!`);