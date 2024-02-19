let inputNombre = document.querySelector("input#input-nombre");
let inputApellido = document.querySelector("input#input-apellido");
let boton = document.querySelector("#boton-agregar")
let listaUsuarios = document.querySelector("#lista-usuarios")
//Adicionando os botoes e o espaco de armazenamento da resposta

boton.addEventListener("click", () => {
    console.log(inputNombre.value);
    console.log(inputApellido.value);
   if (inputNombre.value.length > 0 && inputApellido.value.length > 0 ){
    listaUsuarios.innerHTML += `<li class='animate__animated animate__zoomInDown list-group-item'> ${inputNombre.value} ${inputApellido.value}</li>`;
    inputApellido.value = "";   //Este input foi criado para que apos aparecer o nome na lista
    inputNombre.value = "";     //Nao seja permitido que spame o mesmo nome na lista varias vezes
} else {
    alert ("no se puede anadir")
   }
})