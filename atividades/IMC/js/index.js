function main() {
    // RESET
    let reset = document.getElementsByClassName("tabela__infos");
    for (let i = 0; i < reset.length; i++) {
        reset[i].innerText = "";
    }

    let resetImg = document.getElementById("imgPeso");
    resetImg.innerHTML = "";
    let resetImg2 = document.getElementById("imgPeso2");
    resetImg2.innerHTML = "";

    // CAPTURA DE DADOS
    let peso = Number(document.getElementById("peso").value);
    let altura = Number(document.getElementById("altura").value);
    let genero1 = document.getElementById("generos").value.toLowerCase();

    let result = peso / (altura * altura);
    let pesoIdeal = 22 * (altura * altura);
    
    // ANÁLISE IMC
    if (result < 18.5) {
        document.getElementById("seuPeso").innerText = 'Abaixo do normal';
        document.getElementById("imc").innerText = result.toFixed(2);
        document.getElementById("PesoIdeal").innerHTML = pesoIdeal.toFixed(2);
        document.getElementById("riscos").innerText = 'Deficiências nutricionais, baixa imunidade, perda de massa muscular, fadiga.';
        document.getElementById("recomendacoes").innerText = 'Aumentar a ingestão calórica com alimentos nutritivos (castanhas, abacate, azeite, ovos).';
        document.getElementById("recomendacoes1").innerText = 'Fazer refeições frequentes e balanceadas.';
        document.getElementById("recomendacoes2").innerText = 'Praticar exercícios de resistência para ganhar massa muscular.';
        document.getElementById("recomendacoes3").innerText = 'Consultar um nutricionista para um plano alimentar personalizado.';
    } else if (result < 24.9) {
        document.getElementById("seuPeso").innerText = 'Normal';
        document.getElementById("imc").innerText = result.toFixed(2);
        document.getElementById("PesoIdeal").innerHTML = pesoIdeal.toFixed(2);
        document.getElementById("riscos").innerText = 'Menores riscos de doenças crônicas.';
        document.getElementById("recomendacoes").innerText = 'Manter uma alimentação equilibrada com frutas, legumes, proteínas e grãos integrais.';
        document.getElementById("recomendacoes1").innerText = 'Praticar atividade física regularmente (150 minutos por semana).';
        document.getElementById("recomendacoes2").innerText = 'Evitar alimentos ultraprocessados e excesso de açúcar.';
        document.getElementById("recomendacoes3").innerText = 'Monitorar o peso periodicamente para manter a faixa saudável.';
    } else if (result < 29.9) {
        document.getElementById("seuPeso").innerText = 'Sobrepeso';
        document.getElementById("imc").innerText = result.toFixed(2);
        document.getElementById("PesoIdeal").innerHTML = pesoIdeal.toFixed(2);
        document.getElementById("riscos").innerText = 'Aumento do risco de doenças cardiovasculares, diabetes tipo 2, hipertensão.';
        document.getElementById("recomendacoes").innerText = 'Reduzir o consumo de calorias, especialmente de açúcares e gorduras saturadas.';
        document.getElementById("recomendacoes1").innerText = 'Aumentar a prática de exercícios aeróbicos e de força.';
        document.getElementById("recomendacoes2").innerText = 'Dormir bem e controlar o estresse.';
        document.getElementById("recomendacoes3").innerText = 'Buscar orientação profissional para mudanças sustentáveis no estilo de vida.';
    } else if (result < 34.9) {
        document.getElementById("seuPeso").innerText = 'Obesidade grau I';
        document.getElementById("imc").innerText = result.toFixed(2);
        document.getElementById("PesoIdeal").innerHTML = pesoIdeal.toFixed(2);
        document.getElementById("riscos").innerText = 'Alto risco de doenças crônicas, problemas articulares, apneia do sono, entre outros.';
        document.getElementById("recomendacoes").innerText = 'Adotar uma dieta hipocalórica supervisionada por nutricionista.';
        document.getElementById("recomendacoes1").innerText = 'Praticar atividade física adaptada à condição física.';
        document.getElementById("recomendacoes2").innerText = 'Avaliar causas emocionais e comportamentais com apoio psicológico.';
        document.getElementById("recomendacoes3").innerText = 'Em casos mais graves, considerar tratamentos médicos ou cirúrgicos com acompanhamento especializado.';
    } else {
        document.getElementById("seuPeso").innerText = 'Obesidade grau II-III';
        document.getElementById("imc").innerText = result.toFixed(2);
        document.getElementById("PesoIdeal").innerHTML = pesoIdeal.toFixed(2);
        document.getElementById("riscos").innerText = 'Alto risco de doenças crônicas, problemas articulares, apneia do sono, entre outros.';
        document.getElementById("recomendacoes").innerText = 'Adotar uma dieta hipocalórica supervisionada por nutricionista.';
        document.getElementById("recomendacoes1").innerText = 'Praticar atividade física adaptada à condição física.';
        document.getElementById("recomendacoes2").innerText = 'Avaliar causas emocionais e comportamentais com apoio psicológico.';
        document.getElementById("recomendacoes3").innerText = 'Em casos mais graves, considerar tratamentos médicos ou cirúrgicos com acompanhamento especializado.';
    }

    // IMAGENS
    let imglink1 = "", imglink2 = "";

    if (genero1 === "homem" || genero1 === "m" || genero1 === "masculino") {
        if (result < 18.5) {
            imglink1 = "./img/homens/azul.png";
            imglink2 = "./img/homens/hAbaixoDoPeso.png";
        } else if (result < 24.9) {
            imglink1 = "./img/homens/verd.png";
            imglink2 = "./img/homens/hNormal.png";
        } else if (result < 29.9) {
            imglink1 = "./img/homens/amarelo.png";
            imglink2 = "./img/homens/hAcimaDoPeso.png";
        } else if (result < 34.9) {
            imglink1 = "./img/homens/laranja.png";
            imglink2 = "./img/homens/hSobrePeso.png";
        } else {
            imglink1 = "./img/homens/vermelho.png";
            imglink2 = "./img/homens/hSobrePeso.png";
        }
    } else if (genero1 === "mulher" || genero1 === "f" || genero1 === "feminino") {
        if (result < 18.5) {
            imglink1 = "./img/mulheres/azul.png";
            imglink2 = "./img/mulheres/mAbaixoDoPeso.png";
        } else if (result < 24.9) {
            imglink1 = "./img/mulheres/verd.png";
            imglink2 = "./img/mulheres/mNormal.png";
        } else if (result < 29.9) {
            imglink1 = "./img/mulheres/amarelo.png";
            imglink2 = "./img/mulheres/mAcimaDoPeso.png";
        } else if (result < 34.9) {
            imglink1 = "./img/mulheres/laranja.png";
            imglink2 = "./img/mulheres/mSobrePeso.png";
        } else {
            imglink1 = "./img/mulheres/vermelho.png";
            imglink2 = "./img/mulheres/mSobrePeso.png";
        }
    } else {
        alert('Erro, valor inválido na caixa "Informe seu genero", as imagens e os dados sobre seu IMC não serão carregadas. Verifique sua resposta!');
        reset = document.getElementsByClassName("tabela__infos");
    for (let i = 0; i < reset.length; i++) {reset[i].innerText = "";}
    resetImg = document.getElementById("imgPeso");
    resetImg.innerHTML = "";
    resetImg2 = document.getElementById("imgPeso2");
    resetImg2.innerHTML = "";
    }

    let img1 = document.createElement("img");
    img1.src = imglink1;

    let img2 = document.createElement("img");
    img2.src = imglink2;

    document.getElementById("imgPeso").appendChild(img1);
    document.getElementById("imgPeso2").appendChild(img2);
}