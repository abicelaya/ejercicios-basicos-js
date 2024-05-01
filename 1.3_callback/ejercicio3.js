// Ús de callbacks en funcions asíncrones: Escriu una funció esperarISaludar que accepti dos
// paràmetres: un nom i una funció de callback. La funció ha d'esperar 2 segons i llavors
// invocar la funció de callback, passant el nom com a paràmetre.

async function esperarYsaludar(nombre, callback) {
  setTimeout(() => {
    callback(nombre);
  }, 2000);
}

function callback(nombre) {
  console.log("Hola " + nombre);
}

esperarYsaludar("Abril", callback);
