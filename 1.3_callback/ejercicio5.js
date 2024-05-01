// Escriu una funció processarCadena que accepti dos
// paràmetres: una cadena de caràcters i una funció de callback. La funció
// processarCadena ha de convertir la cadena a majúscules i llavors invocar
// la funció de callback amb la cadena transformada.

function processarCadena(string, callback) {
  let stringEnMayusculas = string.toUpperCase();
  callback(stringEnMayusculas);
}

function callback(string) {
  console.log(`El string "${string}" lo convertimos en mayusculas`);
}

let stringMinusculas = "hola abril";

processarCadena(stringMinusculas, callback);
