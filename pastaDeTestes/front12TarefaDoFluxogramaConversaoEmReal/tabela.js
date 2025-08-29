    function tabuadaPrime() {

        let tabuada, i, result, saida;
        
        tabuada = Number(prompt('digite o valor que você deseja ver a tabuada'));
        
        i = 0;
        saida = ''
        
        while (i <= 10){
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

    tabuadaPrime ();