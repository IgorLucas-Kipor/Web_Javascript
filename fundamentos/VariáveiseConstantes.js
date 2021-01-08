var a = 3
//variável a vai receber o valor 3

let b = 4
//variável b recebe valor 4

//var e let são ambas variáveis, com diferenças. Regra geral priorizar usar let atualmente

var a = 30
b = 40


//você pode atribuir novamente valores a mesma variável var dentro de um mesmo escopo
console.log(a, b)

a = 300
b = 400

console.log(a, b)

const c = 5
// c = 500

//não se pode atribuir valores a uma variável constante depois de instaurá-la

//por padrão, sempre que se trabalhar com uma variável que se sabe que o valor não vai mudar, atribua ela como constante

//tentar não ficar alterando os valores das variáveis, apenas deixá-los evoluir naturalmente

console.log(c)