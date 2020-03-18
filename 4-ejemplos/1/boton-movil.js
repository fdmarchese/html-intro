var boton = document.querySelector("#botonMovil");

boton.onfocus = function() {
    boton.blur();
}

boton.onmouseover = function() {
    boton.style.position = "absolute";
    let botonWidth = boton.style.width.replace("px", "");
    let botonHeight = boton.style.height.replace("px", "");
    let width = window.innerWidth - botonWidth;
    let height = window.innerHeight - botonHeight;

    let newWidth = Math.random() * width;
    let newHeight = Math.random() * height;
    
    boton.style.top = newHeight + "px";
    boton.style.left = newWidth + "px";
}
