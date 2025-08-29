function RealParaDolar(valorConverter) {
    const cotacao = 5.76;
    let valorConvertido = (valorConverter/cotacao).toFixed(2);

    return `U$ ${valorConvertido}`;
}

function RealParaEuro(valorConverter) {
    const cotacao = 6.52
    let valorConvertido = (valorConverter/cotacao).toFixed(2);

    return `€ ${valorConvertido}`;
}

function main() {
    let valorConverter, valorConvertido;
    let opcaoMoeda;
    opcaoMoeda = prompt("Olá, Qual conversão você deseja realizar hoje? 1 - Dólar 2 - Euro");

    if (opcaoMoeda != 1 && opcaoMoeda != 2) {
        alert("Opção inválida!");
    } else {
        valorConverter = prompt("Digite o valor que deseja converter: (em R$)");

        if (opcaoMoeda == 1) {
            valorConvertido = RealParaDolar(valorConverter)
        } else {
            valorConvertido = RealParaEuro(valorConverter)
        }
        alert("O valor convertido em" + valorConvertido).toFixed(2);
    }
}

main();