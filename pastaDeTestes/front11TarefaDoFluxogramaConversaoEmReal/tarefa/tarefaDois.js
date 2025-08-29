//escopo global
 
function Tabuada(tabuadaUsuario, limiteDaTabuada){
    //escopo específico
    let contador = 0, resultado, saidaTabuada;
 
    while (contador <= limiteDaTabuada) {    
        //Atribuindo valor a variavel resultado
        resultado = tabuadaUsuario * contador;
        if (contador === 0) {
            saidaTabuada = tabuadaUsuario + "X" + contador + "=" + resultado;
        } else {
            saidaTabuada = `${saidaTabuada} \n ${tabuadaUsuario} X ${contador} = ${resultado}`; //Template String      
        }
        contador = contador + 1; //contador++;        
    }    
    return saidaTabuada;
}

function main() {
    //Declarando Variaveis
    let tabuada;
 
    //Entrada de dados
    //Atribuindo valor a variavel (tabuada)
    tabuada = Number(prompt("Qual a tabuada você deseja resolver?"));
    limiteDaTabuada = Number(prompt('Até quanto você deseja que vá a tabuada?')) 
 
    // REPETIÇÃO COM WHILE
    //Enquanto contador for menor ou igual a 10 for verdade repetir se não falso
    console.log(Tabuada(tabuada, limiteDaTabuada));
    alert(Tabuada(tabuada, limiteDaTabuada));   
}


 
// pegar os dados
// faz tabuada
// exibe a saída  
 
 
main();