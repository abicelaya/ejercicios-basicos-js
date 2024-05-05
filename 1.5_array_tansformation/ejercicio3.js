// Find: Teniu una array de números [1, 10 , 8, 11]. Utilitza
// la funció find per a trobar el primer número que és major a 10.

let arrayNumeros = [1, 10, 8, 11];

function mayorQueDiez(array) {
  let encontrar = array.find((numero) => numero > 10);
  return encontrar;
}

console.log(mayorQueDiez(arrayNumeros));
