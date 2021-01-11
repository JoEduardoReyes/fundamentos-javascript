function heredaDe(prototipoHijo, protoripoPadre) {
  var fn = function () {};
  fn.prototype = protoripoPadre.prototype;
  prototipoHijo.prototype = new fn();
  prototipoHijo.prototype.constructor = prototipoHijo;
}

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
  return this.altura > 1.8;
};

function Desarrollador(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
}

heredaDe(Desarrollador, Persona);

Desarrollador.prototype.saludar = function () {
  console.log(
    `Hola me llamno ${this.nombre} ${this.apellido} y soy desarrollador/a`
  );
};

// var eduardo = new Persona("Eduardo", "Reyes", 1.77);
// var erika = new Persona("Erika", "Luna", 1.65);
// var arturo = new Persona("Arturo", "Martines", 1.89);
