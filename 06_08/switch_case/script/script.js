var parametro = prompt("Digite um numero: ")
let p = document.createElement('p')

switch (parseInt(parametro)) {

    case 1: 
    p.textContent("Parametro 1")    
    break

    case 2:
    p.textContent("parametro 2")
    break

    default:
    p.textContent("default")
    break
}