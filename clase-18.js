var sacha = {
  nombre: "Sacha",
  apellido: "Lifszyc",
  altura: 1.72,
};

var alan = {
  nombre: "Alan",
  apellido: "Perez",
  altura: 1.86,
};

var martin = {
  nombre: "Martin",
  apellido: "Gomez",
  altura: 1.85,
};

var dario = {
  nombre: "Dario",
  apellido: "Juarez",
  altura: 1.71,
};

var vicky = {
  nombre: "Vicky",
  apellido: "Zapata",
  altura: 1.56,
};

var paula = {
  nombre: "Paula",
  apellido: "Barros",
  altura: 1.76,
};

const ALTURA_MEDIA = 1.75;
const esAlta = ({ altura }) => altura > ALTURA_MEDIA;
const esBaja = ({ altura }) => altura < ALTURA_MEDIA;

var personas = [sacha, alan, martin, dario, vicky, paula];

var personasAltas = personas.filter(esAlta);
var personasBajas = personas.filter(esBaja);
// var personasAltas = personas.filter(function (persona) {
//   return persona.altura > 1.8;
// });
for (var i = 0; i < personasAltas.length; i++) {
  console.log(
    `${personasAltas[i].nombre} mide ${personasAltas[i].altura}m y es considerada alta`
  );
}
for (var i = 0; i < personasBajas.length; i++) {
  console.log(
    `${personasBajas[i].nombre} mide ${personasBajas[i].altura}m y es considerada baja`
  );
}
