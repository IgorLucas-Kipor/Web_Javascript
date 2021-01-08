const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores[4])

valores[10] = 52
console.log(valores)
console.log(valores.length)

valores[6] = 'Oi Gabriel'
console.log(valores)

valores.push({id: 3}, null, false, "teste") //adiciona elementos ao array
console.log(valores)

console.log(valores.pop()) //retira o último elemento do array e o imprime separadamente

delete valores[0] //deleta o elemento no índice 0 do array, deixando um espaço vazio
console.log(valores)

console.log(typeof valores)