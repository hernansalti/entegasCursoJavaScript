let mejorVC =0
let mejorT = "1000"

for( let i = 0 ; i < 3 ; i = i + 1){


    let nombreC = prompt ("Nombre del corredor");
    let numeroC = parseInt(prompt("Número del corredor"));
    let mejorVC = parseInt(prompt("Mejor tiempo del corredor"));
    
    
    

    if( mejorVC <= mejorT){ 

        
        alert("El corredor " + nombreC + " con la camiseta número " + numeroC + " obtiene el mejor tiempo");
        alert("Su tiempo fue de " + mejorVC );

        mejorT = mejorVC
    }
    else{
        alert("El corredor " + nombreC + " con la camiseta número " + numeroC + " no ha superado el mejor tiempo");
    }
}