let av1, av2, av3, av4, av5;
av1 = 2;
av2 = 4;
av3 = 1;
av4 = 3;
av5 = 5;
total = av1 + av2 + av3 + av4 + av5;
media = total / 5;
console.log(`Média das avaliações é: ${media}`);
porcentagem = (media / 5) * 100;
console.log(`A porcentagem das avaliações é: ${porcentagem}%`);
//Classe matemática chamada Math é usada para efetuar operações matemáticas de forma mais dinâmica através de métodos.

//Método random.
n = Math.random() * 5; // Esse range aqui será de 0 à 4
console.log(n); //Aqui a saída será um número Real ou Float.
//Para convertê-lo para inteiro usado o método parseInt()
n = parseInt(Math.random() * 5 + 1);
console.log(n);

//Agora refazendo as avaliações:
av1 = parseInt(Math.random() * 5 + 1);
av2 = parseInt(Math.random() * 5 + 1);
av3 = parseInt(Math.random() * 5 + 1);
av4 = parseInt(Math.random() * 5 + 1);
av5 = parseInt(Math.random() * 5 + 1);
total = av1 + av2 + av3 + av4 + av5;
media = total / 5;
console.log(`Média das avaliações é: ${media}`);
porcentagem = (media / 5) * 100;
console.log(`A porcentagem das avaliações é: ${porcentagem}%`);

aval = [5, 4, 1, 3, 5]; //Array
console.log(aval[n]);
