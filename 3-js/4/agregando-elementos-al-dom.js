function agregarBotonAntesDeElemento(idElemento) {
    var elemento = document.getElementById(idElemento);

    var boton = document.createElement("button");

    boton.className = "btn btn-primary";
    boton.innerText = "un botón";
    boton.onclick = function () {
        alert("presionó el botón!");
    }

    elemento.prepend(boton);
}

function agregarSpanDespuesDelElemento(idElemento) {
    var elemento = document.getElementById(idElemento);

    var span = document.createElement("span");

    span.className = "text-danger";
    span.innerText = "un span agregado";

    elemento.append(span);
}

function agregarAlertDespuesDelElemento(idElemento) {
    var elemento = document.getElementById(idElemento);

    var alert = document.createElement("div");

    alert.className = "alert alert-danger";
    alert.innerText = "Esta es una alerta de bootstrap";

    elemento.append(alert);
}

function agregarInnerText(idElemento, texto) {
    var elemento = document.getElementById(idElemento);
    elemento.innerText = texto;
}

function agregarInnerHTML(idElemento, html) {
    var elemento = document.getElementById(idElemento);
    elemento.innerHTML = html;
}