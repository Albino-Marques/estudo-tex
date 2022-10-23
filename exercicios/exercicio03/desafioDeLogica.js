/*
Dadas as variáveis:

numDaSorte, mensagem

Onde numDaSorte é um número aleatório resultado da chamada de uma função que parametriza outro número que tem como objetivo ser o mesmo do número sorteado. 

Desafio: 

1) - Escrever um programa que execute o número aleatório uma única vez.

2) - Chamar a função por intermédio do console do navegador, passando o número de palpite do número sorteado. 

3) - Escrever três alternativas para mensagens:
a) 'Tente um número menor'
b) 'Tente um número maior'
c) 'Parabéns você acertou'

4) - O limite de tentativas é 6. Quando as tentativas se esgotarem, escreva na mensagem: 
'Não foi dessa vez'.
*/

let numDaSorte, mensagem, acumulador;
let numAleatorio = parseInt(Math.random() * 100) + 1;
acumulador = 0;

function sorteio() {
  numDaSorte = parseInt(Math.random() * 100) + 1;
  return numDaSorte;
}

function palpite(numDigitado) {
  if (acumulador == 6) {
    mensagem = "Tentativas esgotadas!";
  } else {
    if (sorteio() < numDigitado) {
      mensagem = "Tente um número menor";
    } else if (sorteio() > numDigitado) {
      mensagem = "Tente um número maior";
    } else if (sorteio() == numDigitado) {
      mensagem = "Parabéns, você acertou.";
    } else {
      mensagem = "Não foi dessa vez!";
    }
  }
  acumulador++;
  return mensagem;
}

//console.log(palpite(numAleatorio));
