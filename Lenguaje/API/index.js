// JSON -> javascript object notation
// {} -> es un objeto
// [] -> es un array
// [{}, {}, {}] -> es un array de objetos

let lista = document.querySelector("#lista")

let objeto = {
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
// metodo para litar na pagina web os dados da array (atividade evaluable)
usuarios.forEach ((item) => {
    lista.innerHTML += `<li>${item.nombre} ${item.apellido}</li>`;
})
 
/* usuarios.forEach((item) =>{
    console.log(item.nombre)
    item.conocimientos.forEach((item) => {
        console.log(item);
    })
})

console.log(objeto.nombre);  //ForEach para pegar todos os dados da arraylist e escrever no console separado
objeto.conocimientos.forEach((item) =>{
    console.log(item);
}) */
