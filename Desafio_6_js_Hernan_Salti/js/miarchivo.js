class Producto { 
    constructor(nombre, color, precio, cantidad){
        this.nombre = nombre;
        this.color = color;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    comprar () {
        console.log("Este " + (this.nombre) + " es de color " + (this.color) + (", tiene un valor de $") + (this.precio) + (" por unidad, y usted desea comprar ") + (this.cantidad) + (" unidades"))
    }
     
    }

let nombre = prompt("Ingrese el producto que desea comprar");
let color = prompt("Ingrese el color elegido");
let precio = prompt("Ingrese el precio del producto");
let cantidad = prompt("Ingrese cuantas unidades desea comprar");

let productos = new Producto (nombre, color, precio, cantidad);
productos.comprar();



