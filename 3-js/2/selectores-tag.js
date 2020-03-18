// a través de este método se pueden obtener los elementos dentro del DOM que son del tipo de elemento especifico => HTML tag

// en jQuery obtenemos todos los elementos con el tag h2 en el documento:
var cabeceraTagSelector = $("h2");

// Para mostrar por consola solamente mostramos el contenido de texto del tercer elemento.
// Para hacer eso se accede al tercer elemento a través de la función eq(n) y con el parámetro se 
// indica el índice del elemento a acceder dentro de la colección.
console.log(cabeceraTagSelector.eq(2).text());

// en Javascript:
cabeceraTagSelector = document.querySelectorAll("h2");

console.log(cabeceraTagSelector[2].innerText);

// en Javascript adicionalmente tenemos una función integrada en el objeto document que directamente hace la búsqueda por tag:
cabeceraTagSelector = document.getElementsByTagName("h2");

console.log(cabeceraTagSelector[2].innerText);