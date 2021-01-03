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

function imprimirNombreYEdad(persona) {
  //Hola soy nombre y tengo edad años
  var { nombre } = persona,
    { edad } = persona;
  console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años`);
}

imprimirNombreYEdad(edu);
imprimirNombreYEdad(mun);
