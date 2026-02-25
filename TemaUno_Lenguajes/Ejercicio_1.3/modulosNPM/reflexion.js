/* REFLEXIÓN - EJERCICIO 1.3

   1. ¿Cuál es la diferencia fundamental entre un módulo nativo (como 'fs') 
      y un módulo de NPM (como 'sillyname') en cuanto a su origen e instalación?
      
      R= Los módulos nativos (como 'fs') ya vienen integrados e instalados por defecto 
      al instalar NodeJS en la computadora, y solo seria importarlos. En cambio, 
      los módulos de NPM (como 'sillyname') son creados por comunidades de desarrolladores 
      y se debe descargarlos e instalarlos usando el comando 'npm install' para que se guarden 
      en la carpeta node_modules.

   2. Investigando la sintaxis: ¿Qué diferencia existe entre 'require' (CommonJS) 
      y 'import' (ES Modules)? Considera el momento en que se cargan los módulos.
      
      R= La diferencia principal está en el momento de carga. 'require' es síncrono 
      y carga los módulos en "tiempo de ejecución" (se van cargando conforme el código 
      los va leyendo, y puedes usarlos en cualquier parte del archivo). Por otro lado, 
      'import' es asíncrono y se carga en "tiempo de análisis/parseo" (el motor de JS 
      evalúa todas las importaciones antes de empezar a ejecutar el código principal), 
      por eso los 'import' siempre deben ir hasta arriba del archivo.

   3. Sobre el archivo 'package.json':
      a) ¿Por qué es vital compartir este archivo pero NO la carpeta 'node_modules' 
         al subir a un repositorio?
         
      R= Porque la carpeta 'node_modules' es sumamente pesada (contiene miles de archivos 
      y carpetas de código de terceros), lo que haría que subir y descargar el repositorio 
      fuera lentísimo y poco eficiente. El archivo 'package.json' es ligero.

      b) ¿Qué sucede si ejecutas 'npm install' en una carpeta que solo tiene el package.json?
      
      R= Al ejecutar npm install, npm revisa el package.json para ver qué dependencias necesita el proyecto y las instala automáticamente. Aunque no exista la carpeta node_modules, npm la crea y deja el proyecto listo para usarse.
*/