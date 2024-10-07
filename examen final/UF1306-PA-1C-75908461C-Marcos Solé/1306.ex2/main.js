
const imagen = document.getElementById("imagen");

//PRIMERA FUNCIONA QUE SE EJECUTA YA QUE TIENE ONLOAD
function popUp() {

    setTimeout(anuncio, 1000);//EN 1S EJECUTARA ANUNCIO
    imagen.addEventListener("click", salir1);//EL ANUNCIO PERMANECE HASTA QUE ACTIVES EL EVENTO CLICANDO CON EL RATON ENCIMA DE EL, MOMENTO EN EL CUAL SE ACTIVA SALIR1



}



function anuncio() { //MUETSRA EL ANUNCIO , QUE ESTABA OCULTO USANDO DISPLAY= NONE
    imagen.style.display = "block";

}


function salir1() {//ACTRIVA LA ANIMACION, Y ESPERA 2S PARA LLAMAR ÑA FUNCION SALIR 2 , LA CUAL VUELVE A PONER LA IMG EN DISPLAY NONE, DANDO LA SENSACIÓN QUE DESAPARECE
    imagen.style.animationPlayState = "running";
    setTimeout(salir2, 1800);

}


function salir2() { // VUELVE A PONER LA IMG EN DISPLAY NONE, DANDO LA SENSACIÓN QUE DESAPARECE
    imagen.style.display = "none";
}