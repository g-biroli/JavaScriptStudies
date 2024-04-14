let divProductos = document.querySelector("#productos")

fetch("productos.json").then((response) => {
    response.json().then((productos) => {
        console.log(productos);
    })
})