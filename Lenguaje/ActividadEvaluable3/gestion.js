let divProductos = document.querySelector("#productos")

fetch("productos.json").then((Response) => {
    Response.json().then(productos) => {
        console.log(productos);
    }
})