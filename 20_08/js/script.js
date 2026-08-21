const retrnResp = document.getElementById("retrn-resposta");
const btnResp = document.getElementById("submit");
const form = document.getElementById("form");
const txtAlternativas = document.querySelectorAll(".text");

if (performance.getEntriesByType("navigation")[0].type === "reload") {
  sessionStorage.removeItem("varpontos");
  sessionStorage.removeItem("varpaginas");
  window.location.href = "primeira-pergunta.html";
}

var pontos = Number(sessionStorage.getItem("varpontos") || 0);
var pagina = Number(sessionStorage.getItem("varpaginas") || 0);

function mudarPagina() {
  setTimeout(function () {
    pagina += 1;
    sessionStorage.setItem("varpaginas", pagina);

    switch (pagina) {
      case 1:
        window.location.href = "segunda-pergunta.html";
        break;
      case 2:
        window.location.href = "";
        break;
      case 3:
        window.location.href = "";
        break;
      case 4:
        window.location.href = "";
        break;
    }
    retrnResp.style.display = "none";
    btnResp.style.display = "";
  }, 2000);
}

function verificarResp(event) {
  const resposta1 = document.querySelector('input[name="pergunta1"]:checked');
  event.preventDefault();

  btnResp.style.display = "none";

  if (!resposta1) {
    retrnResp.innerText = "Selecione uma opção";
    retrnResp.style.color = "red";
    setTimeout(function () {
      retrnResp.style.display = "none";
      btnResp.style.display = "";
    }, 2000);
    return;
  }

  const correto = resposta1.value === "1";

  if (correto) {
    retrnResp.style.display = "";
    retrnResp.innerText = "Resposta correta";
    retrnResp.style.color = "green";
    pontos += 1;
    sessionStorage.setItem("varpontos", pontos);
  } else {
    retrnResp.style.display = "";
    retrnResp.innerText = "Resposta Incorreta";
    retrnResp.style.color = "red";
  }
  mudarPagina();
}

form.addEventListener("submit", verificarResp);
