const dataInicial = new Date(2024, 8, 7);

// --- Tempo Juntos ---
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

  let minutos = minutosTotais % 60;
  let segundos = segundosTotais % 60;

  document.getElementById('contador').innerHTML =
    `${anos} anos, ${meses} meses, ${dias} dias<br>` +
    `${horasTotais} horas, ${minutos} minutos e ${segundos} segundos`;
}

// --- Corações flutuantes ---
const heartCreate = () => {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerText = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
};
setInterval(heartCreate, 800);

// --- Contagem regressiva casamento ---
const dataCasamento = new Date(2027, 9, 9, 15, 15);

function calcularContagemRegressiva() {
  const agora = new Date();
  let diferenca = dataCasamento - agora;

  if (diferenca <= 0) {
    document.getElementById('contadorCasamento').innerHTML = "🎉 Chegou o grande dia! 🎉";
    return;
  }

  let dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  let horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
  let minutos = Math.floor((diferenca / (1000 * 60)) % 60);
  let segundos = Math.floor((diferenca / 1000) % 60);

  document.getElementById('contadorCasamento').innerHTML =
    `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos 💍`;
}

// --- Inicialização ---
setInterval(calcularTempoJuntos, 1000);
setInterval(calcularContagemRegressiva, 1000);

window.onload = () => {
  calcularTempoJuntos();
  calcularContagemRegressiva();
};
