const escolha = document.getElementById("escolha");
const valorInput = document.getElementById("valor");
const valorPagar = document.getElementById("valorPagar");
const parcelas = document.getElementById("parcelas");
const labelParcelas = document.getElementById("labelParcelas");

function calcular() {
  const escolhaValue = parseInt(escolha.value);
  const qtdParcelas = parseInt(parcelas.value);
  const valor = isNaN(valorInput.value) ? 0.0 : parseFloat(valorInput.value);

  switch (escolhaValue) {
    case 1:
      parcelas.style.display = "none";
      labelParcelas.style.display = "none";
      const totalAVista = valor * 0.95;
      valorPagar.textContent = `Total a pagar R$${totalAVista.toFixed(2)}`;
      break;

    case 2:
      parcelas.style.display = "none";
      labelParcelas.style.display = "none";
      valorPagar.textContent = `Total a pagar R$${valor.toFixed(2)}`;
      break;

    case 3:
      parcelas.style.display = "block";
      labelParcelas.style.display = "block";

      parcelas.innerHTML = `<option value="1">1x de R$${valor.toFixed(2)}</option>
      <option value="2">2x de R$${(valor / 2).toFixed(2)}</option>
      <option value="3">3x de R$${(valor / 3).toFixed(2)}</option>
      <option value="4">4x de R$${(valor / 4).toFixed(2)}</option>
      <option value="5">5x de R$${(valor / 5).toFixed(2)}</option>
      <option value="6">6x de R$${(valor / 6).toFixed(2)}</option>
      <option value="7">7x de R$${(valor / 7).toFixed(2)}</option>
      <option value="8">8x de R$${(valor / 8).toFixed(2)}</option>
      <option value="9">9x de R$${(valor / 9).toFixed(2)}</option>
      <option value="10">10x de R$${(valor / 10).toFixed(2)}</option>`;
      valorPagar.textContent = `Total a pagar R$${valor.toFixed(2)}`;
      break;

    case 4:
      parcelas.style.display = "block";
      labelParcelas.style.display = "block";
      const jurosBaixo = 1.03;
      const jurosMedio = 1.05;
      const jurosAlto = 1.07;

      parcelas.innerHTML = `<option value="1">1x de R$${(valor * jurosBaixo).toFixed(2)}</option>
      <option value="2">2x de R$${((valor * jurosBaixo) / 2).toFixed(2)}</option>
      <option value="3">3x de R$${((valor * jurosBaixo) / 3).toFixed(2)}</option>
      <option value="4">4x de R$${((valor * jurosMedio) / 4).toFixed(2)}</option>
      <option value="5">5x de R$${((valor * jurosMedio) / 5).toFixed(2)}</option>
      <option value="6">6x de R$${((valor * jurosMedio) / 6).toFixed(2)}</option>
      <option value="7">7x de R$${((valor * jurosAlto) / 7).toFixed(2)}</option>
      <option value="8">8x de R$${((valor * jurosAlto) / 8).toFixed(2)}</option>
      <option value="9">9x de R$${((valor * jurosAlto) / 9).toFixed(2)}</option>
      <option value="10">10x de R$${((valor * jurosAlto) / 10).toFixed(2)}</option>`;

      if (qtdParcelas <= 3) {
        valorPagar.textContent = `Total a pagar (3% de juros) R$${(valor * jurosBaixo).toFixed(2)}`;
      } else if (qtdParcelas <= 6) {
        valorPagar.textContent = `Total a pagar (5% de juros) R$${(valor * jurosMedio).toFixed(2)}`;
      } else {
        valorPagar.textContent = `Total a pagar (7% de juros) R$${(valor * jurosAlto).toFixed(2)}`;
      }
      break;
  }
}

escolha.addEventListener("change", calcular);
valorInput.addEventListener("change", calcular);
valorInput.addEventListener("input", calcular);
parcelas.addEventListener("change", calcular);