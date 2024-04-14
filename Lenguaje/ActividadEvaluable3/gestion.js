function cargar() {
    fetch('productos.json')
        .then(response => response.json())
        .then(productos => {
            const container = document.querySelector("#productos-container");

            productos.forEach(producto => {
                const card = document.createElement("div");
                card.classList.add("card");

                const img = document.createElement("img");
                img.src = producto.imagem;
                img.alt = producto.nombre;

                const titulo = document.createElement("h3");
                titulo.textContent = producto.nombre;

                card.appendChild(img);
                card.appendChild(titulo);
                container.appendChild(card);
            });
        });
}

    cargar();
