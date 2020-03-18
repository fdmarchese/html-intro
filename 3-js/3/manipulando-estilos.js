/*
    Descripción: 
        Modifica el valor del "color" para el elemento del dom con id 'divQueSeCambia'
    Parameters:
        @color: Color a ser utilizado para aplicar en el elemento.
*/
function modificarColor(color) {
    let div = document.getElementById('divQueSeCambia');

    div.style.color = color;
}

/*
    Descripción: 
        Modifica el valor de "font-size" para el elemento del dom con id 'divQueSeCambia'
    Parameters:
        @fontSize: Tamaño de la fuente a ser aplicado en el elemento.
*/
function modificarTamanoFuente(tamanoFuente) {
    let div = document.getElementById('divQueSeCambia');

    div.style.fontSize = tamanoFuente;
}

/*
    Descripción: 
        Modifica el valor de "font-family" para el elemento del dom con id 'divQueSeCambia'
    Parameters:
        @familiaDeFuentes: Familia de fuentes a ser aplicada en el elemento.
*/
function modificarFuente(familiaDeFuentes) {
    let div = document.getElementById('divQueSeCambia');

    div.style.fontFamily = familiaDeFuentes;
}

/*
    Descripción: 
        Modifica el valor del atributo "class" para el elemento del dom con id 'divQueCambiaClases'
    Parameters:
        @nombreClase: Nombre de la clase a aplicar al elemento.
*/
function asignarClase(nombreClase) {
    let div = document.getElementById('divQueCambiaClases');

    div.className = nombreClase;
}

/*
    Descripción: 
        Agrega una clase al atributo "class" para el elemento del dom con id 'divQueCambiaClases'
    Parameters:
        @nombreClase: Nombre de la clase que se agregará a las existentes del elemento.
*/
function agregarClase(nombreClase) {
    let div = document.getElementById('divQueCambiaClases');

    div.classList.add(nombreClase);
}

/*
    Descripción: 
        Hace toggle de una clase aplicada en el elemento del dom con id @idDelElemento.
        Si la clase se encuentra aplicada la remueve y si la clase no se encuentra aplicada en el elemento será agregada.
    Parameters:
        @idDelElemento: Id del elemento al que se le hará toggle de las clases.
        @nombreClase: Nombre de la clase que se hará toggle en el elemento.
*/
function alternarClase(idDelElemento, nombreClase) {
    var elemento = document.getElementById(idDelElemento);

    elemento.classList.toggle(nombreClase);
}