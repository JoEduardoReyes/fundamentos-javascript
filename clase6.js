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

function imprimirNombreEnMayuscula({ nombre }) {
  console.log(nombre.toUpperCase());
}

imprimirNombreEnMayuscula(edu);
imprimirNombreEnMayuscula(mun);
imprimirNombreEnMayuscula({ nombre: "pepito" });
imprimirNombreEnMayuscula();
