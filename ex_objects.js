//Objeto é uma coleção de dados, que pode conter praticamente todos os tipos de dados, como até mesmo outros objetos.

let imovel = {
  tipo: ["Casa", "Apartamento", "Sala Comercial"], //Membro do objeto
  construtora: "Geral do Bairro",
  seguradora: "Jesus te Espera",
  slogan: function (t) {
    console.log(`Venha conhecer ${this.tipo[t]} decorado.`); //A palavra "this" é para ter segurança de saber que a variável que está chamando está no objeto.
  },
  beneficios: {
    administracao: "Imobiliária",
    seguroResidencia: true,
    localizacao: "Bairro Nobre.",
  },
};

console.log(typeof imovel);
console.log(imovel.constructor);
console.log(imovel);
console.log(imovel.construtora);
console.log(imovel.tipo);
console.log(imovel.tipo[1]);
console.log(imovel["seguradora"]);
imovel.slogan(2);
console.log(imovel.beneficios.localizacao);
if (imovel.beneficios.seguroResidencia) {
  console.log(
    `Este imóvel possuí Seguro Residência e se localiza em ${imovel.beneficios.localizacao}`
  );
} else {
  console.log(`Este imóvel não possui Seguro Residência.`);
}

console.log("Nossas opções:");
imovel.tipo.forEach(function (v, i) {
  console.log(`Opção ${++i} - ${v}`);
});
