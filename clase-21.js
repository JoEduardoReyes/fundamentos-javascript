function Persona(nombre, apellido, altura) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.altura = altura;
}

Persona.prototype.saludar = function () {
  console.log(
    `Hola, me llamo ${this.nombre} ${this.apellido} y mido ${this.altura}m`
  );
};

Persona.prototype.soyAlto = function () {
  if (this.altura >= 1.8) {
    console.log(`${this.nombre} es una persona alta`);
  } else {
    console.log(`${this.nombre} es una persona baja`);
  }
};

var Eduardo = new Persona("Eduardo", "Reyes", 1.77);
var erika = new Persona("Erika", "Luna", 1.65);
var arturo = new Persona("Arturo", "Perez", 1.89);

Eduardo.saludar();
erika.saludar();
arturo.saludar();

Eduardo.soyAlto();
erika.soyAlto();
arturo.soyAlto();

// REto, agregar saludo y decir si es alto o no
