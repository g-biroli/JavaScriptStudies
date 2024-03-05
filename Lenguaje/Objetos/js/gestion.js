
let productos = [
    
    new Producto("Camiseta", 220, "Hering", "ropa", "https://down-br.img.susercontent.com/file/fe85d0aa01b78438728aecfb6777002f"),
    new Producto("Televison", 1000, "Samsung", "television", "https://s3.abcstatics.com/media/favorito/2022/03/01/mejor-television-calidad-precio_20220301201917-U14660146830mJe-1248x698@abc.jpg"),
    new Producto("Blusa", 50, "The north face", "ropa", "https://img01.ztat.net/article/spp-media-p1/5227a3fe0e883bb4a8fedcfb3bc21218/cc0a8ed44b4c4496975cf3e3c9cbb9d8.jpg?imwidth=762&filter=packshot"),
    new Producto("Notebook", 2175, "Acer", "Ordenador", "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_133305098/fee_786_587_png"),
    new Producto("Camera", 400, "Cannon", "Fotografia", "https://i1.adis.ws/i/canon/eos-600d-frt-w-ef-s-18-55mm-is-ii_e35e194009c94ddd840794a72c04b9f0?$block-hero-header-3by2-dt-jpg$"),
    new Producto("Galaxy", 900, "Samsung", "telefono", "https://cdn.idealo.com/folder/Product/201734/5/201734549/s11_produktbild_gross_12/samsung-galaxy-s22.jpg"),
]

// No pensamento de logica por Java vou colocar abaixo uma metodo para que mostre os dados apenas que sao da categoria ropa
   /* productos.forEach((element) => {
    if (element.categoria == "ropa") {
        console.log(element.getNombre);
    } 
    }); */


// Pero la lista de los elementos que cumplen la condicion de busqueda en JS se hace asi

/* let busqueda = productos.filter((element) => {      //esse metodo pede para que se procure todos os itens da array com a categoria ropa
    return element.categoria == "ropa";
});

console.log(busqueda); */

let selectCategoria = document.querySelector("#select-categoria");

//Colocando as informacoes da array no html do site, nas cartas criadas:
//Criei um for each e coloquei a instrucoes do card do boostrap, assim esta configurado com a array. Sempre que criar uma nova array, se cria um card.
let seleccionCartas = document.querySelector("#seccion-cartas");
selectCategoria.addEventListener("change", () => {
    console.log(selectCategoria.value);
})

productos.forEach((Element) => {
    seleccionCartas.innerHTML += `<div class="col" >
    <div class="card m-4" style="width: 18rem;">
        <img src="${Element.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${Element.nombre}</h5>
          <p class="card-text">${Element.marca} ${Element.precio}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
</div>`;
});

