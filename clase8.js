var edu = {
  nombre: "Eduardo",
  apeliido: "Reyes",
  edad: 22,
};

var mun = {
  nombre: "Fabiola",
  apeliido: "Reyes",
  edad: 18,
};

function imprimirNombreEnMayuscula(persona) {
  // var nombre = persona.nombre
  var { nombre } = persona;
  console.log(nombre.toUpperCase());
}

imprimirNombreEnMayuscula(edu);
imprimirNombreEnMayuscula(mun);
// imprimirNombreEnMayuscula({ nombre: "pepito" });
// imprimirNombreEnMayuscula();

function cumpleanos(persona) {
  return {
    ...persona,
    edad: persona.edad + 1,
  };
}
