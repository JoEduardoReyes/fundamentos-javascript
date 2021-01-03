var eduardo = {
  nombre: "Eduardo",
  apellido: "Reyes",
  edad: "22",
  ingeniero: false,
  cocinero: false,
  cantante: true,
  DJ: false,
  guitarrista: false,
  dron: false,
};
var juan = {
  nombre: "juan",
  apellido: "perez",
  edad: "13",
};

function imprimirProfesiones(persona) {
  console.log(`${persona.nombre} es:`);
  if (persona.ingeniero) {
    console.log(` Ingeniero`);
  } else {
    console.log(`No es ingeniero`);
  }
  if (persona.cocinero) {
    console.log(` cocinero`);
  }
  if (persona.cantante) {
    console.log(` cantante`);
  }
  if (persona.DJ) {
    console.log(` DJ`);
  }
  if (persona.guitarrista) {
    console.log(` guitarrista`);
  }
  if (persona.dron) {
    console.log(` piloto de dron`);
  }
}

// imprimirProfesiones(eduardo);

const MAYORIA_DE_EDAD = 18;

// const esMayorDeEdad = function (persona) {
//   return persona.edad >= MAYORIA_DE_EDAD;
// };

const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD;
//esta funcion solo retorna un valor

function imprimirSiEsMayorDeEdad(persona) {
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`);
  } else {
    console.log(`${persona.nombre} es menor de edad`);
  }
}

function permitirAcceso(persona) {
  if (!esMayorDeEdad(persona)) {
    console.log("Acesso Denegado");
  }
}
