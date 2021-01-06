var eduardo = {
  nombre: "Eduardo",
  apellido: "Reyes",
  edad: 22,
  peso: 112,
};

console.log(`Al inicio del año ${eduardo.nombre} pesa ${eduardo.peso}kg`);

const INCREMENTO_PESO = 0.3;
const DIAS_DEL_ANO = 365;

const aumentarDePeso = (persona) => (persona.peso += INCREMENTO_PESO);
const adelgazar = (persona) => (persona.peso -= INCREMENTO_PESO);
const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;

const META = eduardo.peso - 3;
var dias = 0;

while (eduardo.peso >= META) {
  if (comeMucho()) {
    aumentarDePeso(eduardo);
  }
  if (realizaDeporte()) {
    adelgazar(eduardo);
  }
  dias += 1;
}

console.log(`Pasaron ${dias} hasta que ${eduardo.nombre} perdio 3kg`);
console.log(
  `Al final del año ${eduardo.nombre} pesa ${eduardo.peso.toFixed(1)}kg`
);
