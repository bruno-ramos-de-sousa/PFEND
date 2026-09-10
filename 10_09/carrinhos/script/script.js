const veiculo1 = document.getElementById("carro1");
const veiculo2 = document.getElementById("carro2");
const veiculo3 = document.getElementById("carro3");
const btncorrer = document.getElementById("run");

function correr() {
  const posicao1 = veiculo1.getBoundingClientRect().left;
  const posicao2 = veiculo2.getBoundingClientRect().left;
  const posicao3 = veiculo3.getBoundingClientRect().left;

  const sorteio = Math.floor(Math.random() * 3) + 1;

  if (posicao1 < 1300 && posicao2 < 1300 && posicao3 < 1300) {
    switch (sorteio) {
      case 1:
        veiculo1.style.left = posicao1 + 50 + "px";
        console.log("Carro 1 se mecheu");
        console.log("Posição carro 1: " + posicao1);
        break;
      case 2:
        veiculo2.style.left = posicao2 + 50 + "px";
        console.log("Carro 2 se mecheu");
        console.log("Posição carro 2: " + posicao2);
        break;
      case 3:
        veiculo3.style.left = posicao3 + 50 + "px";
        console.log("Carro 3 se mecheu");
        console.log("Posição carro 3: " + posicao3);
        break;
    }
  }
}

btncorrer.addEventListener("click", correr);
