let professor = '{"nome": "Roque Fernando", "dataNascimento": 1980}';
try {
  let docente = JSON.parse(professor);
} catch (error) {
  //console.log(error.message);//Essa é a mensagem padrão.
  console.log("Erro na composição do JSON");
}
//Então o "try" tenta pegar determinados dados de dentro de algo como JSON. Caso ele consiga, perfeito, vida que segue. Entretanto, se ele encontrar problemas nisso ele reportará o erro que ocorre no "catch"!

let a = 15;
try {
  //typeof(a) !== "number" ? throw "isso não parece um número!" : null
  if (typeof a !== "number") throw "Isso não parece um número";
  if (a > 20) throw "Esse número está acima do padrão.";
} catch (error) {
  console.log(error);
}

//Já o "throw" pode tratar as informações para cada situação de erro ele poder gerar uma nova informação e situação específica.

function controlException(msg) {
  this.msg = msg;
  this.info = "Validação: ";
}

function mesAtual(m) {
  m = m - 1;
  let meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  if (meses[m] !== undefined) {
    return meses[m];
  } else {
    throw new controlException("Verificando a entrada de dados...");
  }
}

let mes = 11;
let nomeMes;

try {
  nomeMes = mesAtual(mes);
} catch (error) {
  nomeMes = "Mês inexistente";
  console.log(error.info, error.msg);
}

console.log(nomeMes);

//O "try" é onde se faz o teste para saber se foi possível obter as informações solicitadas.
//O "catch" é onde caso de erro, caíra o código para ser resolvido ou anunciar o erro.
//O "throw" é a forma de tratar os erros, e utilizá-los e editá-los mais facilmente.
