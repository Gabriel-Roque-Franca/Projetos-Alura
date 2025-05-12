alert('Boas vindas ao jogo do número secreto');

let numeroMaximo = 5000;
// Adicione um console.log para mostrar o valor do "numeroSecreto"
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let tentativas = 1;
console.log(numeroSecreto);
// Adicione um console.log para verificar o valor de "chute" após a entrada do usuário
let chute;
console.log('Valor do chute:', chute);

//enquanto o chute não for igual ao n.s.  
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // se o chute for igual ou não ao número secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1
        tentativas++;
    }
}
/*
if (tentativas > 1) {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
} else {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
}
    OPERADOR TERNÁRIO
*/
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
