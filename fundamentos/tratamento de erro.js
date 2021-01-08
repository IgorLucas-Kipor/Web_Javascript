function tratarErroELancar(erro) {
    //throw new Error('...')
    // throw 10
    throw {
        nome: erro.name,
        msg: erro.mensagem,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e) 
    } finally {
        console.log('final')
    }
}

const obj = { name: 'Igor'}

imprimirNomeGritado(obj)