// Operador Rest en Funcions: Crea una funció 'suma' que utilitzi
// l'operador rest per a acceptar un nombre indeterminat d'arguments i retornar la seva suma.

function suma(...numeros) {
  let resultadoSuma = 0;
  for (let i = 0; i < numeros.length; i++) {
    resultadoSuma += numeros[i];
  }
  return resultadoSuma;
}

console.log(suma(1, 2, 3, 4));
