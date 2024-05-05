// Donat un array "[ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]",
// crea una funció en una sola línia que faci el següent:

// - Filtra els nombres majors o iguals a 10.

// - Multiplica cada nombre filtrat per 2.

// - Calcula la suma dels nombres filtrats i multiplicats per 2.

// - La funció ha de retornar el resultat de la suma.

let arrayNumeros = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];

function unaLinea(array) {
  return array
    .filter((numero) => numero >= 10)
    .map((numero) => 2 * numero)
    .reduce((acumulador, numero) => acumulador + numero);
}
console.log(unaLinea(arrayNumeros));
