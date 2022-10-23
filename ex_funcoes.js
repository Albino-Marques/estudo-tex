//[x] Funções Simples:
//Funções simples, são funções sem parâmetros que não retornam nada, ou seja, não possuem um valor estipulado para retornar, mas podem conter blocos extras e complexos internas ao seu escopo.
let x, y, mensagem, nome;
x = 34;
y = 12;
//mensagem = 'Front End'
mensagem = "Back End";

function soma() {
  console.log(`X + Y: ${x + y}`);
}
soma();

function info() {
  if (mensagem == "Back End") {
    nome = "Albino";
    let imprime = `Olá ${nome}, bem vindo ao treinamento para ${mensagem}`;
    console.log(imprime);
  } else if (mensagem == "Front End") {
    nome = "Albino";
    let imprime = `Olá ${nome}, bem vindo ao treinamento para ${mensagem}`;
    console.log(imprime);
  }
}
info();

//[x] Funções de Retorno:
//Funções de Retorno, como o nome já sugere, retornam valores. Esses valores podem ser usado diretamente fora do escopo da função ao serem evocados. Uma função sem RETORNO (return) irá ter o seu valor como tipo primário undefined, pois não está retornando um valor que possa ser considerado.

function saudacao() {
  let bemVindo = "Olá, vamos começar nossos estudos.";
  return bemVindo;
}
console.log(saudacao());

function multiplica() {
  return `x*y : ${x * y}`;
}
console.log(multiplica());

//[x] Funções com Parâmetros:
//Funções com parâmetros recebem dentro dos Parenteses, esses parâmetros podem conter informações cruciais para o escopo da função.

function calculo(x, y) {
  console.log(`${x}/${y} = ${x / y}`);
}
calculo(10, 5); //Onde aqui, dentro dos parenteses, é possível passar os parâmetros que serão usados para substituir x e y na função. Portanto a saída desta função será 2.

function calculo(x, y) {
  return x / y;
}
console.log(calculo(10, 5));

function calculadora(op, x, y, mensagem) {
  switch (op) {
    case 1:
      console.log(`${x} + ${y} : ${x + y}`);
      mensagem = "Soma";
      console.log(mensagem);
      break;
    case 2:
      console.log(`${x} - ${y} : ${x - y}`);
      mensagem = "Subtrai";
      console.log(mensagem);
      break;
    case 3:
      console.log(`${x} * ${y} : ${x * y}`);
      mensagem = "Multiplica";
      console.log(mensagem);
      break;
    case 4:
      console.log(`${x} / ${y} : ${x / y}`);
      mensagem = "Divide";
      console.log(mensagem);
      break;
    case 5:
      console.log(`${x} ** ${y} : ${x ** y}`);
      mensagem = `Eleva a ${y} potência.`;
      console.log(mensagem);
      break;
    default:
      console.log("Por favor, digite um número válido de um a 5.");
  }
}

calculadora(5, 5, 2);

//[x] Funções Encadeadas:
//Funções encadeadas são funções dentro de funções.
//Para que seja possível usar corretamente as funções encadeadas, as funções internas devem RETORNAR (com o return) o necessário. Esse retorno se faz dentro da Função principal. E a evocação da mesma é "Nome da função principal(Parâmetros da função principal)(Parâmetros da função secundária. )"

function livraria(nome) {
  console.log(`Nossa livraria se chama ${nome}`);
  function autor(escritor) {
    console.log(
      `Convidamos para a noite de autógrafos do escritor ${escritor}.`
    );
  }
  return autor;
}

livraria("Ágora")("Sócrates");

function A(x) {
  console.log(`X = ${x}`);
  function B(y) {
    console.log(`X = ${x} e Y = ${y}`);
    function C(z) {
      console.log(`X = ${x}, Y= ${y} e Z=${z}`);
    }
    return C;
  }
  return B;
}
A(1)(5)(3);
