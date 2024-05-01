//Callback bàsic: Escriu una funció anomenada processar que 
//accepti dos paràmetres: un nombre i una funció de callback. 
//La funció processar ha d'invocar la funció de callback, passant el nombre com a paràmetre.

function processar(num, callback) {
    callback(num)
}

function callback(num) {
    console.log("El numero procesado es el " + num)
}

processar(7, callback);