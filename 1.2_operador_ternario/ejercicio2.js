//Ús amb operadors de comparació: Escriu una expressió que utilitzi 
//l'operador ternari per determinar quin dels dos nombres donats 
//(num1 i num2) és més gran. Si num1 és més gran, retorna 'num1 és més gran'. 
//Si no, retorna 'num2 és més gran'.

function numeroMayor(num1, num2) {
   return num1 > num2 ? "num1 es mas grande" : "num2 es mas grande"
}

console.log(numeroMayor(4, 8))