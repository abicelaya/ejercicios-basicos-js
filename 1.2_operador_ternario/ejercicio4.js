//Operador ternari dins un bucle: Escriu una funció parOImpar que
//accepti un array de números i utilitzi un bucle per a recórrer l'array.
//Dins del bucle, utilitza l'operador ternari per a determinar si cada número és parell o imparell.

function parOimpar(array) {
  numerosPar = [];
  numerosImpar = [];

  for (let i = 0; i < array.length; i++) {
    array[i] % 2 == 0 ? numerosPar.push(array[i]) : numerosImpar.push(array[i]);
  }
  console.log(`Los numeros pares del array son ${numerosPar}`);
  console.log(`Los numeros impares del array son ${numerosImpar}`);
}

let numerosParImpar = [2, 3, 6, 8, 13, 25];

parOimpar(numerosParImpar);
