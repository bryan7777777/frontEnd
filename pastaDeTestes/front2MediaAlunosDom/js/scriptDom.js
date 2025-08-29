function calcularMedia() {

    const nomeAluno = document.getElementById("nomeAluno").value;
    const nota1 = parseFloat (document.getElementById("nota1").value);
    const nota2 = parseFloat (document.getElementById("nota2").value);
    const nota3 = parseFloat (document.getElementById("nota3").value);
    const nota4 = parseFloat (document.getElementById("nota4").value);
    
    let media = (nota1 + nota2 + nota3 + nota4)/4;
    
    document.getElementById("media").value = media.toFixed(2);
    
    if (media >= 7) {
        document.getElementById("situacao").value="aprovado"
    } else if (media >= 5) {
        document.getElementById("situacao").value="recuperação"
    } else {
        document.getElementById("situacao").value="reprovado"
    }
    
}