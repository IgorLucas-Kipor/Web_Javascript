var numero = 1
{
    let numero = 2
    console.log('dentro = ' + numero)
}

console.log('fora = ' + numero)

/* como var e let tem escopos diferentes, mesmo com ambas as variáveis tendo o mesmo nome as duas conseguem coexistir,
sendo chamado o let quando dentro do escopo em que ela está inserida e o var quando fora dele. Mudar ambas as variáveis
para let não causa disferença nesse caso */

/* em outras palavras, quando se tem duas variáveis com o mesmo nome se dá preferência para procurar e usar aquela que
está no escopo menor, utilizando-se a que se encontra no escopo maior apenas caso não se encontre outra alternativa
Let tem escopo global, escopo de função e escopo de bloco */