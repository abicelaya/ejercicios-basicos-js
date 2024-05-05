// Map: Teniu un array de números [1, 2, 3, 4]. Crea una nova
// array que contingui el quadrat de cada número.

let arrayNumeros = [1, 2, 3, 4];

function alCuadrado(array) {
  let numerosAlCuadrado = array.map((numero) => 2 ** numero);
  return numerosAlCuadrado;
}

console.log(alCuadrado(arrayNumeros));
