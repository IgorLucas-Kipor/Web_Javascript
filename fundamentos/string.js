// pode ser delimitada com aspas duplas, aspas simples ou símbolo de crase quando se precisa de template string

const escola = 'Cod3r'

console.log(escola.charAt(4))
console.log(escola.charCodeAt(4)) //unicode
console.log(escola.indexOf('d')) //onde está esse valor

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat('!'))
console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\w/, 'e'))
console.log(escola.replace(/\w/g, 'e'))

console.log('Ana,Maria,João,Igor'.split(','))

