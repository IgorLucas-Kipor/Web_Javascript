console.log(a)
var a = 2
console.log(a)

/* o conceito de hoisting "iça" o valor para cima, ou seja, caso veja que se utiliza a variável antes da sua declaração
e atribuição de valores, o programa identifica que ela é definida posteriormente, mostra o seu valor como undefined no
instante antes da sua definição e depois faz a atribuição normalmente quando se chega nessa etapa do código

Esse processo acontece normalmente tanto dentro quanto fora de funções, embora em funções seja importante levar em consideração
a diferença de escopo causada pelas mesmas

Esse efeito de içamento não ocorre com let, mas apenas com o var */