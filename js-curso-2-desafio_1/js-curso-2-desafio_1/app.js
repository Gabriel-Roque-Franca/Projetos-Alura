let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do Desafio";

function verificarConsole() {
    console.log("O botão foi clicado");
}

function verificarAlert() {
    alert("EU amo JS");
}

function verificarPrompt() {
    let pergunta = prompt("Digite o nome de uma cidade: ");
    alert(`Estive em ${pergunta} e lembrei de você`);
}

function verificarSoma() {
    let valor1 = parseInt(prompt("Digite o primeiro valor: "));
    let valor2 = parseInt(prompt("Digite o segundo valor: "));
    let resultado = (valor1 + valor2);
    alert(`${valor1} + ${valor2} = ${resultado}`);
}