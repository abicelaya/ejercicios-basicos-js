// for-in: Teniu un objecte amb parells clau-valor: let obj = { nom: Ona, edat: 25, ciutat: 'Barcelona' };
// Utilitza un bucle for-in per a imprimir a la consola cada clau i el seu valor corresponent.

let objeto = { nombre: "Ona", edad: 25, ciudad: "Barcelona" };

for (let propiedad in objeto) {
  console.log(`${propiedad}: ${objeto[propiedad]}`);
}
