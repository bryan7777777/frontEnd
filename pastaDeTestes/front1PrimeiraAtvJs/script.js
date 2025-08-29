function main() {
    // declarando variavel em js, var é no geral e let dentro de uma regra
    let bim1, bim2, bim3, bim4, result, resul2;
    var nome;
 
   
    nome = prompt('Enter a value for nome');
 
    bim1 = Number(prompt('Entre com o valor da primeira nota'));
 
    bim2 = Number(prompt('Entre com o valor da segunda nota'));
 
    bim3 = Number(prompt('Entre com o valor da terçeira nota'));
 
    bim4 = Number(prompt('Entre com o valor da quarta nota'));
    result = (bim1 + bim2 + bim3 + bim4) / 4;
    if (result > 6) {
        alert("aluno aprovado, parabens!");
    } else {
        if (result > 4) {
            alert("aluno está de recuperação, se esforce e não perca oportunidade!");
        } else {
            alert("aluno reprovado, se esforce mais!");
        }
    }
    alert("nome do aluno:");
    alert(nome);
    alert("média do aluno:");
    alert(result);
}
 
main();