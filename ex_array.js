//Arrays: São Coleções de Dados
//Pode-se colocar diversos tipos de dados.

let planetas = ['Terra', 'Marte', 'Netuno']
console.log(typeof planetas)
console.log(planetas.constructor)
console.log(planetas)
console.log(planetas.length)
console.log(planetas[1]) //Marte

planetas.forEach(function (v, i) {
    console.log(`${++i} - ${v}`)
})

let profissoes = new Array(
    'Astronauta',
    'Professor',
    'Engenheiro',
    'Arquiteto',
    'Programador'
)

console.log(profissoes)
profissoes.forEach(function (v, i) {
    console.log(`${++i} - ${v}`)
})

let livros = [
    ['Sapiens', 'Feliz'],
    ['Fausto', 'Altiva'],
    ['Homo Deus', 'Feliz'],
    ['Deuses Americanos', 'Panini'],
]
console.log(livros)
console.log(livros[1][0])
console.log('===========================================')
livros.forEach(function (v, i) {
    console.log(`Título: ${v[0]} -- Editora: ${v[1]}`)
})
