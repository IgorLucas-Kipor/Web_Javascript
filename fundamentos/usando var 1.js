{
    {
        {
            {
                 var sera = "Será???"}
        }
    }
}

/*Em var, dentro de um bloco de código que não será função, ela fica visível para todos fora do bloco.
Variáveis definidas por var só tem dois escopos possíveis: global (visível na aplicação inteira) ou em escopo de função*/

console.log(sera)

function teste() {
    var local = 123
    console.log(local)
}

teste()
console.log(local)

/* Quandos e cria uma variável var fora de uma função essa variável é global, estando disponível dentro do objeto window
Escopo global deve ser evitável porque quando a variável vai para esse escopo, qualquer sobrescrita dessa variável pode
causar um problema muito sério */

