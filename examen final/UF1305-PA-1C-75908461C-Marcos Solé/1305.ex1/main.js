function principal() { //FUNCION QUE SE ACTIVA PULSANDO EL BOTON Y QUE INICIALIZA EL PROGRAMA



    let pato = 0;
    let perro = 0;
    let toro = 0;

    let go = true;
    const posiciones = [];

    alert("PREPARADAOS, LISTOS....YA!")


    //MIENTRAS NO GANE NADIE SE REPITE EL BUCLE
    while (go) {
        pato = pato + 1;
        perro = perro + 2;
        toro = toro + 1.5;

        patoCuak(); //COMPROBAMOS SI EL PATO HACE CUAK
        ordenaAnimales(); //ORDENAMOS UN ARRAY EN FUNCION DE LOS PASOS Q LLEVEN . EN EL INDICE 0 EL QUE MAS Y EN EL 2 EL QUE MENOS.


        //MOSTRAMOS LOS PASOS QUE LLEVAN CADA UNO Y LA POSICION QUE OCUPAN
        alert("El pato lleva " + pato + "\nEl perro lleva " + perro + "\nEl toro lleva " + toro)

        alert("1era posicion:" + posiciones[0] + " \n2da posicion : " + posiciones[1] + " \n3era posicion: " + posiciones[2]);


        //CONDICIONAL PARA CUANDO UNO DE LOS ANIMALES LLEGUE A 100
        if (perro >= 100 || pato >= 100 || toro >= 100) {
            alert("se acabo ganó el " + posiciones[0]);
            go = false;
        }


    }







    function patoCuak() {

        if (pato == 20) {
            alert("CUAK CUAK!!")
            perro = perro - 10;
            toro = toro - 10;
        }
    }



    // ESTA FUNCION SIRVE PARA ORDENAR UN ARRAY EN FUNCION DE LOS PASOS QUE LLEVA CADA UNO EN CADA ITERACIÓN
    function ordenaAnimales() {


        if (perro > pato) {
            if (perro > toro) {
                posiciones[0] = "perro";

                if (toro > pato) {
                    posiciones[1] = "toro";
                    posiciones[2] = "pato";
                } else {
                    posiciones[1] = "pato";
                    posiciones[2] = "toro";
                }
            } else { //toro gana perro
                posiciones[0] = "toro";
                posiciones[1] = "perro";
                posiciones[2] = "pato";

            }

        } else { //pato mas grande q perro

            if (pato > toro) {
                posiciones[0] = "pato";

                if (toro > perro) {
                    posiciones[1] = "toro";
                    posiciones[2] = "perro";
                } else {
                    posiciones[1] = "perro";
                    posiciones[2] = "toro";
                }
            } else { // toro gana a pato
                posiciones[0] = "toro";
                posiciones[1] = "pato";
                posiciones[2] = "perro";


            }


        }

    }//CIERRE DE LA FUNCION






}