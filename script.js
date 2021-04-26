// Arrays
// nombreArray = []

const vacio = [];
const frutas = ["manzana", "platano", "pera", "mango"];
const edades = [1, 2, 3, 4, 5, 10, 8];
const booleanos = [true, true, false, true];

// "manzana" == frutas[0]

// Acceder a los valores de un array
// array[posicionElemento]

//console.log(frutas[2])


// Array tienen la propiedad length (Inicia en uno) (Longitud del arreglo)

console.log(vacio.length)

const ultimoElemento = frutas[frutas.length]
console.log(ultimoElemento)


//Añadir elemento nuevo al arreglo: push (Al final de la lista)
//arreglo.push(elementoNuevo)

frutas.push("naranja", "fresa");
console.log(frutas);