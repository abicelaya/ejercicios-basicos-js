//Funció de fletxa dins d'un loop: Crea una funció anomenada printNumbers 
//que accepti un array de números i utilitzi un loop for per imprimir cada 
//número a la consola utilitzant una funció de fletxa.

let arrayNumeros = [0, 1, 2, 3, 4, 5, 6]

const print = (number) => console.log(number)

const printNumbers = (array) => {
    for (let i = 0; i < array.length; i++) {
        print(array[i])
    }
}

printNumbers(arrayNumeros)
