var nombre = "Eduardo",
  apellido = "Reyes";

var nombreEnMayusculas = nombre.toUpperCase();
var apellidoEnMinusculas = apellido.toLowerCase();

var primeraLetraDelNombre = nombre.charAt(0);
var cantidadDeLetrasDelNombre = nombre.length;

var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`;

var str = nombre.substr(1, 2);

var ultimaLetraDelNombre = nombre.substr(cantidadDeLetrasDelNombre - 1);
