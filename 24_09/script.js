const fatherTarefas = document.getElementById("tarefas");
var listaTarefas = [];

function listarTarefas() {
  fatherTarefas.innerHTML = "";
  for (let i = 0; i < listaTarefas.length; i++) {
    const tarefa = document.createElement("li");
    tarefa.innerText = listaTarefas[i];
    fatherTarefas.appendChild(tarefa);
  }
}

function inserirTarefa() {
  const tarefaNova = prompt("Insira a tarefa que você deseja inserir:").trim();

  if (tarefaNova.innerText === "" || tarefaNova.innerText === null) {
    alert("Tarefa vazia!!!");
    return;
  }

  listaTarefas[listaTarefas.length] = tarefaNova;
  listarTarefas();
  alertar("Tarefa adicionada com sucesso!!!");
}

function deleteById() {
  const id =
    parseInt(prompt("Digite o id da tarefa que você deseja deletar:").trim()) - 1;

  if (id > listaTarefas.length) {
    alert("Não existe uma tarefa com esse ID!!!");
    return;
  }

  listaTarefas.splice(id, 1);
  listarTarefas();
  alertar("Tarefa deletada com sucesso!!!");
}

function deleteAll() {
  listaTarefas = [];
  listarTarefas();
}

function editById() {
  const id = parseInt(
    prompt("Digite o id da tarefa que você deseja editar:").trim() - 1,
  );

  if (id > listaTarefas.length) {
    alert("Não existe uma tarefa com esse ID!!!");
    return;
  }

  listaTarefas[id] = prompt("Digite o novo conteudo da tarefa:");
  listarTarefas();
  alertar("Editado com sucesso!!!");
}

/*
function inserirTarefa() {
  const tarefaNova = document.createElement("li");
  tarefaNova.innerText = prompt("Insira a tarefa que você deseja inserir:");

  if (tarefaNova.innerText === "" || tarefaNova.innerText === null) {
    alert("Tarefa vazia!!!");
    return;
  }

  tarefas.appendChild(tarefaNova);
  alertar("Tarefa adicionada com sucesso!!!");
}

function deleteById() {
  const id =
    parseInt(prompt("Digite o id da tarefa que você deseja deletar:")) - 1;

  if (id > tarefas.children.length) {
    alert("Não existe uma tarefa com esse ID!!!");
    return;
  }

  tarefas.remove(id);
  alertar("Tarefa deletada com sucesso!!!");
}

function deleteAll() {
  tarefas.remove();
}

function editById() {
  const id = parseInt(
    prompt("Digite o id da tarefa que você deseja editar:") - 1,
  );

  if (id > tarefas.children.length) {
    alert("Não existe uma tarefa com esse ID!!!");
    return;
  }

  tarefas.children[id].innerText = prompt("Digite o novo conteudo da tarefa:");
  alertar("Editado com sucesso!!!");
}

function alertar(mensagem) {
  setTimeout(() => {
    alert(mensagem);
  }, 200);
}
*/
