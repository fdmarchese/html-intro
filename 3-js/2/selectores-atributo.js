/* 
    Attribute Equals Selector [name=”value”]
    Selecciona elementos que tienen el atributo con el valor exactamente igual al criterio.
 */
var selectorPorAtributo = $("[href='https://www.google.com']");
console.log('Selector [href="https://www.google.com"]: ' + selectorPorAtributo.text());
// asigna en la variable selectorPorAtributo todos los elementos que tengan un atributo href con el valor https://www.google.com.

/* 
    Attribute Contains Prefix Selector [name|=”value”]
    Selecciona elementos que tienen el atributo especificado exactamente igual o con el siguiente caracter con un guión medio "-".
*/
selectorPorAtributo = $("a[hreflang|='en']");
console.log('Selector [hreflang|="en"]: ' + selectorPorAtributo.text());

/*
    Attribute Contains Selector [name*=”value”]
    Selecciona elementos que tienen el atributo especificado y contienen el valor provisto como parte del valor del elemento
*/
selectorPorAtributo = $("[href*='google']");
console.log('Selector [href*="google"]: ' + selectorPorAtributo.text());

/*
    Attribute Contains Word Selector [name~=”value”]
    Selecciona elementos que tienen el atributo especificado y contienen el valor
    como palabra, o sea, exacto o delimitado por espacios.
*/
selectorPorAtributo = $("[class~='clase2']");
console.log('Selector [class~="clase2"]: ' + selectorPorAtributo.text());

/*
    Attribute Ends With Selector [name$=”value”]
    Selecciona elementos que tienen el atributo especificado con un valor finalizado con el valor provisto. 
    NOTA: La comparación es case sensitive.
*/
selectorPorAtributo = $("[href$='.com']");
console.log('Selector [href$=".com"]: ' + selectorPorAtributo.text());

/*
    Attribute Not Equal Selector [name!=”value”]
    Selecciona los elementos que no tienen el atributo especificado o lo tienen pero con un valor diferente al provisto.
*/
selectorPorAtributo = $("a[target!='_blank']");
console.log('Selector a[target!="_blank"]: ' + selectorPorAtributo.text());

/*
    Attribute Starts With Selector [name^=”value”]
    Selecciona elementos que tienen el atributo especificado con un valor comenzando con el valor provisto. 
*/
selectorPorAtributo = $("[href^='https://']");
console.log('Selector [href^="https://"]: ' + selectorPorAtributo.text());
