class Persona {
    constructor(nombre, edad, profesion) {
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }
    saludar = function () {
        alert('Buen día ' + this.nombre + '!!!');
    }
}

var juan = new Persona('Juan', 25, 'Programador');
var carlos = new Persona('Carlos', 30, 'Abogado');

// Se adicionan nuevas propiedades y métodos a los objetos
juan.pais = 'Argentina';
carlos.apellido = 'Sánchez';
carlos.meGustaMiEmpleo = function () {
    alert('algunos días más que otros');
}

function saludarJuan() {
    juan.saludar();
}

function saludarCarlos() {
    carlos.saludar();
}

console.log(juan);
console.log(carlos);



class Rectangulo {
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }
}

var Poligono = class Poligono {
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }
}


class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    interactuar() {
        console.log(this.nombre + ' interactua');
    }
}

class Perro extends Animal {
    interactuar() {
        console.log(this.nombre + ' ladra');
    }
}

class Gato extends Animal {
    interactuar() {
        console.log(this.nombre + ' maulla');
    }
}

var perro = new Perro('pichichus');
var gato = new Gato('michifuz');

console.log(perro.interactuar());
console.log(gato.interactuar());


