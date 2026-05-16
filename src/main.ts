import { converter } from "./parser.js";

function executar(): void {
    let entrada = document.getElementById("entrada") as HTMLTextAreaElement;
    let saida = document.getElementById("saida") as HTMLElement;

    saida.textContent = converter(entrada.value);
}

function limpar(): void {
    let entrada = document.getElementById("entrada") as HTMLTextAreaElement;
    let saida = document.getElementById("saida") as HTMLElement;

    entrada.value = "";
    saida.textContent = "";
}

(window as any).executar = executar;
(window as any).limpar = limpar;
