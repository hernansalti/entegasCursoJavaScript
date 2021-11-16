class Producto { 
    constructor(nombre, color, precio, cantidad){
        this.nombre = nombre;
        this.color = color;
        this.precio = precio;
        this.cantidad = cantidad;
        this.disponible = true;
    }
    
    sumarIva () {
        return this.precio * 1.21;
    }
     
    Vender () {
        this.disponible = false;
    }

    precioSugerido() {
        return this.precio * 1.21 * 1.25;
    }
}

let arrayProductos = [];
let nombre = [];
do {
    let comprobacion = prompt('Ingrese el nombre del producto o fin para terminar de agregar');
    if (comprobacion === "fin" || comprobacion === "FIN" || comprobacion === "Fin") {
        
        break;
    }
    else{
        let nombre = comprobacion;
        let color = prompt('Ingrese el color');
        let precio = parseInt(prompt('Ingrese el precio del producto'));
        let cantidad = parseInt(prompt('Ingrese la cantidad que desea comprar'));
        
        arrayProductos.push(new Producto(nombre, color, precio, cantidad));
    }
}
while (nombre != "fin" || nombre != "FIN" || nombre != "Fin")


for (let producto of arrayProductos){
    document.write("<h3> El producto ingresado es: " + producto.nombre + "</h3>");
    document.write("<h3> y su color es: " + producto.color + "</h3>");
    document.write("<h3> El precio sin IVA es: " + producto.precio + "</h3>");
    document.write("<h3> El precio con IVA es: " + producto.sumarIva() + "</h3>");
    document.write("<h3> La cantidad del producto ingresado es: " + producto.cantidad + "</h3>");


    console.log(producto.nombre);
    console.log(producto.color);
    console.log(producto.precio);
    console.log(producto.sumarIva());
    console.log(producto.cantidad);


}



