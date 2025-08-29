function main() {
    let conversao, moeda, nomeMoeda
    const numeroEscolha = Number(document.getElementById("DolarOuEuro").value)
    const valorConverter = Number(document.getElementById("quantoConverter").value)

    if (numeroEscolha == 1) {
        moeda = 5.66
        nomeMoeda = "Dolar"
    } else {
        moeda = 6.41
        nomeMoeda = "Euro"
    }

    conversao = valorConverter / moeda
    document.getElementById("nomeDaMoeda").value = nomeMoeda
    document.getElementById("valorConvertido").value = conversao
}