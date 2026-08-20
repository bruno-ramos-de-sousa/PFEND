const globo1 = document.getElementById("principal");
const globo2 = document.getElementById("principall");
const globo3 = document.getElementById("principalll");
const vermelho = "red";
const amarelo = "yellow";
const verde = "green";
const desligado = "rgba(0, 0, 0, 0.5)";

function apagarTodas() {
  globo1.style.backgroundColor = desligado;
  globo2.style.backgroundColor = desligado;
  globo3.style.backgroundColor = desligado;
}

function acao(idElemento) {
  apagarTodas();
  switch (idElemento) {
    case 1:
      globo1.style.backgroundColor = vermelho;
      break;
    case 2:
      globo2.style.backgroundColor = amarelo;
      break;
    case 3:
      globo3.style.backgroundColor = verde;
      break;
  }
}
