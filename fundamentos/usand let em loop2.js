const funcs = []

for (let i=0; i<10; i++) {
    funcs.push(function() {
       console.log(i)
    })
}

funcs[2]()
funcs[8]()

/* como i tem escopo de bloco, ele tem memória e pode ser acessado os seus valores em diferentes momentos, ao contrário
do que se vê ao utilizar o var */