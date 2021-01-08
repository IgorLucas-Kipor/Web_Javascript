// novo recurso do AS 2015

const pessoa = {
    nome: 'Igor',
    idade: 25,
    endereco: {
        logradouro: "rua santana",
        numero: 886
    }
}

const { nome, idade } = pessoa

console.log(nome)
console.log(idade)

const { nome: n, idade: i} = pessoa

console.log(n)
console.log(i)

const { sobrenome, bemHumorada = true} = pessoa

console.log(sobrenome)
console.log(bemHumorada)

const { endereco: {logradouro, numero}} = pessoa

console.log(logradouro)
console.log(numero)