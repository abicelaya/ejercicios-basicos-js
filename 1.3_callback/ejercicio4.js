// Callbacks amb arrays: Escriu una funció processarElements que accepti dos
// paràmetres: un array i una funció de callback. La funció processarElements
// ha d'invocar la funció de callback per cada element de l'array.

function processarElements(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

function callback(elemento) {
  console.log(`El elemento ${elemento} se ha procesado`);
}

let arrayNumeros = [3, 6, 7, 8];

processarElements(arrayNumeros, callback);
