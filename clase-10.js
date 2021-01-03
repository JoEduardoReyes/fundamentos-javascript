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

imprimirProfesiones(eduardo);
