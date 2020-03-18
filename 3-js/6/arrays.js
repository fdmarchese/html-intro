/**
 * Creando arrays.
 */
var arrayConNew = new Array();

var arrayVacio = [];

var arrayInicializado = ["uno", "dos", "tres"];

var frutas = [];

/**
 * Utilizando el push para adicionar elementos en el array.
 */
arrayConNew.push("uno");
arrayConNew.push("dos");
arrayConNew.push("tres");

arrayVacio.push("uno");
arrayVacio.push("dos");
arrayVacio.push("tres");

console.log(arrayConNew);
console.log(arrayVacio);
console.log(arrayInicializado);

/**
 * Utilizando el pop para para extraer elementos del array.
 * Si solamente quiero visualizar un elemento en especial simplemente
 * se puede acceder por índice, en cambio el pop() quitará ese elemento del array.
 */

function ejemploPop() {

    arrayInicializado.push("ultimo valor agregado");
    console.log("agregamos al array este valor al final utilizando push: " + arrayInicializado[3]);
    console.log(arrayInicializado);
    let valorDelPop = arrayInicializado.pop();
    console.log(valorDelPop);
    console.log(arrayInicializado);
}

function accederPrimerFruta() {
    let fruta = frutas[0];
    alert(fruta);
}

function hacerPopDeFruta() {
    let fruta = frutas.pop();
    alert(fruta);
}

function forEachFrutaAlert() {
    frutas.forEach(fruta => {
        // esta es una forma de agregar varias lineas de codigo dentro de una lambda.
        const unDato = fruta;
        alert(unDato);
    });
}

function utilizandoLoops() {

    console.log("Iteración con for standard");

    for (let index = 0; index < frutas.length; index++) {
        const elemento = frutas[index];
        console.log("elemento del array: " + elemento)
    }

    console.log("Iteración con for of de javascript");

    for (const elemento of frutas) {
        console.log("elemento del array: " + elemento)
    }
}

const nuevaFruta = document.getElementById('nuevaFruta');
const arrayFrutas = document.getElementById('arrayFrutas');

function agregarFruta() {
    frutas.push(nuevaFruta.value);
    nuevaFruta.value = '';
    mostrarFrutas();
}

function mostrarFrutas() {
    let html = ''

    frutas.forEach(fruta => {
        html += fruta + '<br />';
    });

    arrayFrutas.innerHTML = html;
}