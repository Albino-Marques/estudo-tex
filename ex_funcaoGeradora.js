function* ex01(num) {
  yield num;
  yield num + 10;
  yield (num += 5);
}

let teste01 = ex01(5);
console.log(teste01.next().value);
console.log(teste01.next().value);
console.log(teste01.next().value);

function* idIncremento() {
  yield (index = 0);
  while (true) yield index++;
}
let indexIncremento = idIncremento();
console.log(indexIncremento.next());
console.log(indexIncremento.next());
console.log(indexIncremento.next());
console.log(indexIncremento.next());
console.log(indexIncremento.next());

function* geradorExterno(num) {
  // O valores dessa função não irão intervir na função principal.
  yield num + 1;
  yield num + 2;
  yield num + 3;
}

function* geradorPrincipal(num) {
  yield num;
  yield* geradorExterno(num);
  yield num * 2;
}

let ger = geradorPrincipal(5);
console.log(ger.next().value);
console.log(ger.next().value);
console.log(ger.next().value);
console.log(ger.next().value);
console.log(ger.next().value);
console.log(ger.next().value);
console.log(ger.next().value);
console.log(ger.next().value);
console.log(ger.next().value);
console.log(ger.next().value);
