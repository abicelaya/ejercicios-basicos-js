// Filter: Teniu una array de números [1, 2, 3, 4]. Crea una
// nova array que només contingui els números parells.

let arrayNumeros = [1, 2, 3, 4];

function obtenerNumerosPares(array) {
  let encontrar = array.filter((numero) => numero % 2 == 0);
  return encontrar;
}

console.log(obtenerNumerosPares(arrayNumeros));
