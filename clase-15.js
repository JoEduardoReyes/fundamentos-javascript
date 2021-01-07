var contador = 0;

const llueve = () => Math.random() < 0.25;

do {
  contador++;
} while (!llueve());

var veces = () => (contador === 1 ? "vez" : "veces");

console.log(`fui a ver si llovia ${contador} ${veces()}`);
