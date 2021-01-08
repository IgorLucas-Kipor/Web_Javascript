// Função sem retorno

function imprimirSoma(a, b){
    console.log(a+b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10, 8, 5, 3, 12, 7)
imprimirSoma()

// Função com retorno

function soma(a, b = 1) {
    //valor padrão de b será 1 quando nenhum outro for passado
    return a+b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())