const fs = require('fs'); // Importa la herramienta de sistema de archivos

// 1. Crear el archivo
fs.writeFile('archivo.txt', 'Hola desde NodeJS', (err) => {
  if (err) throw err;
  console.log('El archivo ha sido creado con éxito.');

  // DESAFÍO 1: Leer el archivo justo después de crearlo
  // Ponemos esto AQUÍ ADENTRO para asegurar que ya se creó el archivo
  fs.readFile('archivo.txt', 'utf8', (err, data) => {
    if (err) throw err;
    // 'data' contiene el texto del archivo
    console.log('El contenido del archivo leído es:', data); 
  });
  
});