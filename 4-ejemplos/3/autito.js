// Valores de las teclas de flechas en el teclado
const arrowLeft = 37;
const arrowUp = 38;
const arrowRight = 39;
const arrowDown = 40;

const width = window.innerWidth - 45;
const height = window.innerHeight - 39;

const crashStyle = "jello";
const stopStyle = "rubberBand";

var punto = document.getElementById("punto");
var currentSpeed = 0;

window.onkeydown = function (e) {
    punto.classList.remove("text-danger");
    punto.classList.remove("text-dark");
    punto.classList.remove("animated");
    punto.classList.remove(stopStyle);
    punto.classList.remove(crashStyle);
    punto.classList.add("text-success");

    if (this.currentSpeed < 10) {
        currentSpeed += 1
    }

    let puntoTop = parseInt(this.punto.style.top.replace("px", ""));
    let puntoLeft = parseInt(this.punto.style.left.replace("px", ""));

    switch (e.keyCode) {
        case arrowLeft:
            if (puntoLeft < 2) {
                this.AddCrashClass();
                return;
            }
            puntoLeft -= this.currentSpeed;
            break;
        case arrowUp:
            if (puntoTop < 2) {
                this.AddCrashClass();
                return;
            }
            puntoTop -= this.currentSpeed;
            break;
        case arrowRight:
            if (puntoLeft > width) {
                this.AddCrashClass();
                return;
            }
            puntoLeft += this.currentSpeed;
            break;
        case arrowDown:
            if (puntoTop > height) {
                this.AddCrashClass();
                return;
            }
            puntoTop += this.currentSpeed;
            break;
    }

    this.punto.style.top = puntoTop + "px";
    this.punto.style.left = puntoLeft + "px";

    this.clearTimeout(myTimer);
    myTimer = this.setTimeout(resetSpeed, 500);
}

var resetSpeed = function () {
    currentSpeed = 0;
    punto.classList.add("text-dark");
    punto.classList.add("animated");
    punto.classList.add(stopStyle);
    punto.classList.remove("text-success");
};

var myTimer;

function AddCrashClass() {
    punto.classList.add("animated");
    punto.classList.add(crashStyle);
    punto.classList.remove("text-success");
    punto.classList.add("text-danger");
}