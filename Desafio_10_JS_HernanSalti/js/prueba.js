
function listaCompras(){

    let nombre = document.getElementById("nombre");
    let precio = document.getElementById("precio");
    let cantidad = document.getElementById("cantidad");
    
    let nuevoLi1 = document.createElement("li");

    nuevoLi1.innerHTML = "Usted incorpora al carrito: " + `${cantidad.value}` +" "+ `${nombre.value}` + " - Valor unitario $" + `${precio.value}`;
    lista.appendChild(nuevoLi1);
    
    console.log(nombre.value, precio.value, cantidad.value)
    
}

function borrarElemento(){

    let lista = document.getElementById("li");
    lista.removeChild(lista.lastChild);


}
function comprar(){
    
    let compra = prompt("Desea efectuar la compra? (si/no)");
        if ( compra == "si" ){
            
            let nuevoLi2 = document.createElement("li");
            nuevoLi2.innerHTML = "Gracias por su compra";
            lista.appendChild(nuevoLi2);
        }
        else{
            let nuevoLi2 = document.createElement("li");
            nuevoLi2.innerHTML = "Gracias por su consulta";
            lista.appendChild(nuevoLi2);
            
        }
    
}
// ESTO ES LO QUE BUSQUE AGREGAR Y NO ME SALIO.
const btnNucleo = document.createElement("button");

btnNucleo.id = 'btnNucleo';

btnNucleo.innerHTML = 'COMPRA MAYORISTA';

btnNucleo.addEventListener('click', function () {
    const h3 = document.createElement('h3');
    h3.innerHTML = 'COMUNIQUESE AL 1155668844';
    document.body.appendChild(h3);
})

document.body.appendChild(btnNucleo);