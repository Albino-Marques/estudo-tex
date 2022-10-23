let a = "a";
let b = "b";
let h = "h";
let y = "y";
console.log(b > a); //True
console.log(b < a); //False
console.log(h < y); //True
//Esses resultados se dão pois o JS reconhece ordem alfabética.

let frase = "Lógica com JavaScript - Treine sua lógica.";
let frase2 = "   Pratica e Repetição";
let subfrase = frase.substring(0, 6); //O MÉTODO SUBSTRING DELIMITA UM "PERÍMETRO" PARA A STRING, NO CASO DESSA FRASE, COMEÇA NA PRIMEIRA LETRA (L) E TERMINA NA QUINTA LETRA ONDE A 6 SERIA UM LIMITE ONDE NÃO SERÁ CHEGADO NEM ULTRAPASSADO.
let subfrase2 = frase.substring(11);
let txt = frase.replace("Lógica", "Aprendendo");
let txt1 = frase.replace(/JAVASCRIPT/i, "Programação");
let txt2 = frase.replace(/lógica/gi, "Programação");
let txt3 = frase2.trim();
let txt4 = frase.trim().toUpperCase();

console.log(frase);
console.log(subfrase);
console.log(subfrase2);
console.log(txt);
console.log("================");
console.log(txt1);
console.log(txt2);
console.log(frase2);
console.log(txt3);
console.log(txt4);

///////////////////////////////////////////////

let mensagem = "Treinamento de fullStack";
let email = "albinomarques01@gmail.com";
let buscaArroba = email.indexOf("@"); // O método index pode ser usado para marcar um PONTO em uma string.
let nomeUser = email.substring(0, buscaArroba);

console.log(nomeUser);

//////////////////

let txt5 = frase2.concat(" - ", mensagem); // faz a concatenação
console.log(txt5);

let txt6 = mensagem.padStart(mensagem.length + 2, ">"); // Serve para adicionar no início da String a quantidade informada, dos caracteres informados. Usando o .padEnd() também é possível fazer isso no final.
console.log(txt6);
//Com números, é necessário convertê-los para string.

let alfa = "abcdefghijklmnopqrstuvwxyz";
console.log(alfa[3]); // Toda String é considerada um "Array", logo, buscando pela posição de itens, é possível saver o que ocupa esta posição.