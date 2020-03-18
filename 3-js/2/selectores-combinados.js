// Js ejemplos de selectores combinados

var ejemploSelectoresCombinados = $("div.clase1 a");
// Obtiene todos los anchor dentro de los div que utilicen la clase1
console.log("Selector 'div.clase1 a': " + ejemploSelectoresCombinados.text());

// esto mismo se puede obtener en dos partes:
ejemploSelectoresCombinados = $("div.clase1").find("a");
console.log("'$('div.clase1').find('a')': " + ejemploSelectoresCombinados.text());
// en el ejemplo hace un filtro de todos los div que utilicen la clase1 y luego se utiliza la función de jQuery "find(selector)" para hacer 
// una búsqueda con un selector sobre los elementos especificados.

ejemploSelectoresCombinados = $("div.clase1 a[href^='https://'].clase2");
// Obtiene todos los anchor dentro de los div que utilicen la clase1 que tengan un href que comience con https:// y utilicen la clase2
console.log("Selector 'div.clase1 a[href^='https://'].clase2': " + ejemploSelectoresCombinados.text());

// esto mismo se puede obtener en dos partes:
ejemploSelectoresCombinados = $("div.clase1").find("a[href^='https://'].clase2");
console.log("$('div.clase1').find('a[href^='https://'].clase2'): " + ejemploSelectoresCombinados.text());

/*
    conceptualmente se utiliza un espacio en el selector para indicar una separación en los criterios de búsqueda
    es por ello que podemos partir la consulta que hacemos en nuestros selectores donde haya espacios.
    Esto estará realizando una nueva búsqueda en el resultado encontrado.
    En detalles:
    Por ejemplo para la búsqueda anterior "div.clase1 a[href^='https://'].clase2"
    1 - realiza una búsqueda de todos los div que utilizan la clase 'clase1'.
    2 - dentro de todos los divs encontrados, busca los <a> que tengan un atributo href y el valor de éste 
    comience con "https://" y adicionalmente que utilicen la clase clase1
 */