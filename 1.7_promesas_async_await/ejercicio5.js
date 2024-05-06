// Gestió d'errors amb async/await: Modifica la funció de l'exercici 4 per
// a que capturi qualsevol possible error utilitzant un bloc try/catch.

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

try {
  asyncCall();
} catch (error) {
  console.error(error);
}
