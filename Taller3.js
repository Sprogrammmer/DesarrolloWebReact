/*
    Escribe una función llamada mayorArray() que reciba un array de
    números enteros como parámetro y retorne el número mayor del array.

    Dentro de la función, debes utilizar los siguientes ciclos:

    - Un ciclo for para recorrer el array y comparar y encontrar el número
    mayor en el array.

    - Un ciclo while para imprimir cada elemento del array.

    - Un ciclo do-while para contar la cantidad de números impares que tiene el array.

    La función debe cumplir con los siguientes requisitos:
    Debe recibir un array como parámetro y retornar un número entero.
    Si el array está vacío, la función debe retornar el valor null.
    Si el array tiene un solo elemento, la función debe retornar ese elemento.
*/

function mayorArray(arr){
    if(arr.length == 0){
        return null
    }else if(arr.length == 1){
        return arr[0]
    }else{
        let mayor = arr[0]
        let numerosImpares = 0
        //Ciclo for
        for(i = 1; i < arr.length; i++){
            if(arr[i] > mayor){
                mayor = arr[i]
            }
        }

        //Ciclo while
        console.log("Elementos del array:")
        i = 0
        while(i < arr.length){
            console.log(arr[i])
            i++
        }

        //Ciclo Do While
        console.log("\n")
        i = 0
        let contadorImpares = 0
        do {
            if (numerosEnteros[i] % 2 !== 0) {
              contadorImpares++;
            }
            i++;
        } while (i < numerosEnteros.length)
        console.log(`La cantidad de número impares en el array es: ${contadorImpares}\n`)
        return mayor
    }
}

//Con estas tres líneas se hacen los tres casos de prueba

let numerosEnteros = [14, 28, 9, 33, 7, 19, 42, 3, 11, 36, 25, 48, 5, 31, 17]
//let numerosEnteros = []
//let numerosEnteros = [34]

//////////////////////////////////////////////////7
let retorno = mayorArray(numerosEnteros)

if(numerosEnteros.length == 0 ){
    console.log(retorno)
}else if(numerosEnteros.length == 1){
    console.log(retorno)
}else{
    console.log(`El número mayor dentro del array es: ${retorno}`)
}
