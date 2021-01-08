console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome; //this distingue o nome da função objeto com o nome recebido por ela, sendo usado para estabelecer diferenças no caso de nomes iguais para variáveis, além de torná-lo visível
    this.exec = function() {
        console.log("Exec...")
    }
}

const obj2 = new Obj('cadeira')
const obj3 = new Obj('sapato')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()