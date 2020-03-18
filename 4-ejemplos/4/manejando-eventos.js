function mostrarCoordenadas(event) {
    alert(
        "X: " + event.clientX + "\n" +
        "Y: " + event.clientY + "\n"
    );
}

document.body.onmousemove = function(event) {
document.getElementById('alertCoordenadas').innerText = 
    "X: " + event.clientX + "\n" +
    "Y: " + event.clientY + "\n";
}
