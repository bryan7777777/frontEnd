function contadorCrescente(primeiroNum, segundoNum) {
    let result = 0

    while (primeiroNum <= segundoNum) {
        if (result === 0) {
            result = `Saida \n ${primeiroNum} INICIO`
        } else if (primeiroNum === segundoNum) {
            result = `${result} \n ${primeiroNum} FIM`
        } else {
            result = `${result} \n ${primeiroNum}`   
        }
        primeiroNum++
    }

        return result
} 

function contadorDecrescente(primeiroNum, segundoNum) {
    let result = 0

    while (primeiroNum >= segundoNum) {
        if (result === 0) {
            result = `Saida: \n ${primeiroNum} INICIO`
        } else if (primeiroNum === segundoNum) {
            result = `${result} \n ${primeiroNum} FIM`
        } else {
            result = `${result} \n ${primeiroNum}`   
        }
        primeiroNum--
    }

    return result
}

    

function main() {
    let numeroUm, numeroDois
    
    numeroUm = Number(prompt('qual o primeiro numero que você deseja?'))
    numeroDois = Number(prompt('qual o segundo numero que você deseja?'))

    if (numeroUm < numeroDois) {
        alert(contadorCrescente(numeroUm, numeroDois))
    } else if (numeroUm > numeroDois) {
        alert(contadorDecrescente(numeroUm, numeroDois))
    } else {
        alert('erro')
    }
    
}

main();