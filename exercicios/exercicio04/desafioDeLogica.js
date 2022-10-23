let a, b, c, aux;

a = 12;
b = 45;
c = 7;
aux = 0;
if (b > a) {
  aux = a;
  a = b;
  b = aux;
}
if (c > a) {
  aux = a;
  a = c;
  c = aux;
}
if (c > b) {
  aux = b;
  b = c;
  c = aux;
}

console.log(`Desafio da ordem decrescente: A = ${a}, B = ${b} e C = ${c}`);

let a1, b1, c1, ac, soma;

a1 = 28;
b1 = 12;
c1 = 2;
ac = 10;

for (let i = 0; i < 5; i++) {
  a1 % 2 == 0 ? (ac += 2) : null;
}

soma = a1 + b1 + c1;
if (soma > 30) {
  a1 -= ac;
  b1 -= a1;
  c1 -= b1;
}
console.log(a1, b1, c1, ac);
