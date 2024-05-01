//Ús enllaçat d'operadors ternaris: Escriu una expressió que utilitzi enllaços
//d'operadors ternaris per determinar si un número és positiu, negatiu o zero.

//Operador ternari amb funcions: Crea una funció trobarMaxim que accepti tres
//paràmetres (a, b, c) i utilitzi l'operador ternari per determinar el valor màxim.

function tipoNumero(a) {
  return a == 0
    ? console.loge("Numero zero")
    : a > 0
    ? console.log("El numero es positivo")
    : console.log("El numero es negativo");
}

function encontrarMaxim(a, b, c) {
  return a > b
    ? a > c
    ? console.log("El numero a es el mayor")
    : console.log("El numero c es el mayor")
    : b > c
    ? console.log("El numero mayor es el b")
    : console.log("El numero c es el mayor");
}


tipoNumero(-5);
encontrarMaxim(1, 30, 8);
