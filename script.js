const dataInicial = new Date(2024, 8, 7);

function calcularTempoJuntos() {
    const agora = new Date();
    let diferenca = agora - dataInicial;

    let anos = agora.getFullYear() - dataInicial.getFullYear();
    let meses = agora.getMonth() - dataInicial.getMonth();
    let dias = agora.getDate() - dataInicial.getDate();

    if (dias < 0) {
        meses--;
        const ultimoMes = new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
        dias += ultimoMes;
    }

    if (meses < 0) {
        anos--;
        meses += 12;
    }

    let segundosTotais = Math.floor(diferenca / 1000);
    let minutosTotais = Math.floor(segundosTotais / 60);
    let horasTotais = Math.floor(minutosTotais / 60);

    let horas = horasTotais % 24;
    let minutos = minutosTotais % 60;
    let segundos = segundosTotais % 60;


    document.getElementById('contador').innerHTML =
        `${anos} anos, ${meses} meses, ${dias} dias, <br>` +
        `${horasTotais} horas, ${minutos} minutos e ${segundos} segundos`;
}

setInterval(calcularTempoJuntos, 1000);
window.onload = calcularTempoJuntos;
