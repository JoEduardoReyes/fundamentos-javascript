class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
  }
  saludar() {
    console.log(
      `Hola, me llamo ${this.nombre} ${this.apellido} y mido ${this.altura}m`
    );
  }
  soyAlto() {
    return this.altura > 1.8;
  }
}

class Desarrollador extends Persona {
  saludar() {
    console.log(
      `Hola me llamno ${this.nombre} ${this.apellido} y soy desarrollador/a`
    );
  }
}

// var eduardo = new Persona("Eduardo", "Reyes", 1.77);
// var erika = new Persona("Erika", "Luna", 1.65);
// var arturo = new Persona("Arturo", "Martines", 1.89);
