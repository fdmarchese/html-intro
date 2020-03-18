/**
 * Constantes
 */
const jugador1 = {
    id: 1,
    nombre: "Jugador 1",
    estilo: "japanese-laurel",
    titulo: "Turno del jugador 1",
    ficha: "X",
    selecciones: []
}

const jugador2 = {
    id: 2,
    nombre: "Jugador 2",
    estilo: "cornflower-blue",
    titulo: "Turno del jugador 2",
    ficha: "O",
    selecciones: []
}

const cabeceraTurno = document.getElementById('cabeceraDeTurno');
const botonReiniciar = document.getElementById('reiniciar');

/**
 * Clases
 */
class casilla {
    fila;
    columna;
}

/**
 * Variables
 */
let jugadorActivo = jugador1;

/**
 * Funciones
 */
function hayGanador() {
    let result = false;

    // 3 en la misma fila
    const fila1 = jugadorActivo.selecciones.filter(casilla => casilla.fila === 1);
    const fila2 = jugadorActivo.selecciones.filter(casilla => casilla.fila === 2);
    const fila3 = jugadorActivo.selecciones.filter(casilla => casilla.fila === 3);
    if (fila1.length === 3 || fila2.length === 3 || fila3.length === 3) {
        result = true;
    }

    // 3 en la misma columna
    const col1 = jugadorActivo.selecciones.filter(casilla => casilla.columna === 1);
    const col2 = jugadorActivo.selecciones.filter(casilla => casilla.columna === 2);
    const col3 = jugadorActivo.selecciones.filter(casilla => casilla.columna === 3);
    if (col1.length === 3 || col2.length === 3 || col3.length === 3) {
        result = true;
    }

    // diagonal izquierda a derecha
    if (jugadorActivo.selecciones.filter(casilla => casilla.fila === casilla.columna).length === 3) {
        result = true;
    }

    // diagonal derecha a izquierda
    if (jugadorActivo.selecciones.filter(casilla =>
        (casilla.fila === 1 && casilla.columna === 3) ||
        (casilla.fila === 2 && casilla.columna === 2) ||
        (casilla.fila === 3 && casilla.columna === 1)
    ).length === 3) {
        result = true;
    }

    return result;
}

function pasarTurno() {
    if (!hayGanador()) {
        jugadorActivo = jugadorActivo === jugador1 ? jugador2 : jugador1;

        cabeceraTurno.innerText = jugadorActivo.titulo;
        cabeceraTurno.className = jugadorActivo.estilo;
    }
    else {
        let casillas = document.getElementsByClassName('col');
        for (let casilla of casillas) {
            casilla.onclick = null;
        }
        cabeceraTurno.innerText = "Ganador " + jugadorActivo.nombre + "!!!!";
        cabeceraTurno.className = jugadorActivo.estilo;
        botonReiniciar.classList.toggle('ocultar');
    }
}

function seleccionCasillero(casillero, fila, columna) {
    casillero.classList.add(jugadorActivo.estilo);
    casillero.innerText = jugadorActivo.ficha;
    casillero.onclick = null;
    let seleccion = new casilla();
    seleccion.fila = fila;
    seleccion.columna = columna;
    jugadorActivo.selecciones.push(seleccion);

    pasarTurno();
}
