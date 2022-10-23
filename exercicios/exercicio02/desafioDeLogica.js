/*
Dadas as variáveis:
d1, d2, sorteio1, sorteio1, resultado, mensagem

Onde sorteio1 e sorteio2, individualmente, devem receber um número aleatório de 1 a 6.

Desafio: Escrever um programa que imprima os seguintes resultador dentro de um loop de (6) seis interações. 

1) - A soma dos números aleatórios atribuídos a d1 e d2.
2) - O resultado se a soma é PAR ou ÍMPAR
3) - Cada vez que o sistema achar um número PAR, deve ser acumular um valor. 
4) - Se o valor de vezes do resultado é maior ou igual a 4, escreve na mensagem: "Você ganhou!"  
5) - Caso contrário, escreva na mensagem: "Não foi dessa vez :("

*/

let d1, d2, sorteio1, sorteio2, resultado, mensagem, acumula;
acumula = 0;

function jogo() {
  sorteio1 = parseInt(Math.random() * 6) + 1;
  sorteio2 = parseInt(Math.random() * 6) + 1;
  d1 = sorteio1;
  d2 = sorteio2;
  soma = d1 + d2;
  soma % 2 == 0 ? (mensagem = "PAR") : (mensagem = "ÍMPAR");
  mensagem == "PAR" ? acumula++ : null;
  console.log(
    ` ${sorteio1} + ${sorteio2} = ${soma} : ${mensagem} - Quantidade de PAR: ${acumula}`
  );
}

for (let i = 0; i < 6; i++) {
  jogo();
  acumula >= 4
    ? console.log("Parabéns, você ganhou!")
    : console.log("Aaa, infelizmente não foi dessa vez! :(");
}
