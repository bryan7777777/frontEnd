function main() {
    let reset = document.getElementById("table")
    reset.innerHTML = "";

    let result;
    const multiplicador = Number(document.getElementById("multiplicador").value);
    let limiteInicio = Number(document.getElementById("limiteInicio").value);
    const limiteFim = Number(document.getElementById("limiteFim").value);

    while (limiteInicio <= limiteFim) {

        result = multiplicador * limiteInicio

        let table = document.getElementById("table");

        let tr = document.createElement("tr");

        let th1 = document.createElement("th");
        th1.innerHTML = multiplicador;

        let th2 = document.createElement("th");
        th2.innerHTML = "X";

        let th3 = document.createElement("th");
        th3.innerHTML = limiteInicio;

        let th4 = document.createElement("th");
        th4.innerHTML = "=";

        let th5 = document.createElement("th");
        th5.innerHTML = result

        tr.appendChild(th1);
        tr.appendChild(th2);
        tr.appendChild(th3);
        tr.appendChild(th4);
        tr.appendChild(th5);
        table.appendChild(tr);
        
        limiteInicio++
    }
}