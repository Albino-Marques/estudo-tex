//O Laço while só possui uma determinada condição.
let x = 0;
let animais = ["Leão", "Avestruz", "Golfinho"];
let y = 0;

while (y < animais.length) {
  console.log(animais[y]);
  y++;
}

while (x < 10) {
  console.log(`x : ${x}`);
  x++;
}
console.log(x); //10

do {
  console.log(`x : ${x}`);
  x++;
} while (x < 4);
