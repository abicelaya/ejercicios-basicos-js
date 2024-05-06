// Promesa amb reject: Crea una promesa que es resolgui després de 2 segons si
// l'input és igual a 'Hola', i que la rebutgi si l'input és qualsevol altra cosa.

let miPromesa = (input) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (input == "Hola") {
        resolve("La operación fue exitosa");
      } else {
        reject("La operación ha fallado");
      }
    }, 2000);
  });
};

miPromesa("Chau")
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => {
    console.error(error);
  });
