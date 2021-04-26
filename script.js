// Arrays
// nombreArray = []

const vacio = [];
const frutas = ["manzana", "Naranja", "platano", "pera", "mango"];
const edades = [1, 2, 3, 4, 5, 10, 8];
const booleanos = [true, true, false, true];

// "manzana" == frutas[0]

// Acceder a los valores de un array
// array[posicionElemento]

//console.log(frutas[2])


// Array tienen la propiedad length (Inicia en 1) (Longitud del arreglo)
// array.length == longitud escrita en número

console.log(vacio.length)

const ultimoElemento = frutas[frutas.length]
console.log(ultimoElemento)

// Añadir elemento nuevo al arreglo: push (Al final de la lista)
// arreglo.push(elementoNuevo)

frutas.push("Fresa", "Naranja", "Melón")
edades.push(36)
console.log(frutas)
console.log(edades)


// Eliminar ultimo elemento del Array: pop
// arreglo.pop()

const ultimaFruta = frutas.pop();
// const ultimoDeVacio = vacio.pop(); Arroja undefined porque no puede eliminar algo de un array vacio
console.log('Ultima Fruta', ultimaFruta);
console.log('Arreglo Frutas', frutas);

// Agregar elemento al inicio de un Array: unshift
// arreglo.unshift(elementoNuevo)

// frutas.unshift("Coco")
frutas.unshift("Coco", "Uvas", "Moras")
console.log("Frutas unshift", frutas);

// Eliminar el primer elemento de un Array: shift
// arreglo.shift()

const primerFruta = frutas.shift()
console.log('Primer fruta', primerFruta)
console.log("Frutas shift", frutas);

// Obtener la posición de un elemento especificado o en concreto: indexOf
const elementoPosicion = frutas.indexOf("Naranja");
console.log('indexOf', elementoPosicion);