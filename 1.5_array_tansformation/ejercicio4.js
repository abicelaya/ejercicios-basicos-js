// Reduce: Teniu una array de números [13, 7, 8, 21]. Fes
// servir la funció reduce per a calcular la suma total dels números.

let arrayNumeros = [13, 7, 8, 21];

function calcularTotal(array) {
  let resultado = array.reduce((acumulador, numero) => acumulador + numero);
  return resultado;
}

console.log(calcularTotal(arrayNumeros));
