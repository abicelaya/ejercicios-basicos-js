//Callbacks amb operacions matemàtiques: Escriu una funció calculadora
//que accepti tres paràmetres: dos nombres i una funció de callback.
//La funció calculadora ha d'invocar la funció de callback amb els dos
//nombres com a paràmetres. Després, crida calculadora amb una funció que faci la suma dels dos nombres.

function calculadora(a, b, callback) {
  let result = a + b;
  callback(result);
}

function callback(result) {
  console.log("El resultado de la suma de los dos numeros es: " + result);
}

calculadora(2, 3, callback);
