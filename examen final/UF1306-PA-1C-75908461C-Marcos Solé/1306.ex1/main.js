const userText = document.getElementById("userText");
const textoSalida = document.getElementById("textoSalida");
let nota = 0;
let calificacion = "";

function gradua() {
    nota = userText.value;
    asignaCalificacion(); // FUNCION QUE ASIGNA UNA NOTA EN TEXTO PARA CADA NOTA NUMERICA.
    textoSalida.innerHTML = calificacion;

}




function asignaCalificacion() {


    if (nota < 0 || nota > 10) {
        calificacion = "LA NOTA TIENE QUE SER ENTRE 0 Y 10";
    } else {
        if (nota >= 9) {
            calificacion = "EXCELENTE";
        } else if (nota >= 7) {
            calificacion = "NOTABLE";

        } else if (nota >= 5) {
            calificacion = "APROBADO";
        } else if (nota >= 0) {

            calificacion = "SUSPENDIDO";
        }
    }


}