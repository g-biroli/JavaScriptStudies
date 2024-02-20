let inputNombre = document.querySelector("input#input-nombre"); //Adicionando os campos de preenchimento e o querySelector para achar os dados.
let inputApellido = document.querySelector("input#input-apellido");
let boton = document.querySelector("#boton-agregar")
let listaUsuarios = document.querySelector("#lista-usuarios")
let listaUsuariosDatos = [];     //Criacao da array para armazenar os dados. Em JS uma array é sempre uma arrayList

boton.addEventListener("click", () => {
    console.log(inputNombre.value);
    console.log(inputApellido.value);

    //Colocando dados dentro da arrayList criada
    //lembrando que oq é criado aqui, fica no banco de dados (ARRAY), nao é visto no html do code
    listaUsuariosDatos.push("usuario1" , "usuario2" , "usuario3");
    listaUsuariosDatos.unshift("JOSE");

    //Eliminar itens
    listaUsuariosDatos.pop();
    listaUsuariosDatos.shift();

    //Buscas
    //Busca de 1 elemento na array
    let usuarioBuscado = listaUsuariosDatos.find((item)=> {
        return item == "Maria";
    })

    if (usuarioBuscado!= null){
        console.log(usuarioBuscado);
    } else {
        console.log("El usuario no esta en la lista");
    }



   if (inputNombre.value.length > 0 && inputApellido.value.length > 0 ){
    listaUsuarios.innerHTML += `<li class='animate__animated animate__zoomInDown list-group-item'> ${inputNombre.value} ${inputApellido.value}</li>`;
    inputApellido.value = "";   //Este input foi criado para que apos aparecer o nome na lista
    inputNombre.value = "";     //Nao seja permitido que spame o mesmo nome na lista varias vezes
} else {
    alert ("no se puede anadir")
   }
})