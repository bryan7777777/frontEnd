function imparPar(primeiroNum, segundoNum) {

}

function main() {
    let numMaior1, numMenor1, limitadorNumMaior, imparParNome, imparParNome1, result

    numMenor1 = Number(prompt('qual o menor numero que você deseja?'))
    numMaior1 = Number(prompt('qual o maior numero que você deseja?'))

    numMenor1++
    limitadorNumMaior = numMaior1 - 1
    imparParNome = numMenor1 % 2

    if (imparParNome === 0) {
        imparParNome1 = 'Par'
    } else {
        imparParNome1 = 'Impar'
    }

    result = `${numMenor1} - ${imparParNome1}`;

    while (numMenor1 < limitadorNumMaior) {

        numMenor1++ 
        imparParNome = numMenor1 % 2
        
        if (imparParNome === 0) {
            imparParNome1 = 'Par'
        } else {
            imparParNome1 = 'Impar'
        }
    
        result = `${result} \n ${numMenor1} - ${imparParNome1}`;        
    }
    alert(result)
}

main();