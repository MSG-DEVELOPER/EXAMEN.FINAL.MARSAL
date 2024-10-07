const url = "https://api.chucknorris.io/jokes/random";

const chiste = document.getElementById("chiste");
const imagen = document.getElementById("imagen");
const imagenes = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg"];

let indexRandom = 0;



//CUANDO LE DAMOS AL BOTON HACEMOS LA LLAMADA A LA API
function conecta() {

    fetch(url)
        .then((response) => response.json())
        .then((data) => {

            chiste.innerHTML = data.value; // MOSTRAMOS UN CHISTE DIRECTAMENTE DE LA API 

        }
        )

    setIndexRandom(); //FUNCION PARA OBTENER UN INDICE AL AZAR
    imagen.src = imagenes[indexRandom]; // IMAGEN RABNDOM A TRAVES DEL INDICE RANDOM.

}


function setIndexRandom() {

    indexRandom = Math.floor(Math.random() * imagenes.length);


}