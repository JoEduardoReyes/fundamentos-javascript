function Persona(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
}

Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
};

var Eduardo = new Persona("Eduardo", "Reyes");
var erika = new Persona("Erika", "Luna");
var arturo = new Persona("Arturo", "Perez");

Eduardo.saludar();
erika.saludar();
arturo.saludar();
