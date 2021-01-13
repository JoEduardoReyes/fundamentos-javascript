class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
  }
  saludar(fn) {
    var { nombre, apellido } = this;
    console.log(
      `Hola, me llamo ${this.nombre} ${this.apellido} y mido ${this.altura}m`
    );
    if (fn) {
      fn(nombre, apellido, false);
    }
  }
  soyAlto() {
    return this.altura > 1.8;
  }
}

class Desarrollador extends Persona {
  saludar(fn) {
    var { nombre, apellido } = this;
    console.log(
      `Hola me llamno ${this.nombre} ${this.apellido} y soy desarrollador/a`
    );
    if (fn) {
      fn(nombre, apellido, true);
    }
  }
}

function responderSaludo(nombre, apellido, esDev) {
  console.log(`Buena dia ${nombre} ${apellido}`);
  if (esDev) {
    console.log(`No sabia que eres desarrollador/a`);
  }
}

var eduardo = new Persona("Eduardo", "Reyes", 1.77);
var erika = new Persona("Erika", "Luna", 1.65);
var arturo = new Desarrollador("Arturo", "Martines", 1.89);

eduardo.saludar();
erika.saludar(responderSaludo);
arturo.saludar(responderSaludo);
