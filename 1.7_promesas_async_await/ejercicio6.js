// Promise.all: Crea dues promeses que es resolguin després de 2 i 3 segons, respectivament.
// Utilitza Promise.all per a esperar que ambdues promeses es resolguin, i imprimeix els
// resultats a la consola.

let primeraPromesa = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Hola mundo");
  }, 2000);
});

let segundaiPromesa = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Chau mundo");
  }, 3000);
});

Promise.all([primeraPromesa, segundaiPromesa])
  .then((resultados) => {
    console.log(resultados);
  })
  .catch((error) => {
    console.error(error);
  });
