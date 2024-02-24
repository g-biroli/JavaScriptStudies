let inputNombre = document.querySelector("input#input-nombre");
let inputApellido = document.querySelector("input#input-apellido");
let inputCorreo = document.querySelector("input#input-correo");
let boton = document.querySelector("#boton-agregar");
let listaTrabajadores = document.querySelector("#lista-trabajadores");
let listaTrabajadoresDatos = [];

boton.addEventListener("click", () => {

    if (inputNombre.value.length > 0 && inputApellido.value.length > 0 && inputCorreo.value.length > 0){
        listaTrabajadores.innerHTML += `<li class='animate__animated animate__zoomInDown list-group-item'> ${inputNombre.value} ${inputApellido.value}</li>`;
        inputApellido.value = "";   
        inputNombre.value = ""; 
        inputCorreo.value = ""; 
    
         
    } else {
        alert ("no se puede anadir")
    } 
    });

boton.addEventListener("click", () => {
    listaTrabajadoresDatos.push("usuario1", "usuario2", "usuario3", "usuario4");
    console.log(listaTrabajadoresDatos);

})