// crear un objeto
// Exemplo de construcao de um objeto bem feito, com atributos, construtores e metodos.
// A diferenca da logica de criacao de objetos para o JS é apenas a mudanca de formato, mas a logica continua a mesma. Nos metodos ao inves de criar um metodo, voce cria uma funcao.
// Esse objeto esta sendo criado para que usamos no arquivo gestion.js
class Producto {
    nombre;
    precio;         //atributos
    marca;
    categoria;
    imagen;

    constructor(nombre, precio, marca, categoria, imagen) {     //criando constructor em js
        this.nombre = nombre;
        this.precio = precio;
        this.marca = marca;
        this.categoria = categoria;
        this.imagen = imagen;
    }

    MostrarDatos() {       //metodo criado, a partir de agora eu crio a logica do que eu quero. Criacao da logica para o meu objetivo, nesse caso o objetivo é apenas mostrar dado, simples
        console.log(`Nombre : ${this.nombre}`);
        console.log(`Marca : ${this.marca}`);
        console.log(`Precio : ${this.precio}`);
        console.log(`Categoria : ${this.categoria}`);
    }

    getNombre (){
        return this.nombre;
    }

    set setNombre(nombre){
        this.nombre = nombre;
    }

















}