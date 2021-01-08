let a = 3

console.log(this.a)
console.log(global.a)

global.b = 123
this.c = 456
this.d = false
this.e = true

console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

abc = 3 // criando uma variável sem var e let. Não faça isso
console.log(global.abc)

// module.exports = { e: 456, f: false, g: "teste"}