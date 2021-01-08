/* Quando se trabalha com tipos primitivos e se iguala uma variável a outra, se passa uma cópia do valor dela.
Por exemplo, let c = 3
let d = c
d++
Valores atuais: d = 4, c = 3
Em outras palavras, eu copio os valores presentes naquele momento, mas os valores de cada variável são diferentes e
consequentemente podem ser trabalhados diferentemente uns dos outros.
Quando se trabalha com objetos ou funções e se passa iguala uma variável a outra, se copia o valor de referência da memória
Por exemplo, const a = {name: "Teste"}
const b = a
b.name = "Igor"
Valores atuais: a = name: Igor; b = name: Igor
As variáveis em si não contém o valor, elas contém uma referência para o local onde está armazenado esse valor na memória
Sendo assim, se altero o valor por a ou por b, ambas sentem a diferença, já que elas não retém o valor independentemente,
Mas apenas referenciam a posição onde ele se encontra */

let valor // não inicializada
console.log(valor) //undefined, pois o valor ainda não foi definido
// console.log(valor2)

/*Is not defined e undefined são diferentes
Undefined: variável foi declarada mas não foi passado um valor para ela
Is not defined: variável não foi declarada */

valor = null //variável não tem nenhum valor nem aponta para nenhum local de memória. Ausência de valor
//nesse ponto "valor" foi definida, mas estou dizendo que ela não aponta para nada

console.log(valor)

// para zerar uma variável se atribua o null, nunca o undefined

const produto = {}

console.log(produto.preco)
console.log(produto)

produto.preco = 3.50

console.log(produto)
