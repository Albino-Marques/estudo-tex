/*
Dadas as variáveis:
d1, d2, sorteio1, sorteio2, resultado, mensagem

Onde sorteio1 e sorteio2, individualmente, devem receber um número aleatório de 1 a 6.

Desafio: Escrever um programa que imprima os seguintes resultador dentro de um loop de (6) seis interações. 

1) - A soma dos números aleatórios atribuídos a d1 e d2.
2) - O resultado se a soma é PAR ou ÍMPAR
3) - Cada vez que o sistema achar um número PAR, deve ser acumular um valor. 
4) - Se o valor de vezes do resultado é maior ou igual a 4, escreve na mensagem: "Você ganhou!"  
5) - Caso contrário, escreva na mensagem: "Não foi dessa vez :("

*/

let d1, d2, sorteio1, sorteio2, mensagem
let cont = 0

function sorteio() {
    sorteio1 = parseInt(Math.random() * 6 + 1)
    sorteio2 = parseInt(Math.random() * 6 + 1)
    d1 = sorteio1
    d2 = sorteio2
    resultado = d1 + d2
    resultado % 2 == 0 ? (mensagem = 'PAR') : (mensagem = 'IMPAR')
    mensagem == 'PAR' ? cont++ : null
    console.log(
        `A soma dos números ${d1} e ${d2} é ${resultado} | Este número é um número ${mensagem} | A quantidade em que o resultado foi PAR é de ${cont}`
    )
}

function sorteiaOsNumeros() {
    for (let i = 0; i < 6; i++) {
        sorteio()
        if (cont >= 4) {
            console.log('Parabéns, você ganhou!')
        } else {
            console.log('Infelizmente não foi dessa vez.')
        }
    }
}

sorteiaOsNumeros()
