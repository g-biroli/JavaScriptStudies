console.log("Código ejecutado desde el fichero js externo");
console.log("Segunda línea del fichero js externo");

// NO TIPADO
// segun su posibilidad de cambio final -> constante
const DNI = "12456789A";
// segun su ambito de accion -> desde donde se pueden acceder
var nombre = "Borja";
if (true) {
  console.log(nombre);
  var edad = 40;
  let correo = "borja@correo.com";
}

let correo = "micorreo@gmail.com";
console.log(edad);
console.log(correo);

let numero = 6;
numero = 4.8;
console.log(typeof numero);

// segun el dato que guarda -> primarias / complejas


//variables:
// numeros -> int -> number (int, float, double, byte)
// palabras -> String -> string
// boolean -> boolean
// char -> string
// Array -> Array estáticos -> Object
// null -> null
// let nombre = null; null
// let nombre; undefined
// String nombre; // null
// nombre.length

// -> MODIFICANDO O PARAGRAFO DO DOCUMENTO INDEX
// -> para trazer um item do outro arquivo é necessario usar a funcao selector
// 1- Tener el nodo 2- obtengo un nodo que cumpla con el selector
let parrafo = document.querySelector("p"); //busca por TAG
parrafo.textContent = "Cambiando contenido del parrafo mediante JS";
// Si quiero encontrar uno elemento tiene mas sentido por ID, por que ID es unico
let parrafoDos = document.querySelector("#parrafo-dos");
parrafoDos.textContent = "Este cambio va a verse en el parrafo dos";
let parrafoTres = document.querySelector(".parrafos");
parrafoTres.textContent = "Este cambio se muestra en el tres"

