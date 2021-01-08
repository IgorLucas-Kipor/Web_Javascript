console.log(typeof Object)
console.log(typeof new Object()) //parênteses podem ser omitidos nesse caso

const cliente = function() {

}

console.log(typeof cliente)
console.log(typeof new cliente())

class Produto {}

console.log(typeof Produto)
console.log(typeof new Produto())

/* função exerce o papel de uma classe, definindo o molde da sua estrutura, funções e variáveis, permitindo a você instanciar
aquela função quantas vezes você quiser. Quando se cria um objeto literal você já está definindo uma instância

Função = molde (pode ser instanciada)
Objeto = instanciada */