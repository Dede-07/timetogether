const dataInicial = new Date(2024, 8, 7);

function calcularTempoJuntos() {
    const hoje = new Date();
    let anos = hoje.getFullYear() - dataInicial.getFullYear();
    let meses = hoje.getMonth() - dataInicial.getMonth();
    let dias = hoje.getDate() - dataInicial.getDate();

    if (dias < 0) {
        meses--;
        const ultimoMes = new Date(hoje.getFullYear(), hoje.getMonth(), 0).getDate();
        dias += ultimoMes;
    }

    if (meses < 0) {
        anos--;
        meses += 12;
    }

    document.getElementById('contador').textContent = `${anos} anos, ${meses} meses, ${dias} dias`;
}

window.onload = calcularTempoJuntos;
