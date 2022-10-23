//Um interador é um operador que funciona com uma restrição, um limite.

let nomes = ["Albino", "Kauani", "Corrêa", "Lucas"];

nomes.forEach(function (n, i) {
  console.log(`Nome ${++i}: ${n}`);
}); //Método "forEach" para consumir dados de variáveis complexas.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let i = 0; i < 4; i++) {
  console.log(nomes[i]);
}

let j = 0;
for (; j < 20; j += 4) {
  console.log(j);
}

let k = 0;
for (; ; k += 4) {
  console.log(k);
  if (k >= 20) {
    break;
  }
}

let w = 0;
for (;;) {
  console.log(w);
  if (w >= 200) {
    break;
  }
  w += 60;
}

for (let n = 0; n < 10; n++, console.log(n)); // Super reduzida.
for (let n = 0; n < 5; n++, console.log(`-- ${n}`));
