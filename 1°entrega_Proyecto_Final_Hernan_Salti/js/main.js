
function comprar(){
class Producto { 
    constructor(nombre, color, precio, cantidad){
        this.nombre = nombre;
        this.color = color;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    
    precioFinal() {
        return this.precio * this.cantidad;
    }
    sumarIva () {
        return this.precioFinal() * 1.21;
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

    //ordeno objetos por precio y en caso que coincidan, por nombre

    arrayProductos.sort( (a, b) => {
        if(a.precioFinal() > b.precioFinal()) {
            return 1;
        }
        if(a.precioFinal() < b.precioFinal()) {
            return -1;
        }
        if(a.nombre.toLowerCase > b.nombre.toLowerCase) {
            return 1;
        }
        if(a.nombre.toLowerCase < b.nombre.toLowerCase) {
            return -1;
        }
    });
    
}


while (nombre != "fin" || nombre != "FIN" || nombre != "Fin");




for (let producto of arrayProductos){
    alert("El producto ingresado es: " + producto.nombre + " - "+ producto.color);
    alert("La cantidad del producto ingresado es: " + producto.cantidad );
    alert("El precio final sin IVA es: " + producto.precioFinal());
    alert("El precio final con IVA es: " + producto.sumarIva());

    }
    let compra = prompt("Desea efectuar la compra? (si/no)");
        if ( compra == "si" ){


            alert("Gracias por su compra");
        }
        else{

            alert("Gracias por la consulta");
        }


}
