let info = '{"produto":"spagheti","preco":42}';
console.log(typeof info);
let infoJson = JSON.parse(info);
console.log(typeof infoJson);
console.log(infoJson);
console.log(infoJson.preco);

let indices = "[1,4,8,12]"; // String
console.log(typeof indices);
let indicesJson = JSON.parse(indices);
console.log(typeof indicesJson);
console.log(indicesJson);

let empresa = {
  nome: "Restaurante",
  fundacao: 1980,
  filial: 2,
  regiao: "Leste",
};
let infoEmpresa = JSON.stringify(empresa, [("fundacao", "filial")]);
console.log(infoEmpresa);
let infoEmpresaParse = JSON.parse(
  JSON.stringify(empresa, [("fundacao", "filial")])
);
console.log(infoEmpresaParse);

let pratos = { p1: "Massas", p2: "Carnes" };
console.log(JSON.stringify(pratos));
