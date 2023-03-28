let amigos;
let evento;
let gasto;
let continuar;
let total;
let detalle; 

total = 0;

evento= prompt ("Que tipo de evento planean");


    amigos= parseFloat(prompt("Cuantos personas concurriran al: "+evento));    
while(amigos <= 0 ){
    amigos= parseFloat(prompt("Debe ingresar un número valido: "));
}

do{
detalle=prompt ("Ingrese el detalle del gasto")
gasto = parseFloat(prompt("Ingrese el monto: "));
while( gasto <=0) {
    gasto= parseFloat(prompt("Monto de la compra invalido,ingreselo nuevamente: "));
}
total= total + gasto;
continuar= prompt("Desea continuar cargando gastos s/n");
} while(continuar == "s");
      

alert("Para el "+ evento+ "\n\n"+ "El total gastado sera de : " +total+" pesos." );
alert("Cada uno de los que concurra al "+ evento +" debera abonar: "+ total/amigos+" pesos.");








