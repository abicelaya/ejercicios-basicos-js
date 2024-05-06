// Utilització d'una Promesa: Utilitza la promesa creada en l'exercici 
// anterior. Crea un .then que imprimeixi el resultat a la consola.

let miPromesa = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hola mundo");
    }, 2000);
  });
  
  miPromesa
    .then((resultado) => {
      console.log(resultado);
    })
