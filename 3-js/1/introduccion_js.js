// Comentarios

// Comentarios de una línea

/*
    Cuando se quieren poner comentarios de más de una línea se usa la barra y asterisco 
    para abrir y luego el asterisco barra para cerrar.
*/

/* 
    La función log(parametro) de la consola lo que hará es escribir lo
    que se envíe en el parámetro de entrada por la consola de desarrollo.
    Recordar que para acceder a esta consola por ejemplo en Google Chrome
    se hace a través de la tecla F12 y luego se accede a la pestaña "Console".
*/
console.log("hola mundo!");

// Declaración de variables
var variable1 = 1;
variable2 = 2;
let variable3 = 3;

console.log("valor de la variable1: " + variable1); // ouput: valor de la variable1: 1
console.log("valor de la variable2: " + variable2); // ouput: valor de la variable2: 2
console.log("valor de la variable3: " + variable3); // ouput: valor de la variable2: 3

var variableSinAsignarValor;

console.log("valor de la variable sin asignar: " + variableSinAsignarValor); // ouput: valor de la variable sin asignar: undefined

// Tipos de datos

// String
var unaVariableString = "esto es una cadena de caracteres";

// Number
var unaVariableNumber = 1; // este number será entero ya que no tiene coma.
var otraVariableNumber = 1.5; // este number será float ya que tiene coma.

// Boolean
var unaVariableBoolean = true;

// Arrays
var unaVariableArray = [];
// agregar contenido al array. => los métodos push y pop utilizan el array como un stack (pila). 
// Si no se está familiarizado con el concepto de pila y como funciona consultar al docente.
unaVariableArray.push("un elemento del array");
unaVariableArray.push(2);
// observar el contenido de un array en una posición.
console.log(unaVariableArray[0]);
console.log(unaVariableArray[1]);
console.log("cantidad de elementos en el array: " + unaVariableArray.length);
// tomar un elemento del array.
var elementoQuitadoDelArray = unaVariableArray.pop();
console.log("elemento quitado del array: " + elementoQuitadoDelArray);
console.log("cantidad de elementos en el array: " + unaVariableArray.length);

// Object
var unaVariableObjeto = {
    Nombre: "Federico",
    Apellido: "Marchese",
    Edad: 32
}
console.log(unaVariableObjeto);
console.log(
    "valores del objeto: { Nombre: " + unaVariableObjeto.Nombre +
    ", Apellido: " + unaVariableObjeto.Apellido +
    ", Edad: " + unaVariableObjeto.Edad + " }");

// operadores

// Suma/concatenación
var unValorString = "uno";
var otroValorString = "otro"
var unValorNumerico = 2;
var otroValorNumerico = 3;
console.log("si se suman 2 strings, éstos se concatenan:");
console.log(unValorString + otroValorString);
console.log("si se suman 2 number, éstos se suman:");
console.log(unValorNumerico + otroValorNumerico);
console.log("Si se suman un valor number con un valor string, éstos se concatenan:");
console.log(unValorString + unValorNumerico);

// Resta, multiplicación, división
var number1 = 2;
var number2 = 5;
console.log("resta:");
console.log(number2 - number1);
console.log("multiplicación:");
console.log(number1 * number2);
console.log("división:");
console.log(number2 / number1);

// Operador de asignación
console.log("valores de la variable unaVariableAAsignar:");
var unaVariableAAsignar = 2;
console.log(unaVariableAAsignar);
unaVariableAAsignar = "otro valor";
console.log(unaVariableAAsignar);
unaVariableAAsignar = ["uno", "dos", "tres"];
console.log(unaVariableAAsignar);

// identidad/igualdad
var unValorIgual = 2;
var otroValorIgualPeroString = "2";
console.log("identidad, igualdad:");
console.log("Sin chequeo de tipo:");
console.log(unValorIgual == otroValorIgualPeroString);
console.log("Con chequeo de tipo:");
console.log(unValorIgual === otroValorIgualPeroString);

// Negación, distinto (no igual)
console.log("Negación, distinto (no igual):");
console.log("Sin chequeo de tipo:");
console.log(unValorIgual != otroValorIgualPeroString);
console.log(!(unValorIgual != otroValorIgualPeroString));
console.log("Con chequeo de tipo:");
console.log(unValorIgual !== otroValorIgualPeroString);
console.log(!(unValorIgual !== otroValorIgualPeroString));

// Funciones útiles

// alert(texto)
// esta función sirve para disparar un popup en el navegador que se le mostrará al usuario informándole de algo con un botón "aceptar".
function Alertar(texto) {
    alert(texto);
}

// confirm(texto)
// realiza una pregunta al usuario y cuando éste presiona el botón de confirmar o cancelar retorna un true o false respectivamente.
function Preguntar() {
    var resultadoPregunta = confirm('está seguro que desea continuar?');

    if (resultadoPregunta) {
        Alertar("dijo que sí!!!!!");
    } else {
        Alertar("dijo que no!!!!!");
    }
}

// NaN (not a number)
// La función isNaN evalúa un argumento para determinar si es "NaN" (no es un número).
var notANumber = "esto no es un número";
var aNumber = "5522";

console.log("la variable notANumber ('" + notANumber + "') es NaN? " + isNaN(notANumber)); // ouput: la variable notANumber ('esto no es un número') es NaN? true
console.log("la variable aNumber ('" + aNumber + "') es NaN? " + isNaN(aNumber)); // ouput: la variable aNumber ('5522') es NaN? false

// parseFloat
var float1 = 1.2;
var float2 = "2.5";
var float3 = "5";

console.log("la variable float1 ('" + float1 + "') cuando se ejecuta parseFloat(float1): " + parseFloat(float1)); // output: la variable float1 ('1.2') cuando se ejecuta parseFloat(float1): 1.2
console.log("la variable float2 ('" + float2 + "') cuando se ejecuta parseFloat(float2): " + parseFloat(float2)); // output: la variable float2 ('2.5') cuando se ejecuta parseFloat(float2): 2.5
console.log("la variable float3 ('" + float3 + "') cuando se ejecuta parseFloat(float3): " + parseFloat(float3)); // output: la variable float3 ('5') cuando se ejecuta parseFloat(float3): 5
console.log("la variable notANumber ('" + notANumber + "') cuando se ejecuta parseFloat(notANumber): " + parseFloat(notANumber)); // output: la variable notANumber ('esto no es un número') cuando se ejecuta parseFloat(notANumber): NaN

// parseInt
var int1 = 1;
var int2 = "682";
var int3 = 1.5;

console.log("la variable int1 ('" + int1 + "') cuando se ejecuta parseInt(int1): " + parseInt(int1)); // output: la variable int1 ('1') cuando se ejecuta parseInt(int1): 1
console.log("la variable int2 ('" + int2 + "') cuando se ejecuta parseInt(int2): " + parseInt(int2)); // output: la variable int2 ('682') cuando se ejecuta parseInt(int2): 682
console.log("la variable int3 ('" + int3 + "') cuando se ejecuta parseInt(int3): " + parseInt(int3)); // output: la variable int2 ('682') cuando se ejecuta parseInt(int2): 682
console.log("la variable notANumber ('" + notANumber + "') cuando se ejecuta parseInt(notANumber): " + parseInt(notANumber)); // output: la variable notANumber ('esto no es un número') cuando se ejecuta parseInt(notANumber): NaN