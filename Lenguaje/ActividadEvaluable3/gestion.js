
// Función para filtrar los productos
function filtrarProductos() {
    var precioMinimo = parseFloat(document.getElementById('preco-minimo').value);
    var categoria = document.getElementById('categoria').value;
    var marca = document.getElementById('marca').value.toLowerCase();

    var productosFiltrados = productos.filter(function(producto) {
        return (!precioMinimo || producto.precio >= precioMinimo) &&
               (!categoria || producto.categoria === categoria) &&
               (!marca || producto.marca.toLowerCase().includes(marca));
    });

    mostrarProductos(productosFiltrados);
}

function mostrarProductos(productos) {
    var listaProductos = document.getElementById('lista-produtos');
    listaProductos.innerHTML = ''; // Limpia la lista antes de agregar los productos

    productos.forEach(function(producto) {
        var productoDiv = document.createElement('div');
        productoDiv.classList.add('producto');
        productoDiv.innerHTML = '<strong>' + producto.nombre + '</strong><br>' +
                               'Precio: $' + producto.precio.toFixed(2) + '<br>' +
                               'Categoría: ' + producto.categoria + '<br>' +
                               'Marca: ' + producto.marca;
                               '<img src="' + producto.imagem + '" alt="' + producto.nome + '">';
        listaProductos.appendChild(productoDiv);
    });
}

    window.onload = function() {
        mostrarProductos(productos);
    };
    
    fetch('productos.json')
        .then(response => response.json())
        .then(productos => {
        const listaProductos = document.getElementById('lista-productos');
        productos.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.innerHTML = `
            <strong>${producto.nombre}</strong><br>
            Precio: $${producto.precio.toFixed(2)}<br>
            Categoría: ${producto.categoria}<br>
            Marca: ${producto.marca}<br>
            <img src="${producto.imagen}" alt="${producto.nombre}">
        `;
        listaProductos.appendChild(productoDiv);
    });
})
.catch(error => console.error('Error al cargar los productos:', error));