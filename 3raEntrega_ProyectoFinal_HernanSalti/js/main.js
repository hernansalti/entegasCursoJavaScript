const listaDeProductos = [
    {
        id:1001,
        nombre:"Set de Mate Azul",
        imagen:"set09.jpeg",
        precio:400,
    },
    {
        id:1002,
        nombre:"Set de Mate Celeste",
        imagen:"set02.jpeg",
        precio:450,
    },
    {
        id:1003,
        nombre:"Set de Mate Rosa",
        imagen:"set03.jpeg",
        precio:500,
    },
    {
        id:1004,
        nombre:"Set de Mate Acqua",
        imagen:"set06.jpeg",
        precio:500,
    },
    {
        id:1005,
        nombre:"Set de Mate Amarillo",
        imagen:"set04.jpeg",
        precio:450,
    },
    {
        id:1006,
        nombre:"Set de Mate Verde",
        imagen:"set05.jpeg",
        precio:450,
    },
]

class Producto {
    constructor ({id,nombre,precio,imagen}){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }
    card (){
        return `
            <div class="col-12 col-sm-4"> 
            <div class="imgprod1">                    
                <img src="./img/Img-prodductos/${this.imagen}" alt="" class="imgprod">                       
            </div>
            <div class="texto2 imgdec">${this.nombre}</div>
            <h4 class="texto2 imgdec">$${this.precio}</h4>
            <button class="botonesAniadir titulo4" data-action="agregarProductoAlCarrito" data-id=${this.id}> Añadir </button>
            </div>
            `
    }
    cardCarrito(){
        return ` <li> Usted incorpora <b>${this.nombre}</b> al carrito 
        <button class="botonesRemover" data-action="removerProducto" data-id=${this.id}>X</button></li>`
    }
}

class Tienda {
    constructor(listado){
        this.stock = []
        this.carrito = []
        this.total = 0;
        listado && this.agregarListadoAlStock(listado);
    }

    interfaz = () => (e) => this[e.target.dataset.action](e.target.dataset.id)

    agregarProductoAlStock = (producto) => this.stock.push(new Producto(producto));

    agregarListadoAlStock = (listado) => {
        listado.forEach(item => this.agregarProductoAlStock(item));
        this.renderStock();
    }
    agregarProductoAlCarrito = (id) => {
        this.carrito.push(this.devolverProductoPorId(id));
        this.renderCarrito("carrito");
    }
    devolverProductoPorId = (id) => this.stock.find(item => item.id == id);

    renderCarrito = () => {
        this.calcularTotal("total");
        $("#carrito").html(this.carrito.map(item => item.cardCarrito()).join(""));
        $(".botonesRemover").click(manejarCarrito);
        
    }
    renderStock = () => {
        $("#productos").html(this.stock.map(item => item.card()).join("<br/>"));
        $(".botonesAniadir").click(manejarCarrito);
    } 
    
    calcularTotal =() => {
        this.total = this.carrito.reduce((a,b) => a + b.precio , 0);
        $("#destino").html("El total de su compra es: $"+ this.total );
    };

    removerProducto = (id) => {
        this.carrito = this.carrito.filter(item => item.id != id);
        this.renderCarrito("carrito");
    }    
}

let bazar = new Tienda()
const manejarCarrito = bazar.interfaz()
bazar.agregarListadoAlStock(listaDeProductos)