var produtos = [
    { nome: 'Smartphone', preco: 1200, categoria: 'eletronicos', marca: 'Marca A' },
    { nome: 'Camiseta', preco: 25, categoria: 'roupas', marca: 'Marca B' },
    { nome: 'Fone de Ouvido', preco: 50, categoria: 'eletronicos', marca: 'Marca C' },
    { nome: 'Bolsa', preco: 80, categoria: 'acessorios', marca: 'Marca A' },
    // Adicione mais produtos conforme necessário
];

// Funcion para filtrar los productos
function filtrarProductos() {
    var precoMinimo = parseFloat(document.getElementById('preco-minimo').value);
    var categoria = document.getElementById('categoria').value;
    var marca = document.getElementById('marca').value.toLowerCase();

    var productosFiltrados = produtos.filter(function(produto) {
        return (!precoMinimo || produto.preco >= precoMinimo) &&
               (!categoria || produto.categoria === categoria) &&
               (!marca || produto.marca.toLowerCase().includes(marca));
    });

    exibirProdutos(productosFiltrados);
}

// Função para exibir os produtos filtrados
function exibirProdutos(produtos) {
    var listaProdutos = document.getElementById('lista-produtos');
    listaProdutos.innerHTML = ''; // Limpa a lista antes de adicionar os produtos

    produtos.forEach(function(produto) {
        var produtoDiv = document.createElement('div');
        produtoDiv.classList.add('produto');
        produtoDiv.innerHTML = '<strong>' + produto.nome + '</strong><br>' +
                               'Preço: R$ ' + produto.preco.toFixed(2) + '<br>' +
                               'Categoria: ' + produto.categoria + '<br>' +
                               'Marca: ' + produto.marca;
        listaProdutos.appendChild(produtoDiv);
    });
}

// Exibir todos os produtos ao carregar a página
window.onload = function() {
    exibirProdutos(produtos);
};