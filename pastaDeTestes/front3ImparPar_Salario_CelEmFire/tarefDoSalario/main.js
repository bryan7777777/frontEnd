function media() {
    let vendas, salario, result, comissao, comissaoValor, pagamento, nome;

    nome = prompt("digite seu nome");
    salario = Number(prompt("digite seu salario"));
    vendas = Number(prompt("digite o valor das vendas"));

    if (vendas >= 3000) {
        comissao = 15;
    } else {
        if (vendas >= 1500) {
            comissao = 10;
        } else {
            comissao = 5;
        }
    }

    // porcentagem é o numero que eu quero dividir vezes o divisor dividido por 100, ex 2000 X 15 / 100

    comissaoValor = vendas * comissao / 100;
    pagamento = salario + comissaoValor;

    alert(`Vendedor: ${nome} \n ____________________ \n Valor das Vendas: ${vendas} \n Valor da Comissão: ${comissao} \n Valor do Salario: ${salario} \n \n Pagamento: ${pagamento}`);
}

function main() {
    
}

media();