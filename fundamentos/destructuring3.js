function rand  ({ min=0, max=1000}) {
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40}

console.log(rand(obj))
console.log(rand({min: 923}))
console.log(rand({}))
/* console.log(rand()) => não pode ser usado */