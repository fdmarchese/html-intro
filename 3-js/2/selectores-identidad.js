// a través de este método se puede obtener el elemento dentro del DOM con el id con valor "cabeceraIdSelector"

// en jQuery:
var cabecera = $("#cabeceraIdSelector");

console.log(cabecera.text());

// en Javascript:
cabecera = document.querySelector("#cabeceraIdSelector");

console.log(cabecera.innerText);

// en Javascript adicionalmente tenemos una función integrada en el objeto document que directamente hace la búsqueda por id:
cabecera = document.getElementById("cabeceraIdSelector");
// notar que en este caso no se incluye el # ya que la búsqueda SIEMPRE es por el valor del atributo id

console.log(cabecera.innerText);