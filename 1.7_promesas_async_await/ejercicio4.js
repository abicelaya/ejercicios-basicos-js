// Ús de async/await: Escriu una funció asíncrona que utilitzi la funció await per
// a esperar el resultat de la promesa creada a l'exercici 1, i que després imprimeixi
// aquest resultat a la consola.

function miPromesa() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hola mundo");
    }, 2000);
  });
}

async function asyncCall() {
  let resultado = await miPromesa();
  console.log(resultado);
}

asyncCall();
