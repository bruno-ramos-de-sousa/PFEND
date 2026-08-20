const retrnResp = document.getElementById("retrn-resposta");
var pontos;

function mudarPagina(url) {
  setTimeout(function () {
    window.location.href = url;
  }, 3000);
}

function verificarResp(event) {
  const resposta1 = document.querySelector('input[name="pergunta1"]:checked');
  const correto = resposta1.value === "1";
  event.preventDefault();

  if (correto) {
    retrnResp.innerText = "Resposta correta";
    retrnResp.style.color = "green";
    mudarPagina("./segunda-pergunta.html");
    pontos += 1;
    sessionStorage.setItem("varpontos", pontos);
  } else {
    retrnResp.innerText = "Resposta Incorreta";
    retrnResp.style.color = "red";
    setTimeout(function () {
    retrnResp.innerText = "";
  }, 1000);
  }
}
