// a través de este método se pueden obtener los elementos dentro del DOM que utilizan la clase "cabeceraClaseSelector"

// en jQuery:
var cabeceraClaseSelector = $(".cabeceraClaseSelector");

console.log(cabeceraClaseSelector.text());

// en Javascript:
cabeceraClaseSelector = document.querySelector(".cabeceraClaseSelector");

console.log(cabeceraClaseSelector.innerText);

// en Javascript adicionalmente tenemos una función integrada en el objeto document que directamente hace la búsqueda por clase:
cabeceraClaseSelector = document.getElementsByClassName("cabeceraClaseSelector")[0];
// notar que en este caso no se incluye el . ya que la búsqueda SIEMPRE es por el valor de una clase

console.log(cabeceraClaseSelector.innerText);