/*
Exercício: 

Dadas as variáveis e seus valores

a1=3, nome=Pedro

a2=4, nome=Maria

a3=2, nome=Juliana

a4=2, nome=Fernando

a5=1, nome=Rita

a6=5, nome=Roque

Onde a1 até a6 representam a nota obtida por cada respectivo aluno após uma prova que teve como pontuação máxima 5 pontos.

Desafio: Escrever um programa que imprima os seguintes resultados:

1. [X] A média das dotas dos alunos
2. [X] A taxa de acerto (porcentagem)
3. [X] O nome de um aluno aleatoriamente
4. [X] Os nomes de alunos com notas menor que 3 com status “Reforço”
5. [X] Os nomes de alunos com nota maior que 4 com Status “Estágio”
*/

let notas = `{
    "notas": [
      {
        "aluno": "Pedro",
        "nota": 3
      },
      {
        "aluno": "Maria",
        "nota": 4
      },
      {
        "aluno": "Juliana",
        "nota": 2
      },
      {
        "aluno": "Fernando",
        "nota": 2
      },
      {
        "aluno": "Rita",
        "nota": 1
      },
      {
        "aluno": "Roque",
        "nota": 5
      }
    ]
  }
  `;

let alunosJson = JSON.parse(notas);
let notasJson = JSON.parse(notas);
let soma = 0;

for (let i = 0; i < notasJson["notas"].length; i++) {
  const nota = notasJson["notas"][i]["nota"];
  //console.log(nota);
  soma = soma + nota;
}

const contador = parseInt(Math.random() * alunosJson["notas"].length);
const media = (soma / notasJson["notas"].length).toFixed(2);
const porcentagem = ((media / 5) * 100).toFixed(2);
const alunoAleatorio = notasJson["notas"][contador]["aluno"];

function verificaNotas() {
  for (let i = 0; i < notasJson["notas"].length; i++) {
    const nota = notasJson["notas"][i]["nota"];
    //console.log(nota);
    if (nota < 3) {
      console.log(
        `4) [X] O aluno(a) ${notasJson["notas"][i]["aluno"]} tirou ${notasJson["notas"][i]["nota"]}, e está em Reforço!`
      );
    } else if (nota > 4) {
      console.log(
        `5) [X] O aluno(a) ${notasJson["notas"][i]["aluno"]} tirou ${notasJson["notas"][i]["nota"]}, e está aprovado para o Estágio!`
      );
    } else {
      console.log(
        `Extra) [X] O aluno(a) ${notasJson["notas"][i]["aluno"]} tirou ${notasJson["notas"][i]["nota"]}, nota mediana.`
      );
    }
  }
}

//Saída no Terminal/Console - Output

console.log(`1) [X] A média geral dos alunos foi: ${media}`);
console.log(
  `2) [X] A porcentagem de acerto dos alunos foi de: ${porcentagem}%`
);
console.log(`3) [X] Um aluno aleatório: ${alunoAleatorio}`);
verificaNotas();
