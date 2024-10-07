function principal(){




    
let cantidad = parseFloat(prompt("dime la cantidad"));
let divisa = prompt("dime la divisa");

let final = redondea();//ASIGNAMOS A LA VARIABLE "FINAL" EL RESULTADO DE LA FUNCION REDONDEA() ,QUE TE DEVUELVE UN STRING CON EL NUMERO CON 2 DECIMALES CONCATENADO CON LA DIVISA

console.log(final);//IMPRIMOS LA VARIABLE POR CONSOLA



function redondea(){

cantidad = cantidad.toFixed(2);
let mensage = (cantidad + " " +  divisa);
return mensage;

}









}