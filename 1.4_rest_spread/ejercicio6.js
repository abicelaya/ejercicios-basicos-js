// Fusionant Objectes amb Spread: Crea dos objectes amb propietats diferents. Utilitza
// l'operador spread per a fusionar aquests dos objectes en un de nou.

let objeto1 = { name: "antonio", edad: 30 };
let objeto2 = { apellido: "garcia", nacionalidad: "argentina" };

let objeto3 = { ...objeto1, ...objeto2 };

console.log(objeto3);
