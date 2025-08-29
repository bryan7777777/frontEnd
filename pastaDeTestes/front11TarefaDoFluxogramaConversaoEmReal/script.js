function main() {

let valorConverter,
cotacaoMoeda,
valorConvertid, opcaoMoeda,  simboloMoeda

opcaoMoeda = Number(prompt('Olá! Qual conversão você deseja realizar hoje? digite 1 para dolar e 2 para euro'));

if (opcaoMoeda != 1 && opcaoMoeda != 2){
    alert('opção invalida!!!');
}
else if (opcaoMoeda == 1){
    valorConverter = Number(prompt('Digite o valor que deseja converter em reais'));
    cotacaoMoeda = Number(prompt('Digite a cotação do dolar'));
    valorConvertid =  valorConverter/cotacaoMoeda;
    simboloMoeda = 'U$';
    moeda = 'dólar';
}
else if (opcaoMoeda == 2){
    valorConverter = Number(prompt('Digite o valor que deseja converter em reais'));
    cotacaoMoeda = Number(prompt('Digite a cotação do euro'));
    valorConvertid =  valorConverter/cotacaoMoeda;
    simboloMoeda = '€';
    moeda = 'euro';
}

alert("o valor convertido em "+ moeda + " é " + simboloMoeda + valorConvertid.toFixed(2))
}

main();