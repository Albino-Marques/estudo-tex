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
const numeroQuestoes = 5;
const contador = parseInt(Math.random() * alunosJson["notas"].length);
const alunoAleatorio = notasJson["notas"][contador]["aluno"];

function somaNotas() {
  for (let i = 0; i < notasJson["notas"].length; i++) {
    const nota = notasJson["notas"][i]["nota"];
    //console.log(nota);
    soma = soma + nota;
  }
  return soma;
}

function media() {
  return (soma / notasJson["notas"].length).toFixed(2);
}

function taxaDeAcerto() {
  return (media() / numeroQuestoes) * 100;
}

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

// Saídas no Terminal - Output

console.log(
  `1) [X] O somatório das notas é ${somaNotas()}, sendo média geral dos alunos foi: ${media()}`
);

console.log(
  `2) [X] A porcentagem de acerto dos alunos foi de: ${taxaDeAcerto()}%`
);

console.log(`3) [X] Um aluno aleatório: ${alunoAleatorio}`);

verificaNotas();

/////////////////////////////////////////////////////////////
