let error = 0
for( let i = 0 ; i < 3 ; i = i +1){
    
    let usuario = prompt("ungrese su usuario");
    let pass = prompt("Ingrese su contraseña");
    if( usuario != "" && pass != ""){

        alert("Bienvenido " + usuario);
        break;
    }

    else{
        alert("usuario o contraseña incorrecto" + i);
        error = error +1;
      
        if( error == 3){ 
            alert("No se ha podido verificar su usuario y contraseña, verifique con su administrador");
            break;
        }
        
    } 
} 

function desc( precio, cp ){
    if( cp >= 1000 ){
        let descuento = precio * 0.50;
        return descuento;
    }
    else if( cp >= 500 ){
        let descuento = precio * 0.30;
        return descuento;
    }
    else if( cp >= 100 ){
        let descuento = precio * 0.20;
        return descuento;
    }
    else if( cp >= 50 ){
        let descuento = precio * 0.10;
        return descuento;
    }
    else{
        return "No posee descuento por esa cantidad de productos, la compra minima mayorista es de 50 unidades";
    }
    }
    function iva( precio ){
        let iva = precio * 0.21;
    
        return iva;

}
if( error != 3){
    let cp = prompt ("Ingrese la cantidad de productos que desea comprar");
    let precio = cp * 100;

    let resultadoA = desc( precio, cp )
    alert("Su descuento es de $" + resultadoA);

    let resultadoB = ( precio -  desc(precio , cp) ) + iva(precio);
    alert("El total de su compra es de $" + resultadoB + " con IVA incluido");

    let compra = prompt("desea efectuar la compra? (si/no)");
    if ( compra == "si" ){

        alert("gracias por su compra");
    }
else{

    alert("gracias por la consulta");

}
}
