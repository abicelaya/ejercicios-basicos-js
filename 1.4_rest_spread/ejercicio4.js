// Rest en Destructuring: Crea una array amb diversos elements. Utilitza
// destructuring i l'operador rest per a assignar els primers dos elements
// a variables, i després assignar la resta dels elements a una tercera variable.

let a, b, otros;

[a, b, ...otros] = [1, 2, 3, 4, 5];
console.log(a);
console.log(b);
console.log(otros);
