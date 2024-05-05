// Spread en Funcions: Crea una funció que accepti tres arguments. Després,
// crea una array amb tres elements i crida la funció utilitzant l'operador spread amb aquesta array.

function miFuncion(a, b, c) {
  console.log(a, b, c);
}

let miArray = [1, 2, 3];

miFuncion(...miArray);
