const peso1 = 1.0
const peso2 = Number(2.0)

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

// para definir quantas casas decimais você deseja que uma variável demonstre, usa-se o toFixed

console.log(media.toFixed(2))

//para converter um valor number para String, usa-se toString
//para converter o valor de um number para binário, pode-se usar o toString passando, no parêntese, a base a ser usada
//(no caso de binário, a base é 2)

console.log(media.toString(2)) //em binário
console.log(typeof media)
console.log(typeof Number) //Number com n maiúsculo é uma função, com n minúsculo é o tipo do dado