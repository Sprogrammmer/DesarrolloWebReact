/*
    Escribe una función en JavaScript llamada "calcularPrecio" que recibe
    dos parámetros: "precioBase" y "descuento". La función debe calcular
    el precio final de un producto aplicando el descuento sobre el precio base.

    La función debe cumplir los siguientes requisitos:

    - Si el precio base es menor o igual a 0 o el descuento es menor a 0 o
    mayor a 100, la función debe retornar el mensaje "Los valores ingresados son inválidos".

    - Si el descuento es igual a 0, la función debe retornar el precio base sin descuento.

    - Si el descuento es mayor a 0 y menor o igual a 100, la función debe calcular
    el precio final con descuento y retornarlo con el siguiente mensaje: "El
    precio final con descuento es $X".
*/

function calcularPrecio(precioBase, descuento){
    let precioFinal = 0

    if(precioBase <= 0 || descuento < 0 || descuento > 100){
        return "Los valores ingresados no son válidos."

    }else if(descuento === 0){
        return precioBase

    }else{
        precioFinal = precioBase - (precioBase * descuento / 100)
        return `El precio final con descuento es $${precioFinal}`
    }
}

let precio = prompt("Ingrese el precio base: ")
let desc = prompt("Ingrese el descuento a aplicar: ")
console.log(calcularPrecio(precio, desc))

//console.log(calcularPrecio(50000, 30)) para probar por consola Node.js
