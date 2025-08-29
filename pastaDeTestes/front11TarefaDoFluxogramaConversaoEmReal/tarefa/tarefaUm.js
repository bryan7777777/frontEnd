function tabuadaPrime() {

    let tabuada, i, result, saida, limite;
    
    tabuada = Number(prompt('digite o valor que você deseja ver a tabuada'));
    limite = Number(prompt('até quanto você deseja que seja a tabuada?'))

    i = 0;
    saida = ''

    while (i <= limite){
        result = tabuada * i;
        if (i===0) {
            saida = tabuada + ' X '+ i + ' = ' + result;
        } else {
            //  ${} serve para sinaloizar variavel
            //  ` junta variavel com txt, serve para abrir e fechar
            saida =  `${saida} \n ${tabuada} X ${i} = ${result}`;
        }
        i++;
    }
    
    alert(saida);
}

// toLowerCase serve para converter todo o texto dentro de tal variavel para minusculo
// trim remove espaços em branco antes e depois do txt digitado

function tarefaUm() {
    tabuadaPrime();
    
    let perguntar;
    perguntar = prompt('você quer continuar e fazer outra tabuada? Digite sim para continuar e nao para parar').toLowerCase().trim();

    if (perguntar === 'sim' || perguntar === 's') {
    while (perguntar === 'sim' || perguntar === 's') {
        tabuadaPrime();
        perguntar = prompt('você quer continuar e fazer outra tabuada? Digite sim para continuar e nao para parar').toLowerCase().trim();
    }
} else if (perguntar === 'nao' || perguntar === 'n' || perguntar === 'não'){
    alert('Encerrando programa')
} else {
    alert('erro')
}
}

tarefaUm();

// return "variavel"; retorna uma variavel para a função no qual ele está dentro