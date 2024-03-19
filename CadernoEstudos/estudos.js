// Exemplo de como usar ForEach em conjunto com array
let objeto = {
    nombre: "Gabriel",
    apellido: "Biroli",
    edad: 24,
    carnet: true,
    conocimientos: ["programacion", "3d", "sistemas", "gestion"],
};

//ForEach para pegar todos os dados da arraylist e escrever no console separado
console.log(objeto.nombre);  
objeto.conocimientos.forEach((item) =>{
    console.log(item);
})

// Exemplo de ForEach com outra arraylist

/* let objeto = {
    nombre: "Gabriel",
    apellido: "Biroli",
    edad: 24,
    carnet: true,
    conocimientos: ["programacion", "3d", "sistemas", "gestion"],
};

let usuarios = [
   {
    nombre: "Luigi",
    apellido: "Biroli",
    edad: 27,
    carnet: true,
    conocimientos: ["programacion", "front-end", "sistemas", "gestion"],
   },
   {
    nombre: "Davi",
    apellido: "Simioni",
    edad: 16,
    carnet: true,
    conocimientos: ["filosofia", "letras", "sistemas", "gestion"],
   },
   {
    nombre: "Justo",
    apellido: "Quiroga",
    edad: 35,
    carnet: true,
    conocimientos: ["cocinar", "musica", "matematica", "gestion"],
   },
]

usuarios.forEach((item) =>{
    console.log(item.nombre)
    item.conocimientos.forEach((item) => {
        console.log(item);
    })
})  */

// metodo para litar na pagina web os dados da array (atividade evaluable)
usuarios.forEach ((item) => {
    lista.innerHTML += `<li>${item.nombre} ${item.apellido}</li>`;
})