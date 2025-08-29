function Celsius(converterC) {
    let result
    result = (converterC * 1.8) + 32;
    return result;
}

function Fahrenheit(converterF) {
    result = (5 / 9) * (converterF - 32);
    return result;
}

function main() {
    let celsius, fahrenheit, escolhaConversao

    escolhaConversao = Number(prompt('Digite 1 para converter graus celsius em fahrenheit, digite 2 para converter graus fahrenheit em celsius'))

    if (escolhaConversao === 2 || escolhaConversao ===1) {
        if (escolhaConversao === 1) {       
         celsius = Number(prompt('digite o valor em celsius que você deseja converter'))
         alert(Celsius(celsius));
        } else {
         fahrenheit = Number(prompt('digite o valor em fahrenheit que você deseja converter'))
         alert(Fahrenheit(fahrenheit));
        }        
    } else {
        alert('erro, numero invalido')
    }
}

// function Celsius(converterC) = Celsius é o nome da função, (converterC) é o valor enviado para ele, pode ter qualquer nome por ex (valor), e esse nome sera usado como uma variavel que n precisa ser declarada, ou seja, um parametro/params

// alert(Celsius(celsius)); = Celsius é o nome da função que ele esta chamando e (celsius) é o valor que ele esté enviando, que é uma variavel que ja ganhou valor e foi declarada dentro do main, e do outro lado (converterC) é literalmente (celsius) porem com uma nome diferente, imagine que a informação dentro da carta é a msm, só muda o envelope

main();