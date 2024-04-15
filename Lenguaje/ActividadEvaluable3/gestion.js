function cargar() {
    fetch('productos.json')
        .then(response => response.json())
        .then(productos => {
            const container = document.querySelector("#productos-container");

            productos.map(producto => {
                const card = document.createElement("div");
                card.classList.add("card");

                const img = document.createElement("img");
                img.src = producto.imagem;
                img.alt = producto.nombre;

                const titulo = document.createElement("h3");
                titulo.textContent = producto.nombre;

                const precio = document.createElement("h4");
                precio.textContent = producto.precio;

                card.appendChild(img);
                card.appendChild(titulo);
                card.appendChild(precio);
                container.appendChild(card);
            });
        });
}
    cargar();

    document.getElementById('formulario-filtro').addEventListener('submit', function(event) {
        event.preventDefault();
    
        const filtroNombre = document.getElementById('filtro-nombre').value.toLowerCase();
        const filtroPrecio = document.getElementById('filtro-precio').value;
        const filtroMarca = document.getElementById('filtro-marca').value.toLowerCase();
    
        fetch('datos.json')
            .then(response => response.json())
            .then(data => {
                const lista = document.getElementById('lista');
                lista.innerHTML = ''; 
    
                data.forEach(item => {
                    const nombre = item.nombre.toLowerCase();
                    const precio = parseFloat(item.precio);
                    const marca = item.marca.toLowerCase();
    
                    const cumpleNombre = nombre.includes(filtroNombre);
                    const cumplePrecio = filtroPrecio === 'todos' || precio <= parseFloat(filtroPrecio);
                    const cumpleMarca = marca.includes(filtroMarca);
    
                    if (cumpleNombre && cumplePrecio && cumpleMarca) {
                        const div = document.createElement('div');
                        div.textContent = `${item.nombre} (€${item.precio}, ${item.marca})`;
                        lista.appendChild(div);
                    }
                });
            });
    });
    
    
