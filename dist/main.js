import { converter } from "./parser.js";
function executar() {
    let entrada = document.getElementById("entrada");
    let saida = document.getElementById("saida");
    saida.textContent = converter(entrada.value);
}
function limpar() {
    let entrada = document.getElementById("entrada");
    let saida = document.getElementById("saida");
    entrada.value = "";
    saida.textContent = "";
}
window.executar = executar;
window.limpar = limpar;
