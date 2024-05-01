//Operador ternari bàsic: Escriu una funció potConduir que accepti 
//l'edat com a paràmetre i utilitzi l'operador ternari per determinar 
//si l'usuari pot conduir. Si l'edat és 18 o més, ha de retornar 'Pots conduir'. 
//Si no, ha de retornar 'No pots conduir'.

function puedesConducir(edad) {
   return edad >= 18 ? "Puedes conducir" : "No puedes conducir"
}

console.log(puedesConducir(20))