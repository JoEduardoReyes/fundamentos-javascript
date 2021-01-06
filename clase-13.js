var eduardo = {
  nombre: "Eduardo",
  apellido: "Reyes",
  edad: 22,
  peso: 112,
};

console.log(`Al inicio del año ${eduardo.nombre} pesa ${eduardo.peso}kg`);

const INCREMENTO_PESO = 0.2;
const DIAS_DEL_ANO = 365;

const aumentarDePeso = (persona) => (persona.peso += INCREMENTO_PESO);
const adelgazar = (persona) => (persona.peso -= INCREMENTO_PESO);

for (var i = 1; i <= DIAS_DEL_ANO; i++) {
  var random = Math.random();
  if (random < 0.25) {
    aumentarDePeso(eduardo);
  } else if (random < 0.5) {
    adelgazar(eduardo);
  }
}

console.log(
  `Al final del año ${eduardo.nombre} pesa ${eduardo.peso.toFixed(1)}kg`
);
