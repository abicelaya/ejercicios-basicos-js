// Copiant objectes amb Spread: Crea un objecte 'objecte1'. Després crea un segon
// objecte, 'objecte2', que sigui una còpia de 'objecte1' utilitzant l'operador spread.
// Canvia una propietat de 'objecte2' i comprova que 'objecte1' no ha canviat.

let objeto1 = { nombre: "pepe", edad: 30 };
let objeto2 = { ...objeto1, nombre: "antonio" };

console.log(objeto1, objeto2);
