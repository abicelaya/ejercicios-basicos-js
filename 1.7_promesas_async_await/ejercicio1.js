// Creació d'una Promesa: Crea una promesa que es resolgui
// després de 2 segons i que retorni la cadena de text 'Hola, món'.

let miPromesa = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Hola mundo");
  }, 2000);
});
