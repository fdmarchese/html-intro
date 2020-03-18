function focoEnElInput(input) {
    input.style.color = "red";
    input.style.padding = "10px";
    input.style.fontSize = "18px";
}

function fueraFocoDelInput(input) {
    input.style.color = "black";
    input.style.padding = "0px";
    input.style.fontSize = "16px";
}

var botonConEventos = document.getElementById('botonConEventos');

botonConEventos.onmouseover = function () {
    botonConEventos.classList.toggle('btn-dark');
    botonConEventos.classList.toggle('btn-danger');
    botonConEventos.innerHTML = "el mouse est&aacute; dentro del bot&oacute;n";
}

botonConEventos.onmouseout = function () {
    botonConEventos.classList.toggle('btn-dark');
    botonConEventos.classList.toggle('btn-danger');
    botonConEventos.innerHTML = "el mouse sali&oacute; del bot&oacute;n";
}