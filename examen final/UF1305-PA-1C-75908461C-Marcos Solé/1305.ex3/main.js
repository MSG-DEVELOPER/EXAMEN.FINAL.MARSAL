function principal() {

    const libreta = ["albert", "leo", "joker"];//INICIALIZAMOS LA LIBRETA CON ALGUNOS NOMBRES
    let go = true;
    let respuesta;
    let famoso;

    alert("A dia de hoy el listado esta así " + " " + libreta); // MOSTRAMOS LOS NOMBRES DE LA LIBRETA ANTES DE ESCRIBITR NADA



    //ENTRA EN EL BUCLE . SOLO SALDRA CUANDO NO QUERAMOS APUNTAR NINGUN FAMOSO MAS.
    while (go) {

        respuesta = prompt("Has conocido algun famoso hoy? Respuesta s/n").toLowerCase();
        if (respuesta == "n") { // SALE DEL BUCLE
            alert("otro dia tendras mas suerte seguro , ves al prolisok");
            go = false;
        } 
        if (respuesta == "s") { // HACE PUSH DEL FAMOSO EN EL ARRAY Y SIGUE PREGUUNTANDO
            famoso = prompt("Que suerte! Dime su nombre");
            libreta.push(famoso);
        }





    }
    //FIN DEL BUCLE, EN ALGUN MOMENTO HAS TENIDO QUE RESPONDER "N" 
    //MOSTRAMOS COMO EL NUEVO VALOR DEL ARRAY . PUEDE SER EL MISMO SI NO HAS AÑADIDO NINGUN NOMBRE

    alert("Ahora queda así la libreta " + libreta);



}